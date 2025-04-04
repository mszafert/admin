import { defineConfig, presetWind4, transformerDirectives } from "unocss";

export default defineConfig({
  content: {
    filesystem: ["./apps/**/*.{html,ts}"],
  },
  presets: [presetWind4()],
  transformers: [transformerDirectives()],
});
