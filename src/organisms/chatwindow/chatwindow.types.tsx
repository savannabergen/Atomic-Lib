export interface ChatWindowProps {
  messages: {
    id: number;
    body: string;
    timestamp: string;
    sender: { id: number; email: string };
  }[];
  onSendMessage: (text: string) => void;
  placeholder: string;
}
