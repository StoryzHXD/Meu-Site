function redirectToAboutMe() {
  const loadingScreen = document.getElementById("loadingScreen");
  
  if (loadingScreen) {
    loadingScreen.classList.add("hidden");
    
    // Redirecionar para AboutMe após a animação de fade-out
    setTimeout(() => {
      window.location.href = "Pages/AboutMe.html";
    }, 600);
  }
}

window.onload = () => {
  // Aguardar 3 segundos (simulando carregamento) antes de redirecionar
  setTimeout(() => {
    redirectToAboutMe();
  }, 3000);
};