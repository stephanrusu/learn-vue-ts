const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ e, addUtilities }) {
  let values = [
    {
      key: "auto",
      value: "auto",
    },
    {
      key: "1/2",
      value: "50%",
    },
    {
      key: "1/3",
      value: "33.333333%",
    },
    {
      key: "2/3",
      value: "66.666667%",
    },
    {
      key: "1/4",
      value: "25%",
    },
    {
      key: "2/4",
      value: "50%",
    },
    {
      key: "3/4",
      value: "75%",
    },
    {
      key: "1/5",
      value: "20%",
    },
    {
      key: "2/5",
      value: "40%",
    },
    {
      key: "3/5",
      value: "60%",
    },
    {
      key: "4/5",
      value: "80%",
    },
    {
      key: "1/6",
      value: "16.666667%",
    },
    {
      key: "2/6",
      value: "33.333333%",
    },
    {
      key: "3/6",
      value: "50%",
    },
    {
      key: "4/6",
      value: "66.666667%",
    },
    {
      key: "5/6",
      value: "83.333333%",
    },
    {
      key: "1/12",
      value: "8.333333%",
    },
    {
      key: "2/12",
      value: "16.666667%",
    },
    {
      key: "3/12",
      value: "25%",
    },
    {
      key: "4/12",
      value: "33.333333%",
    },
    {
      key: "5/12",
      value: "41.666667%",
    },
    {
      key: "6/12",
      value: "50%",
    },
    {
      key: "7/12",
      value: "58.333333%",
    },
    {
      key: "8/12",
      value: "66.666667%",
    },
    {
      key: "9/12",
      value: "75%",
    },
    {
      key: "10/12",
      value: "83.333333%",
    },
    {
      key: "11/12",
      value: "91.666667%",
    },
    {
      key: "full",
      value: "100%",
    },
  ];

  const flexBasisUtitilies = values.map((item) => {
    return {
      [`.flex-basis-${e(item.key)}`]: {
        flexBasis: item.value,
      },
    };
  });

  addUtilities(flexBasisUtitilies, {
    variants: ["responsive"],
  });
});
