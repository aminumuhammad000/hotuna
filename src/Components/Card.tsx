// import img from "../assets/react.svg";
import "./Card.css";

interface Props {
  theImages: string;
  user: string;
  downloads: number;
  likes: number;
  views: number;
  tags: string[];
  imageURL: string;
}

const Card = ({
  theImages,
  user,
  downloads,
  likes,
  views,
  tags,
  imageURL,
}: Props) => {
  return (
    <>
      <div className="card">
        <img src={theImages} alt="image of the" draggable="false" />
        <div className="details">
          <p className="user-name">
            <span>Photo By: </span>
            {user}
          </p>
          <div className="buttons">
            <button>
              <i className="fa-solid fa-download"></i>
              <span>{downloads}</span>
            </button>
            <button>
              <i className="fa-solid fa-clock"></i>
              <span>{views}</span>
            </button>
            <button>
              <i className="fa-solid fa-thumbs-up"></i>
              <span>{likes}</span>
            </button>
          </div>

          <div className="tags">
            {tags.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>
          <a href={imageURL} download="image.png">
            <button className="downlaod">
              download <i className="fa-solid fa-circle-down"></i>
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
