/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // ✅ TypeScript + TSX 파일 포함
  theme: {
    extend: {
      backgroundImage: {
        "custom-image":
          "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),url('/photo.jpg')",
      },
    },
  },
  plugins: [],
};
