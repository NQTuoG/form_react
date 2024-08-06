/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // tạo thêm class
      fontSize: {
        title: "33px",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
