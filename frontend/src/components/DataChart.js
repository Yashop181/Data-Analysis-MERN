import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend
);

const DataChart = () => {
  const [chartData, setChartData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/data");
      const data = response.data;

      if (!data || !Array.isArray(data)) {
        throw new Error("Invalid data format");
      }

      const chartLabels = data.map((item) =>
        new Date(item.timestamp).toLocaleDateString()
      );
      const chartValues = data.map((item) => item.value);

      setChartData({
        labels: chartLabels,
        datasets: [
          {
            label: "Data Values",
            data: chartValues,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            fill: true,
          },
        ],
      });

      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Data Analysis Chart</h2>
      <div style={{width:"60%"}}>
      <Line data={chartData} />
      </div>

    </div>
  );
};

export default DataChart;
