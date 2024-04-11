const projects=[{category:"software engineering",title:"CrossAI - Open Source Library",description:"CrossAI - Open Source Library for developing ML pipelines for Time-Series Analysis including Audio, Speech and Human Activity Recognition.",link:"http://example.com/project1",image:"./assets/images/CrossAILogo.webp"},{category:"web development",title:"Web project for a CEID mandatory class",description:"This is a web development project for a CEID mandatory class.",link:"http://example.com/project1",image:"./assets/images/project-1.webp"},{category:"applications",title:"Web project for a CEID mandatory class",description:"This is a web development project for a CEID mandatory class.",link:"http://example.com/project1",image:"./assets/images/project-2.webp"},];function generateProjectHTML(e){return`
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