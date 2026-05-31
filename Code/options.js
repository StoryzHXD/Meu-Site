function navigate(url) {
  const main = document.querySelector("main");
  if (main) {
    main.classList.remove("fade-in");
    setTimeout(() => window.location.href = url, 300);
  } else {
    window.location.href = url;
  }
}

function toggleAudio() {
  const audio = document.getElementById("bgAudio");
  const audioBtn = document.getElementById("audioToggle");
  
  if (audio.paused) {
    audio.muted = false;
    audio.play();
    audioBtn.classList.add("playing");
    audioBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    localStorage.setItem("audioPlaying", "true");
  } else {
    audio.pause();
    audioBtn.classList.remove("playing");
    audioBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    localStorage.setItem("audioPlaying", "false");
  }
}

function autoplayAudio() {
  const audio = document.getElementById("bgAudio");
  const audioBtn = document.getElementById("audioToggle");
  
  if (audio) {
    // Remover muted para deixar o áudio audível
    audio.muted = false;
    
    audio.play().then(() => {
      audioBtn.classList.add("playing");
      audioBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
      localStorage.setItem("audioPlaying", "true");
    }).catch(() => {
      // Autoplay foi bloqueado, aguardar interação do usuário
      console.log("Autoplay bloqueado. Clique em qualquer lugar para ativar a música...");
      document.addEventListener("click", () => {
        if (audio.paused) {
          audio.muted = false;
          audio.play();
          audioBtn.classList.add("playing");
          audioBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
          localStorage.setItem("audioPlaying", "true");
        }
      }, { once: true });
    });
  }
}

window.onload = () => {
  const main = document.querySelector("main");
  const mainContent = document.querySelector(".main-content");
  const projectsContent = document.querySelector(".projects-content");
  
  if (main) main.classList.add("fade-in");
  if (mainContent) mainContent.classList.add("fade-in");
  if (projectsContent) projectsContent.classList.add("fade-in");

  // Inicializar áudio - comçar a tocar automaticamente
  setTimeout(() => autoplayAudio(), 100);
};