import axios from 'axios';

const API_KEY = 'GTHQPWX5H2TLDT67';
const BASE_URL = 'https://www.alphavantage.co/query';

export const fetchMarketData = async (timeRange, interval = '5min') => {
  let endpoint = '';

  switch (timeRange) {
    case '1D':
      endpoint = `TIME_SERIES_INTRADAY&symbol=SPY&interval=${interval}`;
      break;
    case '1W':
    case '1M':
    case '3M':
    case '1Y':
    case 'All':
      endpoint = `TIME_SERIES_DAILY&symbol=SPY`;
      break;
    default:
      endpoint = `TIME_SERIES_INTRADAY&symbol=SPY&interval=${interval}`;
  }

  try {
    const response = await axios.get(`${BASE_URL}?function=${endpoint}&apikey=${API_KEY}`);
    const timeSeries = response.data[`Time Series (${interval})`] || response.data['Time Series (Daily)'];
    if (timeSeries) {
      return Object.keys(timeSeries).map(key => ({
        date: key,
        value: parseFloat(timeSeries[key]['4. close']),
      })).reverse();
    }
    return [];
  } catch (error) {
    console.error('Error fetching market data:', error);
    return [];
  }
};
