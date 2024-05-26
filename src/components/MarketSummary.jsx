import { motion } from 'framer-motion';

const MarketSummary = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 p-4 rounded"
    >
      <h3 className="text-lg font-bold mb-2">The markets are bullish</h3>
      <p>Jan Inflation Surges, Squeezing Budgets; S&P 500 Rallies as Markets Face 'Bumpy' 2% Path</p>
    </motion.div>
  );
};

export default MarketSummary;
