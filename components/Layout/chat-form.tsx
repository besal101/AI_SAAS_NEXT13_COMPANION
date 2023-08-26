"use client";
import React, { ChangeEvent, FormEvent, FC } from "react";
import { ChatRequestOptions } from "ai";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { SendHorizonal } from "lucide-react";

interface IChatFormProps {
  input: string;
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onSubmit: (
    e: FormEvent<HTMLFormElement>,
    chatRequestOptions?: ChatRequestOptions | undefined
  ) => void;
  isLoading: boolean;
}

const ChatForm: FC<IChatFormProps> = ({
  input,
  handleInputChange,
  onSubmit,
  isLoading,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className="border-t border-primary/10 py-4 flex items-center gap-x-2"
    >
      <Input
        disabled={isLoading}
        value={input}
        onChange={handleInputChange}
        placeholder="Type your message here..."
        className="rounded-lg border border-primary/10 flex-grow px-4 py-2"
      />
      <Button disabled={isLoading} variant="ghost">
        <SendHorizonal className="h-6 w-6" />
      </Button>
    </form>
  );
};

export default ChatForm;
