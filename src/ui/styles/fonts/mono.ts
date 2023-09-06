import { Source_Code_Pro } from "next/font/google";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-code-pro",
  fallback: ["mono"],
});

export const mono = sourceCodePro;
