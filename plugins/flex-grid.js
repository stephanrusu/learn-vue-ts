const plugin = require("tailwindcss/plugin");

const range = (size, startAt = 0) => {
  return [...Array(size).keys()].map((i) => i + startAt);
};

const colSize = (maxColumns, size, autoCase) => {
  if (size === "auto") {
    return autoCase;
  }
  return `${(size / maxColumns) * 100}%`;
};

const colOffset = (maxColumns, size) => {
  const num = size / maxColumns;

  if (num === 1) {
    return "0";
  }

  return `${(size / maxColumns) * 100}%`;
};

module.exports = plugin(({ addUtilities, e, variants }) => {
  const pluginVariants = variants("flexGrid", []);
  const maxColumns = 12;
  const sideGutter = "1rem";
  const columns = range(maxColumns, 1).push("auto");

  const flexGrid = () => {
    return {
      ".flex-grid-row": {
        boxSizing: "border-box",
        display: "flex",
        flex: "0 1 auto",
        flexWrap: "wrap",
        flexDirection: "row",
        marginLeft: sideGutter,
        marginRight: sideGutter,
      },
      ...columns.map((size) => ({
        [`.${e(`flex-grid-col-${size}`)}`]: {
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          flexGrow: `${size === "auto" ? "1" : "0"}`,
          flexShrink: "0",
          flexBasis: colSize(maxColumns, size, "0"),
          maxWidth: colSize(maxColumns, size, "100%"),
          minHeight: "1px",
          position: "relative",
          paddingLeft: sideGutter,
          paddingRight: sideGutter,
        },
      })),
      ...columns.map((size) => ({
        [`.${e(`flex-grid-col-offset-${size}`)}`]: {
          marginLeft: colOffset(maxColumns, size),
        },
      })),
    };
  };

  addUtilities(flexGrid, pluginVariants);
});
