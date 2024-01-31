import { fileURLToPath } from "node:url";
import { mergeConfig, defineConfig, configDefaults } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: "jsdom",
      exclude: [...configDefaults.exclude, "e2e/*"],
      root: fileURLToPath(new URL("./", import.meta.url)),
      coverage: {
        exclude: [
          "**/.env",
          "**/.{eslint,mocha,prettier}rc.{?(c|m)js,yml}",
          "src/router/**",
          "/src/assets/fonts/**",
          "/src/assets/sass/**",
          "src/images/**",
          "src/main.js",
          "/src/assets/**",
          "postss.config.cjs",
          "vite.config.js",
          "tailwind.config.js",
          "src/components/icons/**",
          "src/App.vue",
        ],
        provider: "v8",
        reporter: ["text", "json-summary", "json", "html"],
        reportOnFailure: true,
        thresholds: {
          lines: 0,
          functions: 0,
          branches: 0,
          statements: 0,
        },
      },
    },
  })
);
