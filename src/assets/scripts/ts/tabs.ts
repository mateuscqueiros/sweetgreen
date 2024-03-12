const tabHeadersIDs = ["salads-button", "bowls-button", "sides-button"];
const tabHeadersEls = tabHeadersIDs.map((headerId) =>
  document.getElementById(headerId)
);
const tabContentsIDs = ["salads-content", "bowls-content", "sides-content"];
const tabContentsEls = tabContentsIDs.map((tabContentId) =>
  document.getElementById(tabContentId)
);
console.log(tabContentsEls);

tabHeadersEls.map((tabHeader, tabHeaderIndex) => {
  tabHeader?.addEventListener("click", () => {
    // Adicionar a classe active no header que foi clicado.
    tabHeader.classList.add("active");
    // Remover classe active nos outros headers.
    tabHeadersEls.map((innerTabHeader, innerTabHeaderIndex) => {
      if (tabHeaderIndex !== innerTabHeaderIndex) {
        innerTabHeader?.classList.remove("active");
      }
    });
    // Adicionar classe active no content ativo.
    tabContentsEls[tabHeaderIndex]?.classList.add("active");
    // Remover classe active nos outros contents.
    tabContentsEls.map((tabContent, tabContentIndex) => {
      if (tabContentIndex !== tabHeaderIndex) {
        tabContent?.classList.remove("active");
      }
    });
  });
});

console.log(tabHeadersEls);
