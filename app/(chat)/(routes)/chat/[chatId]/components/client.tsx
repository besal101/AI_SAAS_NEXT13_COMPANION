"use client";
import ChatHeader from "@/components/Layout/chat-header";
import { Companion, Message } from "@prisma/client";
import { useRouter } from "next/navigation";
import React, { useState, FormEvent } from "react";
import { useCompletion } from "ai/react";
import ChatForm from "@/components/Layout/chat-form";
import ChatMessages from "@/components/Layout/chat-messages";
import { IChatMessageProps } from "@/components/Element/chat-message";

interface IChatClientProps {
  companion: Companion & {
    messages: Message[];
    _count: {
      messages: number;
    };
  };
}

const ChatClient: React.FC<IChatClientProps> = ({ companion }) => {
  const router = useRouter();
  const [messages, setMessages] = useState<IChatMessageProps[]>(
    companion.messages
  );

  const { input, isLoading, handleInputChange, handleSubmit, setInput } =
    useCompletion({
      api: `/api/chat/${companion.id}`,
      onFinish(prompt, completion) {
        const systemMessage: IChatMessageProps = {
          role: "system",
          content: completion,
        };

        setMessages((prev) => [...prev, systemMessage]);
        setInput("");
        router.refresh();
      },
    });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userMessage: IChatMessageProps = {
      role: "user",
      content: input,
    };
    setMessages((prev) => [...prev, userMessage]);
    handleSubmit(e);
  };

  return (
    <div className="flex flex-col h-full p-4 space-y-2">
      <ChatHeader companion={companion} />
      <ChatMessages
        companion={companion}
        isLoading={isLoading}
        messages={messages}
      />
      <ChatForm
        input={input}
        isLoading={isLoading}
        handleInputChange={handleInputChange}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default ChatClient;
