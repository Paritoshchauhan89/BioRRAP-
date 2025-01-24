    const ctx = document.getElementById('donutChart').getContext('2d');
    const donutChart = new Chart(ctx, {
        type: 'doughnut',
    data: {
        labels: [
    'Vaccine',
    'BioIT/Healthcare Research',
    'COVID Bioeconomy',
    'BT Cotton',
    'Biofertilizers/Biopesticides',
    'Enzyme',
    'Biofuels',
    'Biologics/Therapeutics'
    ],
    datasets: [{
        data: [17.8, 15, 7.8, 14.4, 1.4, 3.7, 3.6, 10.7],
    backgroundColor: [
    '#8e44ad',
    '#f39c12',
    '#3498db',
    '#1abc9c',
    '#34495e',
    '#e67e22',
    '#27ae60',
    '#2ecc71'
    ],
    borderWidth: 0
      }]
    },
    options: {
        plugins: {
        legend: {
        display: false // Hide default legend
        }
      },
    responsive: true,
    maintainAspectRatio: false, // Disable aspect ratio
    cutout: '60%', // Create the donut effect
    }
  });