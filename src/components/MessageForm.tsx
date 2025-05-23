
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

type MessageFormProps = {
  onSetMessage: (message: string) => void;
  message: string;
};

const MessageForm: React.FC<MessageFormProps> = ({ onSetMessage, message }) => {
  const { toast } = useToast();
  const [inputValue, setInputValue] = useState(message);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (inputValue.trim().length < 3) {
      toast({
        title: "Message too short",
        description: "Please enter a longer message",
        variant: "destructive",
      });
      return;
    }
    
    onSetMessage(inputValue);
    toast({
      title: "Message updated",
      description: "Your greeting message has been updated",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold">Your Greeting Message</h2>
      <Textarea
        placeholder="Enter your greeting message here..."
        className="min-h-[120px] resize-none"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className="flex justify-end">
        <Button type="submit" variant="default">
          Update Message
        </Button>
      </div>
    </form>
  );
};

export default MessageForm;
