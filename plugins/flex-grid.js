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
  const defaults = {
    maxColumns: 12,
    sideGutter: "1rem",
  };
  const columns = range(defaults.maxColumns, 1);
  columns.push("auto");

  const flexGridRow = {
    [`.${e(`flex-grid-row`)}`]: {
      boxSizing: "border-box",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row",
      marginLeft: `-${defaults.sideGutter}`,
      marginRight: `-${defaults.sideGutter}`,
    },
  };

  const flexGridCols = {
    [`.${e(`flex-grid-col`)}`]: {
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      flex: "0 0 auto",
      minHeight: "1px",
      position: "relative",
      paddingLeft: defaults.sideGutter,
      paddingRight: defaults.sideGutter,
    },
  };

  const flexGridColsSizes = columns.map((size) => {
    return {
      [`.${e(`col-size-${size}`)}`]: {
        flexGrow: `${size === "auto" ? "1" : "0"}`,
        flexBasis: colSize(defaults.maxColumns, size, "0"),
        maxWidth: colSize(defaults.maxColumns, size, "100%"),
      },
    };
  });

  const flexGridColsOffSet = columns.map((size) => {
    return {
      [`.${e(`col-offset-${size}`)}`]: {
        marginLeft: colOffset(defaults.maxColumns, size),
      },
    };
  });

  addUtilities([flexGridRow, flexGridCols, flexGridColsSizes, flexGridColsOffSet], pluginVariants);
});
