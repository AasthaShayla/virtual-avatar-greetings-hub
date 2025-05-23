
import React from 'react';
import Avatar from './Avatar';
import { cn } from '@/lib/utils';

type AvatarSelectorProps = {
  selectedAvatar: string;
  onSelectAvatar: (avatar: string) => void;
};

const AvatarSelector: React.FC<AvatarSelectorProps> = ({ 
  selectedAvatar, 
  onSelectAvatar 
}) => {
  const avatars = ['robot', 'cat', 'alien', 'human', 'monster'];

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-4">Choose Your Avatar</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {avatars.map((avatar) => (
          <button
            key={avatar}
            onClick={() => onSelectAvatar(avatar)}
            className={cn(
              "p-2 rounded-xl transition-all",
              selectedAvatar === avatar 
                ? "bg-primary/10 ring-2 ring-primary" 
                : "hover:bg-secondary"
            )}
          >
            <div className="flex flex-col items-center">
              <Avatar 
                type={avatar} 
                size="sm" 
                animation={selectedAvatar === avatar ? "float" : "none"} 
              />
              <span className="mt-2 capitalize">{avatar}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default AvatarSelector;
