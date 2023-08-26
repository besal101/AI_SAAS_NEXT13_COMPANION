import * as React from "react";

interface IChatLayoutProps {
  children: React.ReactNode;
}

const ChatLayout: React.FC<IChatLayoutProps> = ({ children }) => {
  return <div className="mx-auto max-w-4xl h-full w-full">{children}</div>;
};

export default ChatLayout;
