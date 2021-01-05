const rippleEffect = (e) => {
  let target = e.target.closest(".mainBtn"),
    left = e.clientX - target.getBoundingClientRect().x + "px",
    top = e.clientY - target.getBoundingClientRect().y + "px",
    ripple = document.createElement("span")
  ripple.classList.add("ripple")
  ripple.style.left = left
  ripple.style.top = top
  if (target.classList.contains("fa") || target.classList.contains("fas")) {
    target = target.parentElement
  }
  target.style.transform = "scale(0.9)"
  target.appendChild(ripple)
  setTimeout(function() {
    ripple.parentElement.removeChild(ripple)
  }, 1000)
  setTimeout(function() {
    target.style.transform = "scale(1)"
  }, 100)
}

const currentPage = (e, selectedSection) => {
  if (!e.target.classList.contains("active") && e.target.tagName === "A") {
    let links = document.querySelectorAll(".menu li a"),
      sidebarLinks = document.querySelectorAll("#sidebar li a")

    links.forEach((link, index) => {
      link.className = ""
      sidebarLinks[index].className = ""
      if (e.target === link || e.target === sidebarLinks[index]) {
        selectedSection === 2 ? link.classList.add("activeWhite") : link.classList.add("active")
        sidebarLinks[index].classList.add("active")
      }
    })
  }
}

const parallax = (e, elems) => {
  if (elems) {
    const x = e.clientX / window.innerWidth,
      y = e.clientY / window.innerHeight
    if (!elems.nodeName) {
      elems.forEach(elem => {
        let data = elem.getAttribute("data-translate")
        elem.style.transform = "translate(-" + x * data + "%, -" + y * data + "%)"
      })
    } else {
      let data = elems.getAttribute("data-translate")
      elems.style.transform = "translate(-" + x * data + "%, -" + y * data + "%)"
    }
  }
}

export { rippleEffect, currentPage, parallax }
