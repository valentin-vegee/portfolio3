import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h2>Mon portfolio</h2>
      <div className="btn_header">
        <Link to="/home">
          <button className="btn_header">Home</button>
        </Link>
        <Link to="/experience">
          <button className="btn_header">Experience</button>
        </Link>
        <Link to="/etude">
          <button className="btn_header">Etude</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
