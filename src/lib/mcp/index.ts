import { defineMcp } from "@lovable.dev/mcp-js";
import listCoursesTool from "./tools/list-courses";
import listRoadmapsTool from "./tools/list-roadmaps";
import listLanguagesTool from "./tools/list-languages";

export default defineMcp({
  name: "code-forge",
  title: "Code Forge",
  version: "0.1.0",
  instructions:
    "Tools for exploring Code Forge: browse courses (with YouTube URLs), learning roadmaps, and covered programming languages. All content is public and available in Arabic and English.",
  tools: [listCoursesTool, listRoadmapsTool, listLanguagesTool],
});
