document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('.pesquisarimg');
    const searchForm = document.querySelector('form');
    const googleButton = document.querySelector('input[name="pesquisag"]');

    searchForm.addEventListener('submit', function (event) {
        event.preventDefault(); 
        doSearch();
    });

    googleButton.addEventListener('click', function (event) {
        event.preventDefault();
        doSearch();
    });

    function doSearch() {
        const query = searchInput.value;
        if (query) {
            const googleSearchUrl = `https://www.google.com.br/search?q=${encodeURIComponent(query)}`;
            window.location.href = googleSearchUrl; 
        }
    }
});
