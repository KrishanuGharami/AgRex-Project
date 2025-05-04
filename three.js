VANTA.FOG({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    highlightColor: 0x6dcf71,
    midtoneColor: 0xffffff,
    lowlightColor: 0x006600,
    baseColor: 0x1e3a1e,
    blurFactor: 0.5,
    speed: 1.2,
    zoom: 1.1
  });

  const loginModal = document.getElementById("login-modal");
  document.getElementById("open-login").addEventListener("click", (e) => {
    e.preventDefault();
    loginModal.classList.remove("hidden");
  });
  document.getElementById("close-btn").addEventListener("click", () => {
    loginModal.classList.add("hidden");
  });
  document.getElementById("login-btn").addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log(`Username: ${username}, Password: ${password}`);
    loginModal.classList.add("hidden");
  });