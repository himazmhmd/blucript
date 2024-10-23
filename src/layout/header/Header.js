import classNames from "classnames";
import React from "react";
import Toggle from "../sidebar/Toggle";
import AppDropdown from "./dropdown/app/App";
import ChatDropdown from "./dropdown/chat/Chat";
import Notification from "./dropdown/notification/Notification";
import User from "./dropdown/user/User";

import { ReactComponent as Logo } from '../../images/Logo.svg';
import { useTheme, useThemeUpdate } from '../provider/Theme';

const Header = ({ fixed, className }) => {
  const theme = useTheme();
  const themeUpdate = useThemeUpdate();
  const headerClass = classNames({
    "nk-header": true,
    "nk-header-fixed": fixed,
    [`is-light`]: theme.header === "white",
    [`is-${theme.header}`]: theme.header !== "white" && theme.header !== "light",
    [`${className}`]: className,
  });
  let currentUrl;

  if (window.location.pathname !== undefined) {
    currentUrl = window.location.pathname;
  } else {
    currentUrl = null;
  }
  return (
    <div className={headerClass}>
      <div className="container-fluid">
        <div className="nk-header-wrap">
          <div className="nk-menu-trigger d-xl-none ms-n1">
            <Toggle className="nk-nav-toggle nk-quick-nav-icon" icon="menu" click={themeUpdate.sidebarVisibility} />
          </div>
          <div className="nk-header-app-name">
            <Logo className="header-logo" />
          </div>
        
          <div className="nk-header-tools">
            <ul className="nk-quick-nav">
              <li className="chats-dropdown hide-mb-xs">
                <ChatDropdown />
              </li>
              <li className="notification-dropdown me-n1">
                <Notification />
              </li>
              <li className="list-apps-dropdown d-lg-none">
                <AppDropdown />
              </li>
              <li className="user-dropdown"> 
                <User />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
