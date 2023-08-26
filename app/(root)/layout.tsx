import Navbar from "@/components/Layout/navbar";
import Sidebar from "@/components/Layout/sidebar";
import { checkSubscription } from "@/lib/subscription";
import * as React from "react";

interface IRootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FunctionComponent<IRootLayoutProps> = async ({
  children,
}) => {
  const isPro = await checkSubscription();
  return (
    <div className="h-full">
      <Navbar isPro={isPro} />
      <div className="hidden md:flex mt-16 w-20 flex-col fixed inset-y-0">
        <Sidebar isPro={isPro} />
      </div>
      <main className="md:pl-20 pt-16 h-full">{children}</main>
    </div>
  );
};

export default RootLayout;
