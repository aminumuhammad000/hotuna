import "./Nav.css";
import logoImg from "../assets/photos-icon.png";
const Nav = () => {
  return (
    <div className="nav">
      <div className="logo">
        <img src={logoImg} alt="logo image" className="logoImg" />
      <h4 title="logo">Hotuna</h4>
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
      </div>
    </div>
  );
};

export default Nav;
