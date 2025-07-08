const commonTypos = {
    "gamil.com": "gmail.com",
    "gamai.com": "gmail.com",
    "gnail.com": "gmail.com",
    "hotnail.com": "hotmail.com",
    "yaho.com": "yahoo.com"
  };
  
  function correctEmail(email) {
    const parts = email.split("@");
    if (parts.length !== 2) return email;
  
    const [username, domain] = parts;
    const correctedDomain = commonTypos[domain.toLowerCase()];
    return correctedDomain ? `${username}@${correctedDomain}` : email;
  }
  
  document.addEventListener("input", function (e) {
    if (e.target.type === "email" || e.target.name.toLowerCase().includes("email")) {
      e.target.addEventListener("blur", function () {
        const corrected = correctEmail(e.target.value);
        if (corrected !== e.target.value) {
          alert(`Did you mean: ${corrected}? Fixing it for you.`);
          e.target.value = corrected;
        }
      });
    }
  });
  