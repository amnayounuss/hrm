import React, { useRef, useEffect } from 'react';
import { Chart } from 'chart.js/auto';

export default function PieChart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const myChartRef = chartRef.current.getContext('2d');

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(myChartRef, {
      type: 'doughnut',
      options: {
        cutout: 60,
        responsive: true,
        maintainAspectRatio: false,
      },
      data: {
        datasets: [
          {
            data: [35, 50, 15],
            backgroundColor: ['#D63737', '#97C121', '#FCC400'],
            borderWidth: 0,
          },
        ],
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div style={{ width: '187px', height: '187px', marginLeft: '15%'}}>
      <canvas ref={chartRef} />
    </div>
  );
}
