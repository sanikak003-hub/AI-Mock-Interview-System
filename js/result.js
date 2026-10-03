const overall = Number(localStorage.getItem("overallScore") || 0);
const answerScore = Number(localStorage.getItem("answerScore") || 0);

document.getElementById("overall").textContent = `${overall}/100`;
document.getElementById("s1").textContent = answerScore;
document.getElementById("s2").textContent = Math.round(overall * 0.9);
document.getElementById("s3").textContent = Math.round(overall * 0.85);
document.getElementById("s4").textContent = Math.round(overall * 0.8);
document.getElementById("s5").textContent = Math.round(overall * 0.82);
document.getElementById("s6").textContent = Math.round(overall * 0.78);
