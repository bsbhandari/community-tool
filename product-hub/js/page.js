
if (chrome && chrome.identity) {
  chrome.identity.getProfileUserInfo((userInfo) => {
    const email = userInfo.email;
    document.getElementById('email').innerHTML = email ? email.split('@')[0] : email;
    console.table(userInfo);
  });
}
chrome.runtime.onMessage.addListener((response, sender) => {
  if (response.action == "community-data") {
    window['community-data'] = response.content;
    console.log(response.content);
  }
});

function onWindowLoad() {
  var message = document.querySelector('#message');
  chrome.tabs.executeScript(null, { file: "content.js" }, () => {
    if (chrome.runtime.lastError) {
      message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
    }
  });
}

window.onload = onWindowLoad;