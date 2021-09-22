
document.querySelectorAll("button.btn-secondary").forEach(i => {
    i.setAttribute("onclick", `addToCart('${JSON.stringify(access_name)}', event)`)
  })