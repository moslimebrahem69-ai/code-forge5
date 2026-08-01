import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { LANGUAGES } from "../data";

export default defineTool({
  name: "list_languages",
  title: "List programming languages",
  description:
    "List programming languages covered by the academy along with difficulty (1-5), estimated learn time, jobs score, and popularity.",
  inputSchema: {
    max_difficulty: z
      .number()
      .int()
      .min(1)
      .max(5)
      .optional()
      .describe("Only include languages with difficulty <= this value."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ max_difficulty }, ctx) => {
    if (!ctx.isAuthenticated()) return { content: [{ type: "text" as const, text: "Not authenticated" }], isError: true };
    const rows =
      max_difficulty == null
        ? LANGUAGES
        : LANGUAGES.filter((l) => l.difficulty <= max_difficulty);
    return {
      content: [{ type: "text", text: JSON.stringify(rows, null, 2) }],
      structuredContent: { languages: rows },
    };
  },
});
