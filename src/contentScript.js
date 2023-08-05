function getPageTitle() {
	const title = document.title;
	return title;
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.type === "getTitle") {
		const title = getPageTitle();
		sendResponse(title);
	}
}, []);
