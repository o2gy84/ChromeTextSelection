// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function()
{
  var context = "selection";
  var title = "calculate size";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                         "id": "context" + context});
});

// add click event
chrome.contextMenus.onClicked.addListener(onClickHandler);

function onClickHandler(info, tab) 
{
  var sText = info.selectionText;
  window.alert("size: " + sText.length);

  
  //var url = "https://www.google.com/search?q=" + encodeURIComponent(sText);  
  //window.open(url, '_blank');
};
