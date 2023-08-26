import * as React from "react";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center h-full">{children}</div>
  );
};

export default Layout;
