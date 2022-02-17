// Authentication page
let content = document.getElementsByClassName('content')
let tabLinks = document.getElementsByClassName('tabLinks')

content[0].style.display = 'block'
// tabLinks[0].className = ' active'
function openTab(evt, authState) {
  // Declare all variables
  let i, content, tabLinks

  // Get all elements with class="content" and hide them
  content = document.getElementsByClassName('content')
  for (i = 0; i < content.length; i++) {
    content[i].id === authState
      ? (content[i].style.display = 'block')
      : (content[i].style.display = 'none')
  }

  // Get all elements with class="tabLinks" and remove the class "active"
  tabLinks = document.getElementsByClassName('tabLinks')
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(' active', '')
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(authState).style.display = 'block'
  evt.currentTarget.className += ' active'
}
