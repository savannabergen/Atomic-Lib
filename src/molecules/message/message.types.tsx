export interface MessageProps {
  message: {
    text: string;
    timestamp: string;
    sender: {
      id: number;
      name: string;
    };
  };
}
