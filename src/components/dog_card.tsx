import DogImage from "./dog_image";
import dog1 from "../assets/images/dog1.jpg";
import dog2 from "../assets/images/dog2.jpg";
import dog3 from "../assets/images/dog3.jpg";
import dog4 from "../assets/images/dog4.jpg";

const images = [
  {
    image: dog1,
    altText: "Describe this dog!",
    licenceType: "CC0 License",
    licenceUrl: "https://pixabay.com/service/license-summary/",
    attributionName: "3194556",
    attributionUrl: "https://pixabay.com/users/3194556",
  },
  {
    image: dog2,
    altText: "Describe this dog!",
    licenceType: "CC0 License",
    licenceUrl: "https://pixabay.com/service/license-summary/",
    attributionName: "huoadg5888",
    attributionUrl: "https://pixabay.com/users/huoadg5888",
  },
  {
    image: dog3,
    altText: "Describe this dog!",
    licenceType: "CC0 License",
    licenceUrl: "https://pixabay.com/service/license-summary/",
    attributionName: "PicsbyFran",
    attributionUrl: "https://pixabay.com/users/PicsbyFran",
  },
  {
    image: dog4,
    altText: "Describe this dog!",
    licenceType: "CC0 License",
    licenceUrl: "https://pixabay.com/service/license-summary/",
    attributionName: "Vizslafotozas",
    attributionUrl: "https://pixabay.com/users/vizslafotozas",
  },
];

interface dogCardProps {
  id?: string;
  name: string;
  species: string;
  favFoods: Array<string>;
  birthYear: number;
  dogIndex: number;
}

const dogCard: React.FC<dogCardProps> = ({
  name,
  species,
  favFoods,
  birthYear,
  dogIndex,
}) => {
  return (
    <div className="card">
      <h3 className="card__text card__header">{name}</h3>
      <div>
        {dogIndex < images.length && (
          <DogImage
            image={images[dogIndex].image}
            altText={images[dogIndex].altText}
            licenceType={images[dogIndex].licenceType}
            licenceUrl={images[dogIndex].licenceUrl}
            attributionName={images[dogIndex].attributionName}
            attributionUrl={images[dogIndex].attributionUrl}
          />
        )}
      </div>
      <p className="card__text">Species: {species}</p>
      <p className="card__text">Favourite Food(s): {favFoods}</p>
      <p className="card__text">Birth Year: {birthYear}</p>
    </div>
  );
};

export default dogCard;
