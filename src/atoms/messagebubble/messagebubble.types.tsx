export interface MessageBubbleProps {
  text: string;
  timestamp: string;
  sender: {
    id: number;
    name: string;
  };
}
