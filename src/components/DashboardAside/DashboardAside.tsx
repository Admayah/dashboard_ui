import ChevronRight from "../../icons/ChevronRight";
import DotIcon from "../../icons/Dot";
import SearchIcon from "../../icons/Search";
import AsideMenuItem from "../AsideMenu/AsideMenuItem/AsideMenuItem";
import AsideType from "../AsideMenu/AsideType/AsideType";
import ShowMoreButton from "../Button/ShowMoreButton";
import "./dashboardaside.css";

const DashboardAside = () => {
  return (
    <div className="dashboardAside">
      <div className="asideWrapper">
        <div className="asideTop">
          <div className="asideSearchInputWrapper">
            <div className="searchInput">
              <SearchIcon />
              <input type="text" placeholder="Search in Messages" />
            </div>
            <ChevronRight />
          </div>
          <div className="asideMenuTop">
            <AsideType type="Direct Messages" />
            <AsideMenuItem
              imageUrl="/src/assets/images/Avatar.png"
              name="Ina Perry"
              statusOrTotal="Online"
              timeOrValue="12:45"
              isAvatar
            />
            <AsideMenuItem
              imageUrl="/src/assets/images/Avatar.png"
              name="Ina Perry"
              statusOrTotal="Online"
              timeOrValue="12:45"
              isAvatar
            />
            <AsideMenuItem
              imageUrl="/src/assets/images/Avatar.png"
              name="Ina Perry"
              statusOrTotal="Online"
              timeOrValue="12:45"
              isAvatar
            />
            <AsideMenuItem
              imageUrl="/src/assets/images/Avatar.png"
              name="Ina Perry"
              statusOrTotal="Work"
              timeOrValue="12:45"
              isAvatar
            />
            <AsideMenuItem
              imageUrl="/src/assets/images/Avatar.png"
              name="Ina Perry"
              statusOrTotal="Offline"
              timeOrValue="12:45"
              isAvatar
            />
            <ShowMoreButton text="Messages" />
          </div>
          <div className="asideMenuCenter">
            <AsideType type="# Channels" />
            <AsideMenuItem
              iconComponent={<DotIcon />}
              // imageUrl="/src/assets/images/Avatar.png"
              name="How To Frotend"
              statusOrTotal="+12"
              timeOrValue="564"
              // isAvatar
            />
            <AsideMenuItem
              iconComponent={<DotIcon />}
              // imageUrl="/src/assets/images/Avatar.png"
              name="Payment Workers"
              statusOrTotal="+12"
              timeOrValue="564"
              // isAvatar
            />
            <AsideMenuItem
              iconComponent={<DotIcon />}
              // imageUrl="/src/assets/images/Avatar.png"
              name="Web Designer"
              statusOrTotal="+12"
              timeOrValue="564"
              // isAvatar
            />
            <AsideMenuItem
              iconComponent={<DotIcon />}
              // imageUrl="/src/assets/images/Avatar.png"
              name="President of Sales"
              statusOrTotal="+12"
              timeOrValue="564"
              // isAvatar
            />
            <AsideMenuItem
              iconComponent={<DotIcon />}
              // imageUrl="/src/assets/images/Avatar.png"
              name="Marketing Coordinator"
              statusOrTotal="+!2"
              timeOrValue="564"
              // isAvatar
            />
            <ShowMoreButton text="Channels" />
          </div>

          <div className="asideMenuBottom">
            <AsideType type="Project Companies" />
            <AsideMenuItem
              iconComponent={<DotIcon />}
              // imageUrl="/src/assets/images/Avatar.png"
              name="Walt Disney"
              statusOrTotal="+12"
              timeOrValue="564"
              // isAvatar
            />
            <AsideMenuItem
              iconComponent={<DotIcon />}
              // imageUrl="/src/assets/images/Avatar.png"
              name="Johnson & Johnson"
              statusOrTotal="+12"
              timeOrValue="456"
              // isAvatar
            />
            <AsideMenuItem
              iconComponent={<DotIcon />}
              // imageUrl="/src/assets/images/Avatar.png"
              name="General Electric"
            //   statusOrTotal="+12"
              timeOrValue="387"
              // isAvatar
            />
            <AsideMenuItem
              iconComponent={<DotIcon />}
              // imageUrl="/src/assets/images/Avatar.png"
              name="Bank of America"
            //   statusOrTotal="+12"
              timeOrValue="321"
              // isAvatar
            />
   
            <ShowMoreButton text="Channels" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAside;
