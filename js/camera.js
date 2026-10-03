let cameraStream = null;

async function startCamera() {
  try {
    cameraStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    });

    document.getElementById("camera").srcObject = cameraStream;
    document.getElementById("cameraStatus").textContent =
      "● Camera + Microphone ON";
  } catch (error) {
    document.getElementById("cameraStatus").textContent =
      "Camera/Microphone permission required.";
    console.error(error);
  }
}

function stopCamera() {
  if (cameraStream) {
    cameraStream.getTracks().forEach(track => track.stop());
    cameraStream = null;
  }
}

startCamera();
