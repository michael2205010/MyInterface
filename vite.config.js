import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    vue(),
    AutoImport({
      defaultExportByFilename: true,
      dts: false,
      dirs: ["src/helpers/**"],
      imports: [
        "vue",
        "vue-router",
        {
          dayjs: [
            ['default', 'dayjs'], 
          ],
        },
        {
          axios: [
            // default imports
            ["default", "axios"], // import { default as axios } from 'axios',
          ],
        },
      ],
    }),
    Components({
      dirs: ["src/views/components"],
      deep: true,
      extensions: ["vue"],
      dts: false,
      directoryAsNamespace: true,

      // resolvers: [
      //   (name) => {
      //     console.log(name);
      //     if (name === "Icon") {
      //       return {
      //         importName: "default", // 確保解析為 default 導出
      //         path: "@jamescoyle/vue-icon",
      //       };
      //     }
      //   },
      // ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      punycode: "punycode/",
    },
  },
  base: "/MyInterface/",
  build: {
    target: 'esnext', // 讓 Vite 輸出更快的現代 JavaScript
    minify: 'terser', // 使用 Terser 進行更高效的壓縮
  },
  css: {
    postcss: './postcss.config.js',
  },
  server: {
    hmr: true,
    fs: {
      strict: false, // 防止 Bun 可能的檔案系統權限問題
    },
    publicPath: process.env.NODE_ENV === "production" ? "/tpass/" : "/",
    proxy: {
      "/webapi": {
        target: "https://localhost:44330",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''),
        secure: false,
      },
    },
  },
  optimizeDeps: {
    include: ["axios", "vue", "vue-router"],
  }
});
