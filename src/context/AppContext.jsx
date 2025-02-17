import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

const API_BASE_URL = "http://hrf-asylum-be-b.herokuapp.com/cases";

const useAppContextProvider = () => {
  const [graphData, setGraphData] = useState(null);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [error, setError] = useState(null);

  useLocalStorage({ graphData, setGraphData });

  // 🔄 Fetch Fiscal Year Data from API
  const getFiscalData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/fiscalSummary`);
      return response.data;
    } catch (err) {
      console.error("Error fetching fiscal data:", err);
      setError("Failed to fetch fiscal data");
      return null;
    }
  };

  // 🔄 Fetch Citizenship Data from API
  const getCitizenshipResults = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/citizenshipSummary`);
      return response.data;
    } catch (err) {
      console.error("Error fetching citizenship data:", err);
      setError("Failed to fetch citizenship data");
      return null;
    }
  };

  // 🏁 Fetch and set data
  const fetchData = async () => {
    try {
      setIsDataLoading(true);

      const [fiscalData, citizenshipData] = await Promise.all([
        getFiscalData(),
        getCitizenshipResults(),
      ]);

      if (fiscalData && citizenshipData) {
        setGraphData({
          ...fiscalData,
          citizenshipResults: citizenshipData,
        });
      }
    } catch (err) {
      console.error("Error during data fetching:", err);
      setError("Failed to fetch data.");
    } finally {
      setIsDataLoading(false);
    }
  };

  // 🔄 Refresh Data Manually
  const updateQuery = async () => {
    setIsDataLoading(true);
    fetchData();
  };

  // 🚫 Clear Data
  const clearQuery = () => {
    setGraphData(null);
  };

  // 📊 Extract Years for Graphs
  const getYears = () =>
    graphData?.yearResults?.map(({ fiscal_year }) => Number(fiscal_year)) ?? [];

  // 🎬 Fetch Data on Mount
  useEffect(() => {
    fetchData();
  }, []);

  return {
    graphData,
    setGraphData,
    isDataLoading,
    updateQuery,
    clearQuery,
    getYears,
    error,
  };
};

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function ProvideAppContext({ children }) {
  const contextValue = useAppContextProvider();

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}
