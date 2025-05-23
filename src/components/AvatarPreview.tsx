
import React, { useState } from 'react';
import Avatar from './Avatar';
import MessageBubble from './MessageBubble';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Share2, Download } from 'lucide-react';

type AvatarPreviewProps = {
  avatar: string;
  message: string;
};

const AvatarPreview: React.FC<AvatarPreviewProps> = ({ avatar, message }) => {
  const { toast } = useToast();
  const [isAnimating, setIsAnimating] = useState(false);

  const triggerAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 2000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Virtual Greeting Avatar',
        text: message,
        url: window.location.href,
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    } else {
      navigator.clipboard.writeText(message)
        .then(() => {
          toast({
            title: "Message copied!",
            description: "Share it with your friends",
          });
        })
        .catch((error) => {
          console.error('Failed to copy message', error);
          toast({
            title: "Failed to copy message",
            description: "Please try again",
            variant: "destructive",
          });
        });
    }
  };

  const handleDownload = () => {
    toast({
      title: "Feature Coming Soon",
      description: "The download feature will be available in a future update",
    });
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4 self-start">Preview</h2>
      
      <div className="w-full bg-gradient-to-b from-primary/10 to-accent/10 rounded-2xl p-6 shadow-lg">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div onClick={triggerAnimation} className="cursor-pointer">
            <Avatar 
              type={avatar} 
              size="lg" 
              animation={isAnimating ? "wave" : "float"} 
            />
          </div>
          
          <MessageBubble 
            message={message || "Your greeting message will appear here..."} 
            className="max-w-sm mt-4 sm:mt-0"
          />
        </div>
        
        <div className="mt-6 flex justify-end gap-3">
          <Button variant="outline" onClick={handleShare}>
            <Share2 className="mr-2 h-4 w-4" /> Share
          </Button>
          <Button onClick={handleDownload}>
            <Download className="mr-2 h-4 w-4" /> Download
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AvatarPreview;
