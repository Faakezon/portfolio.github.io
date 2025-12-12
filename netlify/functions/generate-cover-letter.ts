import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

interface RequestBody {
    jobDescription: string;
}

interface OpenAIChoiceMessage {
    role: string;
    content: string;
}

interface OpenAIChoice {
    message: OpenAIChoiceMessage;
}

interface OpenAIResponse {
    choices: OpenAIChoice[];
}

interface CoverLetterResponse {
    coverLetter: string;
}

export const handler: Handler = async (
    event: HandlerEvent,
) => {
    try {
        if (!event.body) {
            return { statusCode: 400, body: "Missing request body" };
        }

        const { jobDescription }: RequestBody = JSON.parse(event.body);

        const prompt = `
You are generating a tailored cover letter for Fabian.
Use the portfolio's skills, tone, and projects.

Job Description:
${jobDescription}

Generate a professional cover letter that sounds like Fabian.
`;

        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [{ role: "user", content: prompt }],
                max_tokens: 700,
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            return { statusCode: response.status, body: errorText };
        }

        const data: OpenAIResponse = await response.json();

        const coverLetter: string =
            data.choices?.[0]?.message?.content ?? "No content generated.";

        const result: CoverLetterResponse = { coverLetter };

        return {
            statusCode: 200,
            body: JSON.stringify(result),
        };
    } catch (error: unknown) {
        let message = "Internal Server Error";

        if (error instanceof Error) {
            message = error.message;
        }

        return {
            statusCode: 500,
            body: message,
        };
    }
};
