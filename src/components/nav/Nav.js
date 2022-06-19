import "./nav.css";
import home from "./../../images/home1.png";
import HomeIcon from "@mui/icons-material/Home";

export default function Nav() {
  return (
    <div className="nav">
      {/* <div className="nav__blocks">
        <img src={home} alt="home"></img>
      </div> */}
      <HomeIcon
        style={{
          color: "white",
          height: "30px",
          width: "30px",
          margin: "5px",
          cursor: "pointer",
        }}
      />
      <div className="nav__blocks"></div>
      <div className="nav__blocks"></div>
    </div>
  );
}
