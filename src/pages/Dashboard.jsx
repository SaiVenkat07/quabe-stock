import Header from '../components/Header';
import MarketSummary from '../components/MarketSummary';
import SectorPerformance from '../components/SectorPerformance';
import MarketsTable from '../components/MarketsTable';
import SPDRChart from '../components/SPDRChart';

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        <MarketSummary />
        <SectorPerformance />
      </div>
      <div className="mt-3 grid grid-cols-1 lg:grid-cols-2 gap-2">
        <MarketsTable />
        <SPDRChart />
      </div>
    </div>
  );
};

export default Dashboard;
