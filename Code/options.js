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
    audio.play().catch(error => {
      console.log("Autoplay bloqueado pelo navegador. Clique para ativar.");
    });
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

window.onload = () => {
  const main = document.querySelector("main");
  const mainContent = document.querySelector(".main-content");
  const projectsContent = document.querySelector(".projects-content");
  
  if (main) main.classList.add("fade-in");
  if (mainContent) mainContent.classList.add("fade-in");
  if (projectsContent) projectsContent.classList.add("fade-in");

  // Inicializar áudio
  const audio = document.getElementById("bgAudio");
  const audioBtn = document.getElementById("audioToggle");
  const wasPlaying = localStorage.getItem("audioPlaying") === "true";

  if (wasPlaying && audio) {
    audio.play().catch(error => {
      console.log("Autoplay bloqueado. Clique no botão de áudio para ativar.");
    });
    audioBtn.classList.add("playing");
    audioBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
  }
};