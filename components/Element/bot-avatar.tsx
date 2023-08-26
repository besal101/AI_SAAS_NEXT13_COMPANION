import * as React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface IBotAvatarProps {
  src: string;
}

const BotAvatar: React.FunctionComponent<IBotAvatarProps> = ({ src }) => {
  return (
    <Avatar className="h-12 w-12">
      <AvatarImage src={src} />
    </Avatar>
  );
};

export default BotAvatar;
