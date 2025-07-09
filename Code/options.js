function navigate(url) {
  const main = document.querySelector("main");
  if (main) {
    main.classList.remove("fade-in");
    setTimeout(() => window.location.href = url, 300);
  } else {
    window.location.href = url;
  }
}

window.onload = () => {
  const main = document.querySelector("main");
  if (main) main.classList.add("fade-in");
};