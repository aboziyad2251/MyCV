import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://moh-cv.kohlestate-ksa.online",
  output: "static",
  trailingSlash: "ignore",
  build: { format: "directory" },
});
