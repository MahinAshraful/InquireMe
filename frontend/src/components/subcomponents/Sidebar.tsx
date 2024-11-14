import { ChevronLeft, MessageSquare, Upload, User, LogOut, Menu } from 'lucide-react';

interface SidebarProps {
  collapsed: boolean;
  toggleSidebar: () => void;
  onLogout: () => void;
}

const Sidebar = ({ collapsed, toggleSidebar, onLogout }: SidebarProps) => {
  return (
    <div
      className={`
        fixed left-0 top-0 h-full bg-[#0f3724] text-white
        transition-all duration-300 ease-in-out
        ${collapsed ? 'w-20' : 'w-64'}
        flex flex-col
      `}
    >
      {/* Header with Title and Toggle */}
      <div className="p-6 flex items-center justify-between border-b border-[#2c5842] h-20">
        <h1 className={`font-semibold text-xl whitespace-nowrap overflow-hidden transition-all duration-300 ${collapsed ? 'opacity-0 w-0' : 'opacity-100 w-auto'}`}>
          Inquire Me
        </h1>
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-[#2c5842] transition-colors"
        >
          {collapsed ? (
            <Menu size={24} />
          ) : (
            <ChevronLeft size={24} />
          )}
        </button>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 py-8 space-y-4">
        <NavItem icon={User} label="Profile" collapsed={collapsed} />
        <NavItem icon={MessageSquare} label="Messages" collapsed={collapsed} />
        <NavItem icon={Upload} label="Upload" collapsed={collapsed} />
      </nav>

      {/* Logout at Bottom */}
      <div className="p-6 border-t border-[#2c5842]">
        <button
          onClick={onLogout}
          className="flex items-center w-full px-4 py-3 text-gray-300 hover:bg-[#2c5842] transition-colors rounded-lg"
        >
          <LogOut size={24} />
          <span className={`ml-4 whitespace-nowrap overflow-hidden transition-all duration-300 ${collapsed ? 'opacity-0 w-0' : 'opacity-100 w-auto'}`}>
            Logout
          </span>
        </button>
      </div>
    </div>
  );
};

// Helper component for nav items
const NavItem = ({ icon: Icon, label, collapsed }: { icon: any, label: string, collapsed: boolean }) => (
  <a
    href="#"
    className="flex items-center px-6 py-3 text-gray-300 hover:bg-[#2c5842] transition-colors"
  >
    <Icon size={24} />
    <span className={`ml-4 whitespace-nowrap overflow-hidden transition-all duration-300 ${collapsed ? 'opacity-0 w-0' : 'opacity-100 w-auto'}`}>
      {label}
    </span>
  </a>
);

export default Sidebar;