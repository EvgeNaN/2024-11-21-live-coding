(async () => {
  const fetchAnalytics = async () => {
    const res = await fetch(`http://localhost:3000/historical-trades`);
    
    return res.json();
  };

  const outputData = (data) => {
    const domElements = getDomElements(data);

    document.body.appendChild(domElements);
  };

  const getDomElements = (data) => {
    const root = document.createElement('div');

    for (let i = 0; i < data.length; i++) {
      const row = document.createElement('div');

      row.style.paddingBottom = '20px';

      row.innerHTML = `
        <div>Bunch from ${new Date(data[i].startTimestamp).toLocaleString()} to ${new Date(data[i].endTimestamp).toLocaleString()}</div>
        <div>Is bull: ${data[i].isBull}</div>
        <div>Price change: from ${data[i].median2} to ${data[i].median1}</div>
      `;

      root.appendChild(row);
    }

    return root;
  };

  const data = await fetchAnalytics();

  outputData(data);
})();