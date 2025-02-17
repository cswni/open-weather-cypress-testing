
import { defineConfig } from "cypress";
import { loadEnv } from 'vite'
const env = loadEnv("", process.cwd(), "VITE_");

export default defineConfig({
  projectId: 'tk8ms5',
  env: {
    googleClientId : env.VITE_APP_GOOGLE_CLIENTID,
    googleClientSecret : env.VITE_APP_GOOGLE_CLIENT_SECRET,
    googleRefreshToken : env.VITE_GOOGLE_REFRESH_TOKEN,
  },
  e2e: {
    baseUrl: "http://localhost:5173",
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});