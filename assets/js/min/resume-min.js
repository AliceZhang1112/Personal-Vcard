const timelines=[{icon:"book-outline",title:"Education",items:[{title:"KU Leuven, Belgium",period:"2024 — 2025",description:"Master of Artificial Intelligence"},{title:"Computer Engineering & Informatics Department, University of Patras, Greece",period:"2018-2023",description:"Master of Science in Computer Engineering"},{title:"2nd Lyceum of Gerakas, Greece",period:"2015 — 2018",description:"High School Diploma"}]},{icon:"briefcase-outline",title:"Experience",items:[{title:"Research Engineer - IoTLab, University of Patras",period:"2022 — 2023",description:"Worked on a European funded project, in which I was responsible for the selection and deployment of smart wearables to monitor the health of 12-year old children in the context of a school-based intervention in 5 countries. Also worked on a private funded project by Pfizer, in which I codeveloped AI models for the recognition of cough as well as the underlying respiratory disease and implemented them in an Android application."}]},{icon:"flask-outline",title:"Lab Work",items:[{title:"Assistant - Electronics Lab, University of Patras",period:"2021 — 2022",description:"Supported undergraduate students in their lab work, in which they had to implement electronic circuits. Also assessed their work and provided feedback."}]}],skills=[{title:"Languages",description:"Greek (Mother Tongue), English (Michigan C2), French (Delf B2)"},{title:"Coding",description:"Python, PHP, Java, Kotlin, C, SQL, XML, Latex"},{title:"Databases",description:"MySQL, MongoDB"},{title:"Web Dev",description:"HTML, CSS, JavaScript, Apache Web Server, Node.js"},{title:"OSes",description:"macOS, Windows, Linux"},{title:"Tools",description:"Jira, Confluence, Git, GitHub, Docker, TensorFlow, TFLite, Pandas, NumPy, Microsoft & Google Productivity suite, Slack"},{title:"Miscellaneous",description:"Academic research"}];function generateTimelineHTML(e){return`
    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="${e.icon}"></ion-icon>
        </div>
        <h3 class="h3">${e.title}</h3>
      </div>
      <ol class="timeline-list">
        ${e.items.map(e=>`
          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">${e.title}</h4>
            <span>${e.period}</span>
            <p class="timeline-text">${e.description}</p>
          </li>
        `).join("")}
      </ol>
    </section>
  `}function generateSkillHTML(e){return`
    <li class="skills-item">
      <div class="title-wrapper">
        <h4 class="h4">${e.title}</h4>
      </div>
      <h5 class="h5">${e.description}</h5>
    </li>
  `}document.querySelector(".resume").innerHTML=`
  <header>
    <h2 class="h2 article-title">Resume</h2>
  </header>
  ${timelines.map(generateTimelineHTML).join("")}
  <section class="skill">
    <h3 class="h3 skills-title">My skills</h3>
    <ul class="skills-list content-card">
      ${skills.map(generateSkillHTML).join("")}
    </ul>
  </section>
`;