var figureHTML = "";
var projects;
var categories = new Set();
var categoryMenuHTML = "<input id='category0' type='button' value='All'>";

window.onload =  async function() {
    projects = await getProjects();

    projects.forEach(project => {
        figureHTML += "<figure><img src=" + project.imageUrl + " alt='" + project.title + "'><figcaption>"+ project.title + "</figcaption></figure>";
    })

    document.getElementById("gallery").innerHTML = figureHTML;

    categories = await getCategories();
    let buttonName = [];
    buttonName[0] = "category0";

    categories.forEach(category => {
        categoryMenuHTML += "<input id='category" + category.id + "' type='button' value='" + category.name + "'>";

        buttonName[category.id] = "category"+category.id;
    })

    document.getElementById("categoryMenu").innerHTML = categoryMenuHTML;
    let catProjects = new Set();

    buttonName.forEach(function (item, index) {
        let button = item;
        let element = document.getElementById(button);
        
        element.addEventListener("click", (e) => {
            console.log(projects);
            catProjects = projects.filter(project => project.category.id === index);
            console.log(catProjects);
            let catFigureHTML = "";
            catProjects.forEach(project => {
                catFigureHTML += "<figure><img src=" + project.imageUrl + " alt='" + project.title + "'><figcaption>"+ project.title + "</figcaption></figure>";
            })
            document.getElementById("gallery").innerHTML = catFigureHTML;
            console.log(catFigureHTML)
        });
    });
};

async function getProjects() {
    try {
        let response = await fetch('http://localhost:5678/api/works');
        return await response.json();
      } catch (error) {
        console.error(error);
      }
}

async function getCategories() {
    try {
        let response = await fetch('http://localhost:5678/api/categories');
        return await response.json();
    } catch (error) {
        console.error(error);
    }

}

function categoryFunction(categoryID) {
  console.log(categoryID);
}

// function filterProjectByCategory(projects, categoryId) {
//     if(categoryId === 0) return projects;
//     return projects.filter(project => project.category.id === categoryId);
// }