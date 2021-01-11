const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addUtilities }) {
  const utils = {
    ".d-none": {
      display: "none",
    },
  };

  addUtilities(utils, {
    variants: ["responsive"],
  });
});
