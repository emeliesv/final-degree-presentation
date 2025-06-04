import Image from "./Image";

const Card = ({ imgUrl, altText, children }) => {
  return (
    <div className="flex flex-col items-center gap-2.5">
      <Image imgUrl={imgUrl} altText={altText} />
      <p className=" italic max-w-80">{children}</p>
    </div>
  );
};

export default Card;
