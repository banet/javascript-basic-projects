// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

//Grab 
const btn = document.querySelector('.nav-toggle')

const links = document.querySelector('.links')

// Addevent listener to button

btn.addEventListener('click', showLinks)


function showLinks() {
    

  if(links.classList.contains('show-links')) {
      links.classList.remove('show-links')
  }
  else {
      links.classList.add('show-links')
  }
 
 
}
