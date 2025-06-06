const Image = ({ imgUrl, altText, width, height, lazy = false }) => {
  return (
    <img
      src={imgUrl}
      alt={altText}
      className="w-60 md:w-[500px]"
      width={width}
      height={height}
      loading={lazy ? "lazy" : "eager"}
      decoding="async"
    />
  );
};

export default Image;
