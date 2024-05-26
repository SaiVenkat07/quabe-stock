import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-900 text-white">
      <Sidebar />
      <div className="flex-1 p-4 lg:ml-25">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
