const Image = (props) => {
  return (
    <img src={props.imgUrl} alt={props.altText} className="w-60 md:w-[500px]" />
  );
};

export default Image;
