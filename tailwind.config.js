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
        shimmerLoading: {
          "0%": { backgroundPosition: "100% 0" },
          "100%": { backgroundPosition: "-100% 0" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.4s ease",
        shimmer: "shimmer 1.6s infinite",
        shimmerLoading: "shimmer-loading 1.6s ease-in-out infinite",
      },
    },
  },
};
