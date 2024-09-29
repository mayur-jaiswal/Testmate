import React from 'react';
import { useLocation } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Footer from './Footer';

function Layout({ children }) {
  const location = useLocation();

  // Define the routes where you want to hide the header and footer
  const noHeaderFooterRoutes = ['/test'];

  // Check if the current path starts with any of the defined routes
  const hideHeaderFooter = noHeaderFooterRoutes.some(route =>
    location.pathname.startsWith(route)
  );

  return (
    <div>
      {!hideHeaderFooter && <NavigationBar />}
      {children}
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

export default Layout;
