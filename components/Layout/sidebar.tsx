"use client";
import * as React from "react";
import { routes } from "@/utils/data";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { useProModal } from "@/hooks/use-pro-modal";

interface ISidebarProps {
  isPro: boolean;
}

const Sidebar: React.FC<ISidebarProps> = ({ isPro }) => {
  const pathname = usePathname();
  const router = useRouter();
  const proModal = useProModal();
  const onNavigate = (url: string, pro: boolean) => {
    if (pro && !isPro) {
      return proModal.onOpen();
    }
    //TODO : CHECK IF IT IS PRO
    return router.push(url);
  };

  return (
    <div className="space-y-4 flex flex-col h-full text-primary bg-secondary">
      <div className="p-3 flex flex-1 justify-center">
        <div className="space-y-2">
          {routes.map((route) => (
            <div
              key={route.href}
              onClick={() => onNavigate(route.href, route.pro)}
              className={cn(
                "text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                pathname === route.href && "text-primary bg-primary/10"
              )}
            >
              <div className="flex flex-col gap-y-2 items-center flex-1">
                <route.icon className="h-5 w-5" />
                {route.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
