import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { COURSES } from "../data";

export default defineTool({
  name: "list_courses",
  title: "List courses",
  description:
    "List Software Engineer academy courses, optionally filtered by category (Frontend, Backend, AI, CS, Security) or level (Beginner, Intermediate, Advanced).",
  inputSchema: {
    category: z.string().optional().describe("Filter by category (case-insensitive)."),
    level: z.string().optional().describe("Filter by level (case-insensitive)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category, level }, ctx) => {
    if (!ctx.isAuthenticated()) return { content: [{ type: "text" as const, text: "Not authenticated" }], isError: true };
    const cat = category?.toLowerCase();
    const lvl = level?.toLowerCase();
    const rows = COURSES.filter(
      (c) =>
        (!cat || c.category.toLowerCase() === cat) &&
        (!lvl || c.level.toLowerCase() === lvl),
    );
    return {
      content: [{ type: "text", text: JSON.stringify(rows, null, 2) }],
      structuredContent: { courses: rows },
    };
  },
});
