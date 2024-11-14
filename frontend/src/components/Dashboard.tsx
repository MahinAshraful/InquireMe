import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './subcomponents/Sidebar';

interface DashboardProps {
  setAuth: (auth: any | null) => void;
}

interface UserInfo {
  message?: string;
  user_since: string;
  [key: string]: any;
}

function Dashboard({ setAuth }: DashboardProps) {
  const [message, setMessage] = useState<string>('');
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/protected', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        const data: UserInfo = await response.json();
        if (response.ok) {
          setMessage(data.message || '');
          setUserInfo(data);
        } else {
          setAuth(null);
          navigate('/login');
        }
      } catch (err) {
        console.error('Error fetching protected data:', err);
      }
    };

    fetchProtectedData();
  }, []);

  const handleLogout = () => {
    setAuth(null);
    navigate('/login');
  };

  return (
    <div className="flex min-h-screen bg-[#93ad9c]">
      <Sidebar
        collapsed={sidebarCollapsed}
        toggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
        onLogout={handleLogout}
      />
      
      <main className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'ml-20' : 'ml-64'}`}>
        <div className="p-8">
          <h1 className="mb-4 text-3xl font-bold text-gray-900">Dashboard</h1>
          <div className="text-gray-600">
            <p className="mb-2">{message}</p>
            {userInfo && (
              <p>Member since: {userInfo.user_since}</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;