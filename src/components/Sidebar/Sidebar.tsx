import City from "../../icons/City";
import Explore from "../../icons/Explore";
import Messenger from "../../icons/Messenger";
import PlusIcon from "../../icons/Plus";
import Social from "../../icons/Social";
import Star from "../../icons/Star";
import TrendingUp from "../../icons/TrendingUp";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarMenu">
        <section className="sidebarTop">
          <div className="navIcon">
            <Explore />
          </div>
          <div className="navIcon">
            <Star />
          </div>
          <div className="navIcon">
            <Messenger />
          </div>
          <div className="navIcon">
            <TrendingUp />
          </div>
          <div className="navIcon">
            <Social />
          </div>
          <div className="navIcon">
            <City />
          </div>
        </section>
        <section className="sidebarBottom">
          <div className="avatarImage">
            <img src="/src/assets/images/Avatar.png" alt="avatar" />
            <span className="status"></span>
          </div>
          <div className="avatarImage">
            <img src="/src/assets/images/Avatar2.png" alt="avatar" />
          </div>
          <div className="avatarImage">
            <img src="/src/assets/images/Avatar3.png" alt="avatar" />
          </div>
          <div className="avatarImage">
            <img src="/src/assets/images/Avatar4.png" alt="avatar" />
          </div>
          <div className="navIcon">
            <PlusIcon />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sidebar;
