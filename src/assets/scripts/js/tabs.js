"use strict";
const tabHeadersIDs = ["salads-button", "bowls-button", "sides-button"];
const tabHeadersEls = tabHeadersIDs.map((headerId) => document.getElementById(headerId));
const tabContentsIDs = ["salads-content", "bowls-content", "sides-content"];
const tabContentsEls = tabContentsIDs.map((tabContentId) => document.getElementById(tabContentId));
console.log(tabContentsEls);
tabHeadersEls.map((tabHeader, tabHeaderIndex) => {
    tabHeader === null || tabHeader === void 0 ? void 0 : tabHeader.addEventListener("click", () => {
        var _a;
        tabHeader.classList.add("active");
        tabHeadersEls.map((innerTabHeader, innerTabHeaderIndex) => {
            if (tabHeaderIndex !== innerTabHeaderIndex) {
                innerTabHeader === null || innerTabHeader === void 0 ? void 0 : innerTabHeader.classList.remove("active");
            }
        });
        (_a = tabContentsEls[tabHeaderIndex]) === null || _a === void 0 ? void 0 : _a.classList.add("active");
        tabContentsEls.map((tabContent, tabContentIndex) => {
            if (tabContentIndex !== tabHeaderIndex) {
                tabContent === null || tabContent === void 0 ? void 0 : tabContent.classList.remove("active");
            }
        });
    });
});
console.log(tabHeadersEls);
