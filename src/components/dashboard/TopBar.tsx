
import React, { useState } from 'react';
import { Search, Bell, Menu, Upload, Radio } from 'lucide-react';
import { GlowCard } from '@/components/ui/spotlight-card';
import { GlowInput } from '@/components/ui/glow-input';
import { GlowButton } from '@/components/ui/glow-button';

interface TopBarProps {
  title: string;
  onMenuClick: () => void;
  showMobileMenu?: boolean;
}

const TopBar: React.FC<TopBarProps> = ({ title, onMenuClick, showMobileMenu = false }) => {
  const [searchValue, setSearchValue] = useState('');

  const quickActions = [
    {
      id: 'upload',
      label: 'Upload Video',
      icon: Upload,
      color: 'bg-red-600 hover:bg-red-700',
      href: '/dashboard/upload'
    },
    {
      id: 'livestream',
      label: 'Go Live',
      icon: Radio,
      color: 'bg-blue-600 hover:bg-blue-700',
      href: '/dashboard/livestreams'
    }
  ];

  return (
    <div className="bg-black border-b border-gray-800 px-4 py-3 flex items-center justify-between">
      {/* Left side */}
      <div className="flex items-center space-x-4">
        {showMobileMenu && (
          <button
            onClick={onMenuClick}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 text-gray-400"
          >
            <Menu className="w-5 h-5" />
          </button>
        )}
        
        <div>
          <h1 className="text-xl font-semibold text-white">{title}</h1>
        </div>
      </div>

      {/* Center - Search */}
      <div className="hidden md:flex flex-1 max-w-md mx-8">
        <GlowInput
          glowColor="red"
          placeholder="Search videos, comments..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          leftIcon={<Search className="w-4 h-4" />}
          className="h-10"
        />
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-3">
        {/* Mobile search */}
        <GlowCard 
          glowColor="red" 
          customSize={true}
          className="md:hidden w-auto h-auto aspect-auto grid-rows-none gap-0 p-0 bg-transparent border-0 shadow-none backdrop-blur-none"
        >
          <button className="p-2 rounded-lg hover:bg-gray-800 text-gray-400">
            <Search className="w-5 h-5" />
          </button>
        </GlowCard>

        {/* Quick Actions */}
        <div className="hidden sm:flex items-center space-x-3">
          {quickActions.map((action) => (
            <GlowButton
              key={action.id}
              glowColor="red"
              leftIcon={<action.icon className="w-4 h-4" />}
              className={`${action.color} rounded-full h-10`}
            >
              <span className="hidden lg:block">{action.label}</span>
            </GlowButton>
          ))}
        </div>

        {/* Mobile Quick Actions - Icons only */}
        <div className="sm:hidden flex items-center space-x-2">
          {quickActions.map((action) => (
            <GlowButton
              key={action.id}
              glowColor="red"
              leftIcon={<action.icon className="w-4 h-4" />}
              className={`${action.color} rounded-full p-2 h-10 w-10`}
            >
            </GlowButton>
          ))}
        </div>

        {/* Notifications */}
        <div className="relative">
          <GlowButton
            glowColor="red"
            leftIcon={<Bell className="w-5 h-5" />}
            className="bg-gray-800 hover:bg-gray-700 rounded-full h-10 w-10 p-0 relative"
          >
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </GlowButton>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
