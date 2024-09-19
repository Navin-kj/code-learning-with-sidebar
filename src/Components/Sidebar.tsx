import "./component.css";

import { sideBarData } from "./sidebarData";
import { NavLink } from "react-router-dom";
import { IsDevice } from "../hook/isDevice";
import VsCode from "../assets/vscode.png";

const Sidebar = () => {
  const { isSmallScreen } = IsDevice();

  return (
    <div>
      <div className={`sidebar-container ${isSmallScreen ? "small" : ""}`}>
        <div className="list">
          <div
            className="logo"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            <img src={VsCode} className="vs-code" />
            {!isSmallScreen && <span>Code Practice</span>}
          </div>
          {sideBarData.map((item, idx) => {
            return (
              <NavLink
                key={idx}
                className={({ isActive }) =>
                  `linkss ${isActive ? "active" : ""}`
                }
                to={item.link}
                preventScrollReset
              >
                <span className="icons-list">{item.icon}</span>
                {!isSmallScreen && <span>{item.name}</span>}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
