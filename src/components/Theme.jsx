const sizes = {
  mobile: "765px",
  tablet: "1023px",
};

const device = {
  mobile: `screen and (max-width: ${sizes.mobile})`,
  tablet: `screen and (max-width: ${sizes.tablet})`,
};

const theme = {
  device,
};

export default theme;
