    const items = [
    {name: "Home --Website Home Page" , link: "https://biorrap.gov.in/" },
    {name: "Guidance", link: "https://biorrap.gov.in/Home/Guidance" },
    {name: "About Us", link: "https://biorrap.gov.in/UserManual/index.html" },
    {name: "Organization Registration", link: "https://biorrap.gov.in/Home/SearchOrganization" },
    {name: "Application Submission", link: "https://biorrap.gov.in/Home/ApplicationSubmission" },
    {name: "Regulatory Documents", link: "https://biorrap.gov.in/Home/RegulatoryDocuments" },
    {name: "Contact Us", link: "https://biorrap.gov.in/Home/ContactUs" },
    {name: "FAQ's", link: "https://biorrap.gov.in/Home/FAQ" }
    ];



        // Open modal when Ctrl+K is pressed
        document.addEventListener('keydown', (event) => {
            if (event.ctrlKey && event.key === 'k') {
        event.preventDefault(); // Prevent default browser action
    const searchModal = new bootstrap.Modal(document.getElementById('searchModal'));
    searchModal.show();
            }
        });

    // Focus the input when modal is shown
    const searchModalElement = document.getElementById('searchModal');
        searchModalElement.addEventListener('shown.bs.modal', () => {
        document.getElementById('searchInput').focus();
        });

    // Live search functionality
    document.getElementById('searchInput').addEventListener('input', function() {
            const query = this.value.toLowerCase();
            const results = items.filter(item => item.name.toLowerCase().includes(query));
    const resultsContainer = document.getElementById('searchResults');
            resultsContainer.innerHTML = results.map(item => `<li><a href="${item.link}">${item.name}</a></li>`).join('');
        });