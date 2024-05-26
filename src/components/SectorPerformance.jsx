import { motion } from 'framer-motion';

const SectorPerformance = () => {
  const sectors = [
    { name: 'Industrials', change: '+1.66%' },
    { name: 'Communication Services', change: '+1.55%' },
    { name: 'Technology', change: '+1.08%' },
    { name: 'Consumer Cyclical', change: '+1.02%' },
    { name: 'Financial', change: '+0.99%' },
    { name: 'Healthcare', change: '+0.84%' },
    { name: 'Real Estate', change: '+0.69%' },
    { name: 'Basic Materials', change: '+0.65%' },
    { name: 'Utilities', change: '+0.57%' },
    { name: 'Energy', change: '-0.05%' },
    { name: 'Consumer Defensive', change: '-0.12%' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 p-4 rounded"
    >
      <h3 className="text-lg font-bold mb-2">Sector Performance</h3>
      <ul>
        {sectors.map((sector) => (
          <li key={sector.name} className="flex justify-between">
            <span>{sector.name}</span>
            <span className={`${sector.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
              {sector.change}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SectorPerformance;
