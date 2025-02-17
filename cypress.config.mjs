
import { defineConfig } from "cypress";
import { loadEnv } from 'vite'
const env = loadEnv("", process.cwd(), "VITE_");
import dotenv from "dotenv";
dotenv.config();

console.log('ENVIRONMENTS: ', env);

export default defineConfig({
  projectId: env.VITE_CYPRESS_PROJECT_ID,
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