 const content = document
     .getElementById("Quote");
 const author = document
     .getElementById("author");

 let url = "https://api.quotable.io/random";
 async function getdata() {
     const response =
         await fetch(url);
     const data =
         await response.json();
     let Quote = data["content"];
     let writer = data["author"];
     content.textContent =
         '" ' + Quote + ' "';
     author.textContent = writer;
 }

 getdata()