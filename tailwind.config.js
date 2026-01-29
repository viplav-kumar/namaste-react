// tailwind.config.js
export default {
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        shimmer: {
          "100%": {
            left: "100%",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.4s ease",
        shimmer: "shimmer 1.6s infinite",
      },
    },
  },
};
