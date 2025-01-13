var figureHTML = "";
var categoryMenuHTML = "<input type='button' value='All'>";

window.onload = function() {
    getData();
    getCategories();
};

async function getData() {
    try {
      let response = await fetch('http://localhost:5678/api/works');
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

async function getCategories() {
    try {
      let response = await fetch('http://localhost:5678/api/categories');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      let categories = new Set();
      categories = await response.json();

      categories.forEach(row => {
        categoryMenuHTML += "<input type='button' value='" + row.name + "'>";
      })
      document.getElementById("categoryMenu").innerHTML = categoryMenuHTML;
    } catch (error) {
        console.error(error);
    }
}
