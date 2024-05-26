# Stock Dashboard
![Screenshot 2024-05-26 134611](https://github.com/SaiVenkat07/quabe-stock/assets/125186243/3fe0d4eb-0739-4229-bdae-b3c0a8fe6ce9)


This is a React-based stock dashboard application that provides an overview of various market indices, sector performance, and detailed charts for the SPDR S&P 500 ETF Trust. The application uses `framer-motion` for animations, `recharts` for charts, and `axios` to fetch market data from the Alpha Vantage API.

## Features

- Sidebar navigation for different sections (Home, Search, Profile).
- Display of market summary, sector performance, and market indices in tabular format.
- Interactive chart for SPDR S&P 500 ETF Trust with different time ranges.
- Responsive design that adapts to different screen sizes.

## Installation

To get started with this project, clone the repository and install the necessary dependencies:

```bash
git clone <repository_url>
cd stock-dashboard
npm install
```

## Running the Application

To run the application locally, use the following command:

```bash
npm start
```

This will start the development server and you can view the application in your browser at `http://localhost:3000`.

## API Setup

This application uses the Alpha Vantage API to fetch market data. You will need to obtain an API key from Alpha Vantage.

1. Visit [Alpha Vantage](https://www.alphavantage.co/support/#api-key) to get your free API key.
2. Create a `.env` file in the root directory of the project and add your API key:

```bash
REACT_APP_ALPHA_VANTAGE_API_KEY=your_api_key_here
```

## Project Structure

The project is structured as follows:

```
src/
├── components/
│   ├── Header.js
│   ├── MarketsTable.js
│   ├── MarketSummary.js
│   ├── SectorPerformance.js
│   ├── Sidebar.js
│   └── SPDRChart.js
├── pages/
│   └── Dashboard.js
├── utils/
│   └── api.js
└── App.js
```

### Components

- `Header.js`: Displays the header with a welcome message and navigation buttons.
- `MarketsTable.js`: Displays a table of various market indices with their values and changes.
- `MarketSummary.js`: Provides a brief summary of market performance.
- `SectorPerformance.js`: Displays the performance of different market sectors.
- `Sidebar.js`: Contains the sidebar navigation with links to different sections.
- `SPDRChart.js`: Displays an interactive chart for SPDR S&P 500 ETF Trust with different time ranges.

### Pages

- `Dashboard.js`: Main dashboard page that combines all the components.

### Utils

- `api.js`: Contains the function to fetch market data from the Alpha Vantage API.

## Dependencies

The project uses the following main dependencies:

- `react`: JavaScript library for building user interfaces.
- `framer-motion`: Library for animations.
- `recharts`: Library for building charts.
- `axios`: Promise-based HTTP client for making API requests.
- `moment`: Library for parsing, validating, manipulating, and formatting dates.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your changes.

## Contact

For any questions or feedback, please contact [vsairam88@gmail.com].
