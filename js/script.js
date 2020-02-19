import Nav from './components/nav.js'

!(function() {
  document.querySelector("nav-component").outerHTML = Nav({
    selected: location.pathname.replace(".html", "").replace("/", "")
  });
})()