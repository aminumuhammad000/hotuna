import "./App.css";
import Nav from "./Components/Nav";
import Search from "./Components/Search";
import Card from "./Components/Card";
import Footer from "./Footer";
import loader from "./assets/loader.gif";
import { useEffect, useState } from "react";

// Define the interface for the image data
interface Image {
  webformatURL: string;
  user: string;
  downloads: number;
  views: number;
  likes: number;
  tags: string;
  previewURL: string;
}

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("love");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=46324808-0e115759463359d91e47db284&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data: { hits: Image[] }) => setImages(data.hits))
      .then(() => setIsLoading(false))
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <>
      <Nav />
      <Search searchText={(text) => setTerm(text)} />
      {!isLoading && images.length === 0 && (
        <h1 className="NotFound">
          <strong>Sorry!&nbsp;&nbsp;</strong>No Images Found
        </h1>
      )}
      <div className="card-container">
        {isLoading ? (
          <div className="loader">
            <img src={loader} alt="loader" />
          </div>
        ) : (
          images.map((image, index) => (
            <Card
              key={index}
              theImages={image.webformatURL}
              user={image.user}
              downloads={image.downloads}
              views={image.views}
              likes={image.likes}
              tags={image.tags.split(",")}
              imageURL={image.previewURL}
            />
          ))
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
