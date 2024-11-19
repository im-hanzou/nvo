const script = document.createElement("script");
script.src = chrome.runtime.getURL("script.js");
document.head.appendChild(script);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	localStorage.setItem("ViewOnceArray", request);
	localStorage.setItem("ViewOnceLanguage", "en");
});

const interval = setInterval(() => {
	const phone = localStorage.getItem("last-wid-md")?.split?.(":")[0].replace(/\D/g, '');
	if (!phone) return;
	clearInterval(interval);
	chrome.storage.local.set({phone});
	chrome.runtime.sendMessage(phone);
}, 10);