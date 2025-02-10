document.addEventListener('DOMContentLoaded', () => {
  const term1Input = document.getElementById('term1');
  const term2Input = document.getElementById('term2');
  const term3Input = document.getElementById('term3');
  const term4Input = document.getElementById('term4');
  const form = document.getElementById('termsForm');

  chrome.storage.sync.get('searchTerms', (data) => {
    const searchTerms = data.searchTerms;
    term1Input.value = searchTerms[0];
    term2Input.value = searchTerms[1];
    term3Input.value = searchTerms[2];
    term4Input.value = searchTerms[3];
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchTerms = [
      term1Input.value,
      term2Input.value,
      term3Input.value,
      term4Input.value
    ];
    chrome.storage.sync.set({ searchTerms }, () => {
      console.log('Search terms saved.');
    });
  });
});