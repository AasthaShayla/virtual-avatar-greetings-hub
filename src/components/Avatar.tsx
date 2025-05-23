
import React from 'react';
import { cn } from '@/lib/utils';

type AvatarProps = {
  type: string;
  size?: 'sm' | 'md' | 'lg';
  animation?: 'wave' | 'float' | 'none';
  className?: string;
};

const Avatar: React.FC<AvatarProps> = ({ 
  type, 
  size = 'md', 
  animation = 'none',
  className 
}) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-28 h-28',
    lg: 'w-40 h-40'
  };

  const animationClasses = {
    wave: 'animate-wave origin-bottom-right',
    float: 'animate-float',
    none: ''
  };

  const getAvatarImage = () => {
    switch (type) {
      case 'robot':
        return (
          <div className="relative">
            <div className={cn("rounded-full bg-avatar-blue", sizeClasses[size])}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1/2 h-1/4 bg-white rounded-full flex items-center justify-evenly">
                  <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                </div>
                <div className="absolute bottom-1/4 w-1/4 h-1 bg-blue-900 rounded-full"></div>
              </div>
            </div>
            <div className={cn("absolute top-0 right-0 w-1/3 h-1/3 bg-avatar-blue border-2 border-white rounded-full", 
              animationClasses[animation])}></div>
          </div>
        );
      case 'cat':
        return (
          <div className="relative">
            <div className={cn("rounded-full bg-avatar-yellow", sizeClasses[size])}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 bg-white rounded-full flex items-center justify-evenly">
                  <div className="w-2 h-4 bg-black rounded-full"></div>
                  <div className="w-2 h-4 bg-black rounded-full"></div>
                </div>
                <div className="absolute bottom-1/3 w-1/6 h-1/6 bg-pink-300 rounded-full"></div>
              </div>
            </div>
            <div className="absolute -top-1/4 -left-1/6 w-1/3 h-1/2 bg-avatar-yellow rounded-full rotate-[-30deg]"></div>
            <div className="absolute -top-1/4 -right-1/6 w-1/3 h-1/2 bg-avatar-yellow rounded-full rotate-[30deg]"></div>
            <div className={cn("absolute top-0 right-0 w-1/3 h-1/3", 
              animationClasses[animation])}></div>
          </div>
        );
      case 'alien':
        return (
          <div className="relative">
            <div className={cn("rounded-full bg-avatar-green", sizeClasses[size])}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/5 h-2/5 flex items-center justify-evenly">
                  <div className="w-3 h-5 bg-black rounded-full"></div>
                  <div className="w-3 h-5 bg-black rounded-full"></div>
                </div>
                <div className="absolute bottom-1/4 w-1/3 h-1/6 bg-black rounded-full"></div>
              </div>
            </div>
            <div className="absolute -top-1/6 left-1/4 w-1/5 h-1/3 bg-avatar-green rounded-full"></div>
            <div className="absolute -top-1/6 right-1/4 w-1/5 h-1/3 bg-avatar-green rounded-full"></div>
            <div className={cn("absolute top-0 right-0 w-1/3 h-1/3", 
              animationClasses[animation])}></div>
          </div>
        );
      case 'human':
        return (
          <div className="relative">
            <div className={cn("rounded-full bg-avatar-pink", sizeClasses[size])}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2/3 h-1/3 flex items-center justify-evenly">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
                <div className="absolute bottom-1/3 w-1/4 h-1/12 bg-black rounded-full"></div>
              </div>
            </div>
            <div className={cn("absolute top-0 right-0 w-1/3 h-1/3", 
              animationClasses[animation])}></div>
          </div>
        );
      case 'monster':
        return (
          <div className="relative">
            <div className={cn("rounded-full bg-avatar-purple", sizeClasses[size])}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2/3 h-1/3 flex items-center justify-evenly">
                  <div className="w-3 h-3 bg-white rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                  </div>
                  <div className="w-3 h-3 bg-white rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                  </div>
                </div>
                <div className="absolute bottom-1/4 w-1/3 h-1/6 bg-white rounded-full flex items-center justify-evenly">
                  <div className="w-1 h-1 bg-black rounded-full"></div>
                  <div className="w-1 h-1 bg-black rounded-full"></div>
                  <div className="w-1 h-1 bg-black rounded-full"></div>
                </div>
              </div>
            </div>
            <div className={cn("absolute top-0 right-0 w-1/3 h-1/3", 
              animationClasses[animation])}></div>
          </div>
        );
      default:
        return (
          <div className={cn("rounded-full bg-gray-300", sizeClasses[size])}></div>
        );
    }
  };

  return (
    <div className={cn("avatar-container", className)}>
      {getAvatarImage()}
    </div>
  );
};

export default Avatar;
