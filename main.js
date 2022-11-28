var projects = [
{
  title: "Photo App",
  description: "An app that allows users to like, follow and comment posts. A replication of Instagram.",
  cover: "images/projects/photoapp/photo-app-icon.png"
},

{
  title: "Maze Dash",
  description: "A research project and game designed increase the accessibility of game controls.",
  cover: "images/projects/maze-demo.png"
},


];

function createProjectshelf(projects, shelfSelector){
  let shelf= document.querySelector(shelfSelector);
  if (shelf){
    if(projects instanceof Array){
      for (let project of projects){

        let container = document.createElement("div");
        html = `<a href="${project.title}.html">
        <h1 class="title">${project.title}</h1>
        <img class="cover" src="${project.cover}" alt="Image of ${project.title}">
        <div class="project-info">
          <span class="publisher">${project.description}</span>
        </div>
        </a>
        `

        container.className="project";
        container.innerHTML = html;
        container.tabIndex = projects.indexOf(project);
        shelf.append(container);
      }

    }

  }

}
