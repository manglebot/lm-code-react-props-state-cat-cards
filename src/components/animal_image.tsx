interface AnimalImageProps {
  image: string;
  altText: string;
  licenceType: string;
  licenceUrl: string;
  attributionName?: string;
  attributionUrl?: string;
}

const AnimalImage: React.FC<AnimalImageProps> = ({
  image,
  altText,
  licenceType,
  licenceUrl,
  attributionName,
  attributionUrl,
}) => (
  <>
    <img className="card__image" src={image} alt={altText} />
    <p className="card__text__small">
      Image licenced under <a href={licenceUrl}>{licenceType}</a>
      {attributionName && (
        <>
          &nbsp;by <a href={attributionUrl}>{attributionName}</a>
        </>
      )}
    </p>
  </>
);

export default AnimalImage;
