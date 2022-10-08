const childrenToStr = (children) => (
  children.length === 0 ? '' : children.map((el) => el.toString()).join('')
);

export default childrenToStr;
