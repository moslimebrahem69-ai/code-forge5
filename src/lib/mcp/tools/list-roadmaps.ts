import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { ROADMAPS } from "../data";

export default defineTool({
  name: "list_roadmaps",
  title: "List learning roadmaps",
  description:
    "List all learning roadmaps offered by the Software Engineer academy (Frontend, Backend, AI, and more) with their reference URLs.",
  inputSchema: {
    search: z.string().optional().describe("Optional keyword to match in the roadmap name (English or Arabic)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ search }, ctx) => {
    if (!ctx.isAuthenticated()) return { content: [{ type: "text" as const, text: "Not authenticated" }], isError: true };
    const q = search?.toLowerCase();
    const rows = q
      ? ROADMAPS.filter(
          (r) => r.name_en.toLowerCase().includes(q) || r.name_ar.includes(search!),
        )
      : ROADMAPS;
    return {
      content: [{ type: "text", text: JSON.stringify(rows, null, 2) }],
      structuredContent: { roadmaps: rows },
    };
  },
});
