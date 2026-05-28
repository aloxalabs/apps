// script.js

console.log("WiFiSeek APK Page Loaded");

// tiny animation because static pages without motion
// make humans uncomfortable for some reason

const btn = document.querySelector(".download-btn");

btn.addEventListener("click", () => {
  btn.innerText = "Downloading...";
  
  setTimeout(() => {
    btn.innerText = "Download APK";
  }, 3000);
});
