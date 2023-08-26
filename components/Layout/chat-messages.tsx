"use client";
import { Companion } from "@prisma/client";
import React, { useState, FC, useEffect, useRef, ElementRef } from "react";
import ChatMessage, {
  IChatMessageProps,
} from "@/components/Element/chat-message";

interface IChatMessagesProps {
  messages: IChatMessageProps[];
  isLoading: boolean;
  companion: Companion;
}

const ChatMessages: FC<IChatMessagesProps> = ({
  messages = [],
  isLoading,
  companion,
}) => {
  const scrollRef = useRef<ElementRef<"div">>(null);
  const [fakeLoading, setFakeLoading] = useState(
    messages.length === 0 ? true : false
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFakeLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length]);

  return (
    <div className="flex-1 overflow-y-auto pr-4">
      <ChatMessage
        isLoading={fakeLoading}
        src={companion.src}
        role="system"
        content={`Hello, I am ${companion.name}, ${companion.description}`}
      />
      {messages.map((message) => (
        <ChatMessage
          key={message.content}
          role={message.role}
          content={message.content}
          src={companion.src}
        />
      ))}
      {isLoading && <ChatMessage src={companion.src} role="system" isLoading />}
      <div ref={scrollRef} />
    </div>
  );
};

export default ChatMessages;
