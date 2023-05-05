// Get a reference to the table body element
const tableBody = document.getElementById('table-body');

// Make a GET request to the server to retrieve the data
fetch('/tickers')
    .then(response => response.json())
    .then(data => {
        // Loop through the data and create a table row for each item
        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.last}</td>
                <td>${item.buy}</td>
                <td>${item.sell}</td>
                <td>${item.volume}</td>
                <td>${item.base_unit}</td>
            `;
            tableBody.appendChild(row);
        });
    })
    .catch(error => console.error(error));
