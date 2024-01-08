import React from "react";

import "./asidemenuitem.css";

interface AsidemenuitemProps {
  iconComponent?: React.ReactNode;
  imageUrl?: string;
  name?: string;
  statusOrTotal?: number | string;
  timeOrValue?: number | string;
  isAvatar?: boolean;
}

const AsideMenuItem = ({
  iconComponent,
  imageUrl,
  name,
  statusOrTotal,
  timeOrValue,
  isAvatar,
}: AsidemenuitemProps) => {
  return (
    <div className="asideMenuItem">
      <div className="asideMenuItemWrapper">
        <div className="menuItemInfo">
          <div className="asideMenuItemIcon">
            {isAvatar ? (
              <img src={imageUrl} alt="user" className="userImg" />
            ) : (
              <>{iconComponent}</>
            )}
          </div>
          <span className="asideMenuItemText">{name}</span>
        </div>
        <div className="menuItemStatus">
          <span
            className={`currentStatusValue ${
              statusOrTotal === "Offline" ? "grayColor" : ""
            } ${statusOrTotal === "Work" ? "yellowColor" : ""} `}
          >
            {statusOrTotal}
          </span>
          <span className="currentTimeValue">{timeOrValue}</span>
        </div>
      </div>
    </div>
  );
};

export default AsideMenuItem;
