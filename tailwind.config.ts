import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "vibe-white": "#fff",
        "vibe-black": "#000",
        "vibe-black-06": "#0F0F0F",
        "vibe-black-08": "#141414",
        "vibe-black-10": "#1A1A1A",
        "vibe-black-12": "#1F1F1F",
        "vibe-black-15": "#262626",
        "vibe-black-20": "#333",
        "vibe-black-25": "#404040",
        "vibe-black-30": "#4C4C4C",
        "vibe-grey-60": "#999",
        "vibe-grey-65": "#A6A6A6",
        "vibe-grey-70": "#B3B3B3",
        "vibe-grey-75": "#BFBFBF",
        "vibe-grey-90": "#E4E4E7",
        "vibe-grey-95": "#F1F1F3",
        "vibe-grey-97": "#F7F7F8",
        "vibe-grey-99": "#FCFCFD",
        "vibe-red-45": "#E50000",
        "vibe-red-50": "#FF0000",
        "vibe-red-55": "#FF1919",
        "vibe-red-60": "#FF3333",
        "vibe-red-80": "#FF9999",
        "vibe-red-90": "#FFCCCC",
        "vibe-red-95": "#FFE5E5",
        "vibe-red-99": "#FFFAFA",
      }
    },
  },
  plugins: [],
}
export default config
