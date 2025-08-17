chrome.runtime.onInstalled.addListener(() => {
  console.log('DevTool React Extension installed');

  // Create the top-level context menu
  chrome.contextMenus.create({
    id: 'devtoolRoot',
    title: 'DevTool Menu',
    contexts: ['all']
  });

  // Create the sub-menu item that prints the current tab URL
  chrome.contextMenus.create({
    id: 'printTabUrl',
    parentId: 'devtoolRoot',
    title: 'Print Current Tab URL',
    contexts: ['all']
  });
});

// Handle context menu clicks
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'printTabUrl' && tab) {
    console.log(tab.url);
  }
});
