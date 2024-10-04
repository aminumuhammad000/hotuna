import "./Footer.css";
import myImage from "./assets/myimage.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="myImage">
        <img src={myImage} alt="" />
        <span>
          <a href="https://aminumuhammad000.github.io/frontend-challenge-day-1/">
            Aminu Muhammad
          </a>
        </span>
      </div>
      <div className="contact">
        <button className="btn" title="facebook">
          <a href="https://www.facebook.com/profile.php?id=61550987333969">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </button>
        <button className="btn" title="linkedIn">
          <a href="https://www.linkedin.com/in/aminu-muhammad-773635320/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </button>
        <button className="btn" title="github">
          <a href="https://github.com/aminumuhammad000">
            <i className="fa-brands fa-github"></i>
          </a>
        </button>
        <button className="btn" title="twitter">
          <a href="https://x.com/Amee00015">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </button>
        <div>
          <a className="mail" href="mailto:aminumuhammad00015@gmail.com">
            send me a mail
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
