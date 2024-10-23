import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import AppMain from "./global/AppMain";
import AppRoot from "./global/AppRoot";
import AppWrap from "./global/AppWrap";
import Head from "./head/Head";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

const Layout = ({title, app, ...props}) => {  

  
  return (
      <>
        <Head title={!title && 'Loading'} />
        <AppRoot>
          
          <AppMain>
            <Sidebar fixed />
            <AppWrap>
              <Header fixed />
              <Outlet />
              <Footer />
            </AppWrap>
          </AppMain>
        </AppRoot>
      </>
  );
};
export default Layout;
