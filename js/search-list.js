    document.addEventListener('DOMContentLoaded', () => {
  // Sample agencies data
  const agencies = [
    'Agency Alpha',
    'Beta Corporation',
    'Gamma Group',
    'Delta Enterprises',
    'Epsilon Inc',
    'Zeta Organization',
    ];

    // DOM Elements for Main Search
    const mainSearchInput = document.getElementById('mainSearchInput');
    const mainSearchButton = document.getElementById('mainSearchButton');
    const resultsList = document.getElementById('resultsList');

    // DOM Elements for Modal Search
    const modalSearchInput = document.getElementById('modalSearchInput');
    const modalSearchResults = document.getElementById('searchResults');

    // Function to perform the search
    function searchAgencies(query) {
    return agencies.filter((agency) =>
    agency.toLowerCase().includes(query.toLowerCase())
    );
  }

    // Function to update results for the main search
    function updateMainResults(query) {
    const results = searchAgencies(query);
    resultsList.innerHTML = '';
    if (results.length === 0) {
        resultsList.innerHTML = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Organization is not found.
          <a href="./Register.html"><button class="btn custom-btn" onclick="registerOrganization()">Register Organization</button></a>
        </li>
      `;
    } else {
        results.forEach((result) => {
            const listItem = document.createElement('li');
            listItem.textContent = result;
            listItem.className = 'list-group-item';
            resultsList.appendChild(listItem);
        });
    }
  }

    // Function to update results for the modal search
    function updateModalResults(query) {
    const results = searchAgencies(query);
    modalSearchResults.innerHTML = '';
    if (results.length === 0) {
        modalSearchResults.innerHTML = `
        <li class="list-group-item">No results found</li>
      `;
    } else {
        results.forEach((result) => {
            const listItem = document.createElement('li');
            listItem.textContent = result;
            listItem.className = 'list-group-item';
            modalSearchResults.appendChild(listItem);
        });
    }
  }

  // Main Search Event Listeners
  mainSearchButton.addEventListener('click', () => updateMainResults(mainSearchInput.value));
  mainSearchInput.addEventListener('input', () => updateMainResults(mainSearchInput.value));

  // Modal Search Event Listeners
  modalSearchInput.addEventListener('input', () => updateModalResults(modalSearchInput.value));

    // Register Organization Function (Global)
    window.registerOrganization = function () {
        alert('Redirecting to the registration page...');
    window.location.href = 'register-organization.html';
  };
});
