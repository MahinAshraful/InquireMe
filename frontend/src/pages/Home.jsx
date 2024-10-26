import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Home() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await fetch('http://localhost:5555/logout', {
        method: 'POST',
        credentials: 'include',
      });
      setUser(null);
      navigate('/login');
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="p-6 bg-white rounded-lg shadow">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Welcome!</h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
            >
              Logout
            </button>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">
              You are logged in as: <span className="font-semibold">{user.email}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;