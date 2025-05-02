chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  chrome.scripting.executeScript(
    {
      target: { tabId: tabs[0].id },
      func: extractASINs
    },
    (injectionResults) => {
      const asinList = document.getElementById("asinList");
      const asins = injectionResults[0].result;
      asinList.innerHTML = ''; // Clear list first
      asins.forEach((asin) => {
        const li = document.createElement("li");
        li.textContent = asin;
        asinList.appendChild(li);
      });

      document.getElementById("copyBtn").addEventListener("click", () => {
        const asinText = asins.join("\n");
        navigator.clipboard.writeText(asinText);
      });
    }
  );
});

function extractASINs() {
  const links = Array.from(document.querySelectorAll("a[href]"));
  const asinRegex = /\/(dp|gp\/product)\/([A-Z0-9]{10})/;
  const asins = new Set();

  links.forEach((link) => {
    const match = link.href.match(asinRegex);
    if (match) {
      asins.add(match[2]);
    }
  });

  return Array.from(asins);
}