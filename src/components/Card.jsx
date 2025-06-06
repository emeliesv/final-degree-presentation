import Image from "./Image";

const Card = ({ imgUrl, altText, children, lazy = true }) => {
  return (
    <div className="flex flex-col items-center gap-2.5">
      <Image imgUrl={imgUrl} altText={altText} lazy={lazy} />
      <p className="italic max-w-80">{children}</p>
    </div>
  );
};

export default Card;
