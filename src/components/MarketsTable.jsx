import { motion } from 'framer-motion';

const MarketsTable = () => {
  const markets = [
    { name: 'S&P 500', value: '498.84', change: '+4.76', percentChange: '+0.96%' },
    { name: 'Nasdaq', value: '433.35', change: '+4.80', percentChange: '+1.12%' },
    { name: 'Dow Jones', value: '384.31', change: '+1.49', percentChange: '+0.39%' },
    { name: 'Russell 2000', value: '199.45', change: '+4.84', percentChange: '+2.49%' },
    { name: 'Crude Oil', value: '71.54', change: '-1.11', percentChange: '-1.53%' },
    { name: 'Gold', value: '184.42', change: '-0.10', percentChange: '-0.06%' },
    { name: 'Silver', value: '20.44', change: '+0.24', percentChange: '+1.21%' },
    { name: '10-Year Bond', value: '93.88', change: '+0.34', percentChange: '+0.36%' },
    { name: 'Bitcoin', value: '24.57', change: '+1.14', percentChange: '+4.87%' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 p-4 rounded"
    >
      <h3 className="text-lg font-bold mb-2">Markets</h3>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Name</th>
            <th className="text-right">Value</th>
            <th className="text-right">Change</th>
            <th className="text-right">% Change</th>
          </tr>
        </thead>
        <tbody>
          {markets.map((market) => (
            <tr key={market.name}>
              <td>{market.name}</td>
              <td className="text-right">{market.value}</td>
              <td className={`text-right ${market.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {market.change}
              </td>
              <td className={`text-right ${market.percentChange.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {market.percentChange}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

export default MarketsTable;
