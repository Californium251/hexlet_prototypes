const attrToStr = (attr) => (
  Object.keys(attr).length === 0 ? '' : ` ${Object.entries(attr).map(([key, val]) => `${key}="${val}"`).join(' ')}`
);

export default attrToStr;
