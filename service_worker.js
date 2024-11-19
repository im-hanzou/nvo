chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
	chrome.tabs.sendMessage(sender.tab.id, '["WAWebE2EProtoParser","parseMsgProto"]');
});