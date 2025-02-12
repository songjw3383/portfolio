import React from "react";

const skills = {
  "Language/Framework/Library": {
    익숙해요: [
      { name: "React.js", icon: "React.svg" },
      { name: "Vue.js", icon: "VueJS-Light.svg" },
      { name: "JavaScript", icon: "JavaScript.svg" },
      { name: "Node.js", icon: "NodeJS-Light.svg" },
      { name: "Express.js", icon: "ExpressJS-Light.svg" },
      { name: "HTML5", icon: "HTML.svg" },
      { name: "CSS3", icon: "CSS.svg" },
      { name: "Bootstrap", icon: "Bootstrap.svg" },
      { name: "Styled Components", icon: "StyledComponents.svg" },
      { name: "D3.js", icon: "D3-Light.svg" },
    ],
    경험해봤어요: [
      { name: "TypeScript", icon: "TypeScript.svg" },
      { name: "Redux", icon: "Redux.svg" },
      { name: "Tailwind CSS", icon: "TailwindCSS-Light.svg" },
      { name: "Material UI", icon: "MaterialUI-Light.svg" },
      { name: "GraphQL", icon: "GraphQL-Light.svg" },
      { name: "Java", icon: "Java-Light.svg" },
      { name: "Spring", icon: "Spring-Light.svg" },
    ],
  },
  "Infra/Hosting": {
    익숙해요: [
      { name: "AWS", icon: "AWS-Light.svg" },
      { name: "Docker", icon: "Docker.svg" },
      { name: "Kubernetes", icon: "Kubernetes.svg" },
      { name: "Linux", icon: "Linux-Light.svg" },
      { name: "Nginx", icon: "Nginx.svg" },
      { name: "Azure", icon: "Azure-Light.svg" },
    ],
    경험해봤어요: [
      { name: "PostgreSQL", icon: "PostgreSQL-Light.svg" },
      { name: "Sqlite", icon: "Sqlite-Light.svg" },
      { name: "Jenkins", icon: "Jenkins-Light.svg" },
    ],
  },
  Tools: {
    익숙해요: [
      { name: "Git", icon: "Git.svg" },
      { name: "GitHub", icon: "Github-Dark.svg" },
      { name: "VS Code", icon: "VSCode-Light.svg" },
      { name: "Figma", icon: "Figma-Light.svg" },
      { name: "Postman", icon: "Postman.svg" },
      { name: "Vite", icon: "Vite-Light.svg" },
      { name: "Webpack", icon: "Webpack-Light.svg" },
    ],
    경험해봤어요: [],
  },
};

function Skills() {
  return (
    <div className="h-full w-full overflow-hidden flex flex-col justify-center p-8">
      <div className="text-start mb-6">
        <span className="block text-2xl font-bold text-gray-800 mb-2">
          Skills Ability
        </span>
      </div>
      <div className="space-y-6">
        {Object.entries(skills).map(([category, levels]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              {category}
            </h3>
            {Object.entries(levels).map(([level, items]) => (
              <div key={level} className="mb-4">
                <h4 className="text-sm font-medium text-gray-600 mb-2">
                  {level}
                </h4>
                <div className="flex gap-4 flex-wrap pb-2">
                  {items.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 bg-gray-100 rounded-lg p-3 min-w-[150px] shadow-md"
                    >
                      <img
                        src={`/icons/${skill.icon}`}
                        alt={skill.name}
                        className="w-6 h-6"
                      />
                      <span className="text-sm font-medium text-gray-800">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
