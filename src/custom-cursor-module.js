const { body } = document
function setCursor(pathToImage, el, params={}) {
  const cursor = params?.cursorEl ? params.cursorEl : document.createElement("div")
  cursor.style.width = cursor.style.height = params?.size || "64px"
  cursor.style.background = `url(${pathToImage}) no-repeat center top / cover`
  cursor.style.position = "absolute"
  
  if (!params?.noUseOverflow) el.style.overflow = "hidden"
  el.style.cursor = "none"
  el.append(cursor)

  el.addEventListener("mousemove", e => {
    const x = e.pageX = e.clientX +
      (el && el.scrollLeft || body && body.scrollLeft || 0) -
      (el && el.clientLeft || body && body.clientLeft || 0)
    const y = e.pageY = e.clientY +
      (el && el.scrollTop || body && body.scrollTop || 0) -
      (el && el.clientTop || body && body.clientTop || 0)

    cursor.style.top = `${y}px`
    cursor.style.left = `${x}px`
  })

  el.addEventListener("mouseenter", () => cursor.style.opacity = 1)
  el.addEventListener("mouseleave", () => cursor.style.opacity = 0)
}