window.addEventListener('load', () => {
  chrome.storage.sync.get("searchTerms", (data) => {
    const searchTerms = data.searchTerms.filter(term => term !== "");
    const destinationList = document.querySelector('.destination_list');
    if (destinationList) {
      const textContent = destinationList.textContent;
      const allTermsHavving = searchTerms.every(term => new RegExp(term).test(textContent));
      if (!allTermsHavving) {
        const searchButton = document.getElementById('link_search');
        if (searchButton) {
          searchButton.click();
        }
      }
    }
  });
});