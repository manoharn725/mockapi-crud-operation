import { Link, useNavigate } from "react-router-dom";
import "./index.scss";

const Header = () => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/')
    }
  return (
    <div className="header__container">
      <div onClick={goToHome} className="navbar__logo">Logo</div>
      <div className="navbar__items">
        <Link to={"/"}>Students</Link>
        <Link to={"/create-form"}>Form</Link>
      </div>
    </div>
  );
};
export default Header;
