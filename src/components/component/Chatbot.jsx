"use client";
import React, { useState, useEffect, useRef } from "react";
import Markdown from "react-markdown";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  AlertTriangle,
  Droplet,
  Wrench,
  Trash,
  Zap,
  Construction,
  HelpCircle,
  SendIcon,
  PlusIcon,
} from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

function RailwayChatbot() {
  const [messages, setMessages] = useState([
    { type: "received", text: "Hi, how can I assist you today?" },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const chatContainerRef = useRef(null);

  // Scroll to the bottom of the chat when a new message is added
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // Function to handle message submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newMessage.trim()) return;

    const userMessage = { type: "sent", text: newMessage };

    // Add the user's message to the chat
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      // Call the API with the user's message
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: newMessage }),
      });

      const data = await response.json();

      // Add the AI's response to the chat
      if (response.ok) {
        const aiMessage = { type: "received", text: data.response };
        setMessages((prevMessages) => [...prevMessages, aiMessage]);
      } else {
        const errorMessage = {
          type: "received",
          text: "Error processing request.",
        };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      }
    } catch (error) {
      console.error("Error fetching response:", error);
      const errorMessage = {
        type: "received",
        text: "An error occurred. Please try again.",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }

    setNewMessage("");
  };

  return (
    <div className="relative">
      <Card className="w-full max-w-md mx-auto h-[500px] flex flex-col">
        <CardHeader className="flex flex-row items-center">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="Image" />
              <AvatarFallback>RA</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">Gantavya</p>
              <p className="text-sm text-muted-foreground">
                gantavya@help.com
              </p>
            </div>
          </div>
          <Button
            size="icon"
            variant="outline"
            className="ml-auto rounded-full"
          >
            <PlusIcon className="w-4 h-4" />
            <span className="sr-only">New message</span>
          </Button>
        </CardHeader>
        <CardContent className="flex-1 overflow-y-auto" ref={chatContainerRef}>
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm ${
                  message.type === "sent"
                    ? "ml-auto bg-primary text-primary-foreground"
                    : "bg-muted"
                }`}
              >
                <Markdown>{message.text}</Markdown>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <form
            className="flex items-center w-full space-x-2"
            onSubmit={handleSubmit}
          >
            <Input
              id="message"
              placeholder="Type your message..."
              className="flex-1"
              autoComplete="off"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <Button type="submit" size="icon">
              <SendIcon className="w-4 h-4" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}

export default RailwayChatbot;
