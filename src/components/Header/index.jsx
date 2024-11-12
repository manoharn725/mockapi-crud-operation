import { Link, useNavigate } from "react-router-dom";
import { useEditModeContext } from "../../context/EditMode/useEditModeContext";
import "./index.scss";

const Header = () => {
  const navigate = useNavigate();
  const { isEditMode, handleEditMode } = useEditModeContext();
  const goToHome = () => {
    navigate("/");
  };

  const goToCreateForm = () => {
    {
      isEditMode ? "" : navigate("/create-form"), handleEditMode(false);
    }
  };
  return (
    <div className="header__container">
      <div onClick={goToHome} className="navbar__logo">
        Logo
      </div>
      <div className="navbar__items">
        <Link to={"/"}>Students</Link>
        <a to={"/create-form"} title={isEditMode? 'You are in editMode' : ''} onClick={goToCreateForm}>
          Form
        </a>
      </div>
    </div>
  );
};
export default Header;
