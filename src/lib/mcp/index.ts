import { auth, defineMcp } from "@lovable.dev/mcp-js";
import listCoursesTool from "./tools/list-courses";
import listRoadmapsTool from "./tools/list-roadmaps";
import listLanguagesTool from "./tools/list-languages";

// Direct Supabase host is required as the OAuth issuer (RFC 8414 issuer match).
const projectRef = import.meta.env["VITE_SUPABASE_PROJECT_ID"] ?? "project-ref-unset";

export default defineMcp({
  name: "code-forge",
  title: "Code Forge",
  version: "0.2.0",
  instructions:
    "Tools for exploring Code Forge: browse courses (with YouTube URLs), learning roadmaps, and covered programming languages. Requires the caller to sign in with their Code Forge account.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [listCoursesTool, listRoadmapsTool, listLanguagesTool],
});
