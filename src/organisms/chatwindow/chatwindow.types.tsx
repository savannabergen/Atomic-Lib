import { MessageProps } from "@/molecules/message/message.types";

export type Message = MessageProps["message"] & { id: number };

export interface ChatWindowProps {
  messages: Message[];
  onSendMessage: (text: string) => void;
  placeholder: string;
}
