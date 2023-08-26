import * as React from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "@/components/Layout/sidebar";

interface IMobileSidebarProps {}

const MobileSidebar: React.FunctionComponent<IMobileSidebarProps> = (props) => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4">
        <Menu className="h-6 w-6 text-primary" />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-secondary pt-10 w-32">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
