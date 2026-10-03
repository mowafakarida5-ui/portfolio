// هي اللي بتحرك الصفحة على حسب ال id

export function scrollTo(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
