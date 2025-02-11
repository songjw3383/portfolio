import React from "react";

const skills = {
  "Language/Framework/Library": [
    { name: "React.js", icon: "React.svg" },
    { name: "Vue.js", icon: "VueJS-Light.svg" },
    { name: "JavaScript", icon: "JavaScript.svg" },
    { name: "TypeScript", icon: "TypeScript.svg" },
    { name: "Java", icon: "Java-Light.svg" },
    { name: "HTML5", icon: "HTML.svg" },
    { name: "CSS3", icon: "CSS.svg" },
    { name: "Bootstrap", icon: "Bootstrap.svg" },
    { name: "Tailwind CSS", icon: "TailwindCSS-Light.svg" },
    { name: "Material UI", icon: "MaterialUI-Light.svg" },
    { name: "Node.js", icon: "NodeJS-Light.svg" },
    { name: "Express.js", icon: "ExpressJS-Light.svg" },
    { name: "D3.js", icon: "D3-Light.svg" },
    { name: "GraphQL", icon: "GraphQL-Light.svg" },
  ],
  "Infra/Hosting": [
    { name: "AWS", icon: "AWS-Light.svg" },
    { name: "Azure", icon: "Azure-Light.svg" },
    { name: "Docker", icon: "Docker.svg" },
    { name: "Kubernetes", icon: "Kubernetes.svg" },
    { name: "Nginx", icon: "Nginx.svg" },
    { name: "PostgreSQL", icon: "PostgreSQL-Light.svg" },
    { name: "Jenkins", icon: "Jenkins-Light.svg" },
    { name: "Linux", icon: "Linux-Light.svg" },
  ],
  Tools: [
    { name: "Git", icon: "Git.svg" },
    { name: "GitHub", icon: "Github-Dark.svg" },
    { name: "Figma", icon: "Figma-Light.svg" },
    { name: "Postman", icon: "Postman.svg" },
    { name: "VS Code", icon: "VSCode-Light.svg" },
    { name: "Vite", icon: "Vite-Light.svg" },
  ],
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
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              {category}
            </h3>
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
    </div>
  );
}

export default Skills;
