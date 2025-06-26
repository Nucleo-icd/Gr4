let isSubmitting = false;

document.getElementById('login-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  if (isSubmitting) return;
  isSubmitting = true;

  const username = document.getElementById('username').value.trim().toLowerCase();
  const password = document.getElementById('password').value.trim().toLowerCase();

  if (username === 'ambulatorio' && password === 'ambulatorio') {
    const powerBIUrl = "https://app.powerbi.com/view?r=eyJrIjoiODkyYzE1YjktYTU3My00YWZmLTg3N2ItNzU2NzI1OGJlYTNhIiwidCI6IjNhNzhiMGNkLTdjOGUtNDkyOS08M2Q1LTE5MGE2Y2MwMTM2NSJ9";

    try {
      await fetch("https://script.google.com/macros/s/AKfycbwVOSZnHUeKfRUyxy66QGegekodo8H4Hsf1efk2awz2w7ZCCjTmT8hSww2HEJ4cJOMZ6Q/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({ setor: "Geriatria" })
      });
    } catch (error) {
      console.error("Erro na comunicação com a API:", error);
    } finally {
      window.location.replace(encodeURI(powerBIUrl));
    }

  } else {
    document.getElementById('error-message').style.display = "block";
    isSubmitting = false;
  }
});
