const today = new Date();
// querySelector allows you to get things in the DOM using CSS selectors
document.querySelector("footer div span").textContent = today.getFullYear();

const lastmodified = new Date(document.lastModified);
document.getElementById("lastupdatedate").textContent = `${lastmodified.getMonth()+1}/${lastmodified.getDate()}/${lastmodified.getFullYear()}`;