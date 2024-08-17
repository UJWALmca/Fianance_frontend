import React, { useState, useEffect } from 'react';

const Analysis = () => {
  const [report, setReport] = useState(null);

  const fetchAnalysis = async () => {
    const response = await fetch('/api/analysis');
    const data = await response.json();
    setReport(data);
  };

  useEffect(() => {
    fetchAnalysis();
  }, []);

  return (
    <div>
      <h2>Expense Analysis</h2>
      {report ? (
        <div>
          <h3>Total Expenditure: {report.totalExpenditure}</h3>
          <h4>By Category:</h4>
          <ul>
            {report.byCategory.map((item, index) => (
              <li key={index}>{item.category}: {item.amount}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Analysis;
