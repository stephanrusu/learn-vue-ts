const plugin = require("tailwindcss/plugin");

module.exports = plugin(({ addUtilities, e, theme, variants }) => {
  const pluginConfig = theme("flexBasis", {});
  const pluginVariants = variants("flexBasis", []);

  const flexBasisUtitilies = Object.keys(pluginConfig).map((key) => {
    return {
      [`.${e(`basis-${key}`)}`]: {
        "flex-basis": pluginConfig[key],
      },
    };
  });

  addUtilities(flexBasisUtitilies, pluginVariants);
});
