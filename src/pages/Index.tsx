
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AvatarSelector from '@/components/AvatarSelector';
import MessageForm from '@/components/MessageForm';
import AvatarPreview from '@/components/AvatarPreview';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const [selectedAvatar, setSelectedAvatar] = useState('robot');
  const [message, setMessage] = useState('Hello there! 👋 Hope you have an amazing day!');

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-2 gradient-text">
            Virtual Greetings Avatar
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Create personalized animated avatars with custom messages for any occasion.
            Perfect for birthdays, celebrations, or just to brighten someone's day!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <AvatarSelector 
              selectedAvatar={selectedAvatar}
              onSelectAvatar={setSelectedAvatar}
            />
            
            <Separator />
            
            <MessageForm 
              onSetMessage={setMessage} 
              message={message}
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <AvatarPreview 
              avatar={selectedAvatar} 
              message={message}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Index;
