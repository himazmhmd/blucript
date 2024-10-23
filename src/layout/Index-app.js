import React from "react";
import { Outlet } from "react-router-dom";
import AppMain from "./global/AppMain";
import AppRoot from "./global/AppRoot";
import AppWrap from "./global/AppWrap";
import Head from "./head/Head";
import AppHeader from "./header/AppHeader";
import Sidebar from "./sidebar/Sidebar";

import FileManagerProvider from "../pages/app/file-manager/components/Context";
import { useTheme } from "./provider/Theme";

const Layout = ({title, app, ...props}) => {
  const theme = useTheme();

  return (
      <FileManagerProvider>
        <Head title={!title && 'Loading'} />
        <AppRoot className="npc-apps apps-only">
          
          <AppMain>
          {theme.sidebarMobile && <Sidebar fixed />}
            <AppWrap>
              <AppHeader app={app} fixed />
              <Outlet />
            </AppWrap>
          </AppMain>
        </AppRoot>
      </FileManagerProvider>
  );
};
export default Layout;
