import { defineConfig } from "astro/config";
import { origin, base } from "./src/lib/urls.mjs";
export default defineConfig({
  site: origin,
  base,
  output: "static",
  trailingSlash: "always",
  build: { format: "directory" },
  devToolbar: { enabled: false },
});
