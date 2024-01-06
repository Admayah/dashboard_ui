import ApplicationIcon from "../../icons/Applications";
import ArrowDown from "../../icons/ArrowDown";
import ArrowUp from "../../icons/ArrowUp";
import Avatar from "../../icons/Avatar";
import BusinessIcon from "../../icons/Business";
import ChevronRightIcon from "../../icons/ChevronRight";
import ClientIcon from "../../icons/Client";
import CompareArrowsIcon from "../../icons/CompareArrows";
import Dashboard from "../../icons/Dashboard";
import DotIcon from "../../icons/Dot";
import SettingIcon from "../../icons/Setting";
import "./dashboardmenu.css";

const DashboardMenu = () => {
  return (
    <div className="dashboardMenu">
      <div className="dashboardMenuWrapper">
        <div className="mainMenuTop">
          <h2 className="mainMenuHeader">main menu</h2>

          <div className="mainMenuItem activeMenuItem">
            <div className="mainMenuItemWrapper">
              <div className="mainMenuItemIcon">
                <Dashboard />
              </div>
              <div className="mainMenuItemText">
                <h3>Dashboard</h3>
              </div>
            </div>
            <ArrowDown />
          </div>
          <div className="mainMenuItem">
            <div className="mainMenuItemWrapper">
              <div className="mainMenuItemIcon">
                <ApplicationIcon />
              </div>
              <div className="mainMenuItemText">
                <h3>Applications</h3>
              </div>
            </div>
            <ArrowDown />
          </div>
          <div className="mainMenuItem">
            <div className="mainMenuItemWrapper">
              <div className="mainMenuItemIcon">
                <ClientIcon />
              </div>
              <div className="mainMenuItemText">
                <h3>Clients</h3>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span>2</span>
              <ArrowDown />
            </div>
          </div>
        </div>
        <div className="menuCenter">
          <div className="menuCenterAccordion">
            <div className="menuCenterItem">
              <div className="menuCenterItemWrapper">
                <div className="menuCenterItemIcon">
                  <BusinessIcon />
                </div>
                <div className="menuCenterItemText">
                  <h3>Projects</h3>
                </div>
              </div>
              <ArrowUp isOpen />
            </div>
            <div className="accordionDropdown">
              <ul>
                <li>
                  <div className="menuCenterSubItemWrapper">
                    <DotIcon isActive />
                    <span className="subItemText menuCenterItemText">
                      Coca Cola Project
                    </span>
                  </div>

                  <ArrowUp />
                </li>
                <li>
                  <div className="menuCenterSubItemWrapper">
                    <DotIcon />
                    <span className="subItemText">Link Colors</span>
                  </div>

                  <ChevronRightIcon />
                </li>
                <li>
                  <div className="menuCenterSubItemWrapper">
                    <DotIcon isActive />
                    <span className="subItemText menuCenterItemText">
                      Additional Content
                    </span>
                  </div>

                  <ChevronRightIcon />
                </li>
                <li>
                  <div className="menuCenterSubItemWrapper">
                    <DotIcon />
                    <span className="subItemText">Disimissing</span>
                  </div>

                  <ChevronRightIcon />
                </li>
                <li>
                  <div className="menuCenterSubItemWrapper">
                    <DotIcon />
                    <span className="subItemText">Java Script Behavior</span>
                  </div>

                  <ChevronRightIcon />
                </li>
              </ul>
            </div>
            <div className="menuCenterBottomSubItem">
              <div className="menuCenterItem">
                <div className="menuCenterSubItemWrapper">
                  <DotIcon />
                  <span className="subItemText">Zoom Projects</span>
                </div>
                <ChevronRightIcon />
              </div>
              <div className="menuCenterItem">
                <div className="menuCenterSubItemWrapper">
                  <DotIcon />
                  <span className="subItemText">Task Board</span>
                </div>
                <ChevronRightIcon />
              </div>
              <div className="menuCenterItem">
                <div className="menuCenterSubItemWrapper">
                  <DotIcon />
                  <span className="subItemText">Project Diagramma</span>
                </div>
                <ChevronRightIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="menuCenterItem centerApplicationWrapper">
          <div className="menuCenterItemWrapper">
            <div className="menuCenterItemIcon">
              <ApplicationIcon />
            </div>
            <div className="subItemText">
              <h3>Applications</h3>
            </div>
          </div>
          <ChevronRightIcon />
        </div>
        <div className="menuBottom">
          <h2 className="menuBottomHeader">SECOND MENU</h2>
          <div className="menuBottomWrapper">
            <div className="menuBottomItem">
              <div className="menuBottomItemWrapper">
                <div className="menuCenterItemIcon">
                  <CompareArrowsIcon />
                </div>
                <div className="subItemText">
                  <h3>Intergrations</h3>
                </div>
              </div>
              <ChevronRightIcon />
            </div>
            <div className="menuBottomItem">
              <div className="menuBottomItemWrapper">
                <div className="menuCenterItemIcon">
                  <Avatar />
                </div>
                <div className="subItemText">
                  <h3>Users</h3>
                </div>
              </div>
              <ChevronRightIcon />
            </div>
            <div className="menuBottomItem">
              <div className="menuBottomItemWrapper">
                <div className="menuCenterItemIcon">
                  <SettingIcon />
                </div>
                <div className="subItemText">
                  <h3>Settings</h3>
                </div>
              </div>
              <ChevronRightIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMenu;
