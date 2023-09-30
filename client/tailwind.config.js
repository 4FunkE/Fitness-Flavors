/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...

  theme: {
    extend: {
      colors: {
        custom: {
          primary: "var(--primary)",
          secondary: "var(--secondary)",
          accent: "var(--accent)",
          "dark-blue": "var(--accent2)",
          dark: "var(--Dark)",
          header: "var(--Header)",
          text: "var(--text)",
        },
      },
    },
  },
};
