import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Next.js 16 renamed the "middleware" file convention to "proxy".
// next-intl's handler works unchanged: it detects the visitor's language and
// redirects / to /fr or /en.
export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`, `sitemap.xml`)
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
