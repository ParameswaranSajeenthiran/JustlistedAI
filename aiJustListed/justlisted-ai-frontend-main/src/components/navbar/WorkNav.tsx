import logo from "../../assets/logo.png";
import star from "../../assets/workspace/mdi_stars.png";
import "./navbar.scss"

function WorkNav() {
  return (
    <div className="worknav">
      <div className="nav-logo">
        <img src={logo} />
      </div>
      <div className="upgrade">
        <button>
          Upgrade your plan
          <img src={star} alt="star" />
        </button>
      </div>
    </div>
  );
}

export default WorkNav;
