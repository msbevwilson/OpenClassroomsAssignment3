var figureHTML = "";
window.onload = function() {
    getData();
    
};

async function getData() {
    try {
      const response = await fetch('http://localhost:5678/api/works');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

      data.forEach(row => {
        figureHTML += "<figure><img src=" + row.imageUrl + " alt='" + row.title + "'><figcaption>"+ row.title + "</figcaption></figure>";
      })
      document.getElementById("gallery").innerHTML = figureHTML;
    } catch (error) {
      console.error(error);
    }
  }
 