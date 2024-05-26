/* eslint-disable no-implied-eval */
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import moment from 'moment';
import { fetchMarketData } from '../utils/api';

function SPDRChart() {
  const [data, setData] = useState([]);
  const [timeRange, setTimeRange] = useState('1D');
  const [interval, setInterval] = useState('5min');

  useEffect(() => {
    const getData = async () => {
      const marketData = await fetchMarketData(timeRange, interval);
      const formattedData = marketData.map(item => ({
        ...item,
        date: moment(item.date).format('DD-MM-YYYY'),
      }));
      setData(formattedData);
    };
    getData();
  }, [timeRange, interval]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 p-4 rounded"
    >
      <h2 className="text-xl font-bold mb-4">SPDR S&P 500 ETF Trust</h2>
      <div className="flex justify-end space-x-2 mb-4">
        {['1D', '1W', '1M', '3M', '1Y', 'All'].map(range => (
          <button
            key={range}
            onClick={() => {
              setTimeRange(range);
              if (range === '1D') {
                setInterval('5min');
              } else {
                setInterval('Daily');
              }
            }}
            className={`px-4 py-2 rounded ${timeRange === range ? 'bg-blue-500' : 'bg-gray-700'}`}
          >
            {range}
          </button>
        ))}
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

export default SPDRChart;