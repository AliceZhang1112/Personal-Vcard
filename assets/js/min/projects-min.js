const projects=[{category:"Software Engineering",title:"CrossAI - Open Source Library",description:"CrossAI - Open Source Library for developing ML pipelines for Time-Series Analysis including Audio, Speech and Human Activity Recognition.",link:"http://example.com/project1",image:"./assets/images/CrossAILogo.webp"},{category:"Web Development",title:"Covid-19 tracing web app",description:"Created for a mandatory CEID course the web app consists of both user and admin portals. The user portal allows users to register and check in to locations. The admin portal allows admins to view user check-ins and locations. The app was created using HTML, CSS, JavaScript, PHP, MySQL and MongoDB.",link:"",image:"./assets/images/CovidWebAppProject.webp"},];function generateProjectHTML(e){return`
      <li class="project-item active" data-filter-item data-category="${e.category}"
        data-title="${e.title}"
        data-description="${e.description}"
        data-link="${e.link}" data-image="${e.image}">
        <a href="#">
          <figure class="project-img">
            <div class="project-item-icon-box">
              <ion-icon name="eye-outline"></ion-icon>
            </div>
            <img src="${e.image}" alt="${e.title}" loading="lazy">
          </figure>
          <h3 class="project-title">${e.title}</h3>
          <p class="project-category">${e.category}</p>
        </a>
      </li>
    `}document.querySelector(".project-list").innerHTML=projects.map(generateProjectHTML).join("");