import "./asidemenuitem.css";

const AsideMenuItem = ({
  iconComponent,
  imageUrl,
  name,
  statusOrTotal,
  timeOrValue,
  isAvatar,
}) => {
  return (
    <div className="asideMenuItem">
      <div className="asideMenuItemWrapper">
        <div className="menuItemInfo">
          <div className="asideMenuItemIcon">
            {isAvatar ? (
              <img src={imageUrl} alt="user" className="userImg"/>
            ) : (
              <>{iconComponent}</>
            )}
          </div>
          <span className="asideMenuItemText">{name}</span>
        </div>
        <div className="menuItemStatus">
          <span className={`currentStatusValue ${statusOrTotal === "Offline" ? "grayColor" : ""} ${statusOrTotal === "Work" ? "yellowColor" : ""} `}>{statusOrTotal}</span>
          <span className="currentTimeValue">{timeOrValue}</span>
        </div>
      </div>
    </div>
  );
};

export default AsideMenuItem;
