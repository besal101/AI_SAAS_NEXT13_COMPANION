"use client";
import * as React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@clerk/nextjs";

interface IUserAvatarProps {}

const UserAvatar: React.FunctionComponent<IUserAvatarProps> = () => {
  const { user } = useUser();
  return (
    <Avatar className="h-12 w-12">
      <AvatarImage src={user?.imageUrl} />
    </Avatar>
  );
};

export default UserAvatar;
