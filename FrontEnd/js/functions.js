var figureHTML = "";
var categoryMenuHTML = "<input id='category0' type='button' value='All'>";

window.onload = function() {
    getData(0);
    getCategories();
};

async function getData(catID) {
    try {
      let response = await fetch('http://localhost:5678/api/works');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const projects = await response.json();

      console.table(projects);

      //projects.filter(project => project.category.id === categoryId);

      projects.forEach(row => {
        //console.log("categoryId:",row.categoryId);
        figureHTML += "<figure><img src=" + row.imageUrl + " alt='" + row.title + "'><figcaption>"+ row.title + "</figcaption></figure>";
      })
      document.getElementById("gallery").innerHTML = figureHTML;
    } catch (error) {
        console.error(error);
    }
}

async function getCategories() {
    try {
        let buttonName = [];
        buttonName[0] = "category0";
      let response = await fetch('http://localhost:5678/api/categories');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      let categories = new Set();
      categories = await response.json();

      categories.forEach(row => {
        categoryMenuHTML += "<input id='category" + row.id + "' type='button' value='" + row.name + "'>";
        buttonName[row.id] = "category"+row.id;
      })
      document.getElementById("categoryMenu").innerHTML = categoryMenuHTML;
      //console.log("buttonName:",buttonName);
      buttonName.forEach(function (item, index) {
        let button = item;
        let element = document.getElementById(button);
        //element.addEventListener("click", categoryFunction(index));
        element.addEventListener("click", (e) => {
            getData(index);
        });
      });

    } catch (error) {
        console.error(error);
    }
}


function categoryFunction(categoryID) {
  // Your code here
  alert(categoryID);
}

// function filterProjectByCategory(projects, categoryId) {
//     if(categoryId === 0) return projects;
//     return projects.filter(project => project.category.id === categoryId);
// }