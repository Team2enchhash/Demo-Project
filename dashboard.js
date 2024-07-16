const sidebarToggle = document.querySelector("#sidebar-toggle");
sidebarToggle.addEventListener("click", function () {
    document.querySelector("#sidebar").classList.toggle("collapsed");
});

// ------------------------------------------------------------------------------------

var ctx = document.getElementById('claimSettlementChart').getContext('2d');
var gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(60, 179, 113, 1)');   // High (red)
gradient.addColorStop(1, 'rgba(75, 192, 192, 1)');   // Low (green)

var claimSettlementChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: 'Claim Settlement Ratio',
            data: [15, 30, 25, 35, 65, 50, 94.54],
            backgroundColor: gradient,
            borderColor: gradient,
            fill: false,
            tension: 0
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});
// *************************
var ctxLine = document.getElementById('lineChart').getContext('2d');

var lineChart = new Chart(ctxLine, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: 'Customers Insured',
            data: [150, 225, 100, 250, 450, 325, 650],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderWidth: 2,
            // fill: true,
            tension: 0
        }, {
            label: 'Policies Insured',
            data: [50, 125, 200, 150, 300, 250, 400],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 2,
            // fill: true,
            tension: 0
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// ------------------------------------------------------------------------------------

// 
const data = [
    { id: 1, name: "Tobey Maguire", vehicleNumber: "TN50F7953", year: 2009, plan: "Rs. 500" },
    { id: 2, name: "Andrew Garfield", vehicleNumber: "TN50AL6870", year: 2023, plan: "Rs. 500" },
    { id: 3, name: "Tom Holland", vehicleNumber: "TN50AL3556", year: 2018, plan: "Rs. 500" },
    { id: 4, name: "Andrew", vehicleNumber: "TN50AL6870", year: 2021, plan: "Rs. 500" },
    { id: 5, name: "Tom", vehicleNumber: "TN50D5635", year: 2019, plan: "Rs. 500" },
    { id: 6, name: "John Doe", vehicleNumber: "TN60D5635", year: 2020, plan: "Rs. 600" },
    { id: 7, name: "Jane Doe", vehicleNumber: "TN70D5635", year: 2021, plan: "Rs. 700" },
    { id: 8, name: "Harry Potter", vehicleNumber: "TN80D5635", year: 2022, plan: "Rs. 800" },
    { id: 9, name: "Hermione Granger", vehicleNumber: "TN90D5635", year: 2023, plan: "Rs. 900" },
    { id: 10, name: "Ron Weasley", vehicleNumber: "TN10D5635", year: 2024, plan: "Rs. 1000" },
    { id: 11, name: "Tony Stark", vehicleNumber: "TN11D5635", year: 2015, plan: "Rs. 1500" },
    { id: 12, name: "Steve Rogers", vehicleNumber: "TN12D5635", year: 2016, plan: "Rs. 1600" },
    { id: 13, name: "Natasha Romanoff", vehicleNumber: "TN13D5635", year: 2017, plan: "Rs. 1700" },
    { id: 14, name: "Bruce Banner", vehicleNumber: "TN14D5635", year: 2018, plan: "Rs. 1800" },
    { id: 15, name: "Clint Barton", vehicleNumber: "TN15D5635", year: 2019, plan: "Rs. 1900" }
];

const rowsPerPage = 5;
let currentPage = 1;

function populateTable(page = 1) {
    const tableBody = document.querySelector('#dataTable tbody');
    tableBody.innerHTML = '';

    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedData = data.slice(start, end);

    paginatedData.forEach((row) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <th scope="row">${row.id}</th>
            <td>${row.name}</td>
            <td>${row.vehicleNumber}</td>
            <td>${row.year}</td>
            <td>${row.plan}</td>
        `;
        tableBody.appendChild(tr);
    });

    updatePagination();
}

function updatePagination() {
    const pagination = document.querySelector('.pagination');
    pagination.innerHTML = '';

    const totalPages = Math.ceil(data.length / rowsPerPage);

    // Previous button
    const prevLi = document.createElement('li');
    prevLi.className = `page-item ${currentPage === 1 ? 'disabled' : ''}`;
    prevLi.innerHTML = `
        <a class="page-link" href="#" aria-label="Previous" data-page="${currentPage - 1}">
            <span aria-hidden="true">&laquo;</span>
        </a>
    `;
    pagination.appendChild(prevLi);

    // Page buttons
    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        li.className = `page-item ${i === currentPage ? 'active' : ''}`;
        li.innerHTML = `<a class="page-link" href="#" data-page="${i}">${i}</a>`;
        pagination.appendChild(li);
    }

    // Next button
    const nextLi = document.createElement('li');
    nextLi.className = `page-item ${currentPage === totalPages ? 'disabled' : ''}`;
    nextLi.innerHTML = `
        <a class="page-link" href="#" aria-label="Next" data-page="${currentPage + 1}">
            <span aria-hidden="true">&raquo;</span>
        </a>
    `;
    pagination.appendChild(nextLi);
}

// Event listener for pagination clicks
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('page-link')) {
        e.preventDefault();
        const page = parseInt(e.target.getAttribute('data-page'));
        if (!isNaN(page) && page > 0 && page <= Math.ceil(data.length / rowsPerPage)) {
            currentPage = page;
            populateTable(currentPage);
        }
    }
});

// Call the function to populate the table when the page loads
document.addEventListener('DOMContentLoaded', () => populateTable(currentPage));



//
// document.addEventListener('DOMContentLoaded', function () {
//     const sidebarLinks = document.querySelectorAll('.sidebar-link');

//     sidebarLinks.forEach(link => {
//         link.addEventListener('click', function () {
//             sidebarLinks.forEach(link => link.parentElement.classList.remove('active'));
//             this.parentElement.classList.add('active');
//         });
//     });
// });
