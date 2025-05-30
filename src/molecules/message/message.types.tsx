export interface MessageProps {
  message: {
    id: number;
    body: string;
    timestamp: string;
    sender: { id: number; email: string };
  };
}
