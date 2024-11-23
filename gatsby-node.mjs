import path from 'path';
export const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  function dirNameToTitle(str) {
    let splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    // Directly return the joined string
    return splitStr.join(' '); 
  }

  const result = await graphql(`
    query allDirectory {
      allDirectory(filter: {relativeDirectory:{ne:".."}}) {
        nodes {
          name
          relativeDirectory
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }
  
  const map = new Map();

  result.data.allDirectory.nodes.forEach((d) => {
    let pagePath = d.name;
    let title = dirNameToTitle(d.name.replaceAll("-"," "));
    if(d.relativeDirectory.length > 0)
    {
      if(!map.has(d.relativeDirectory))
      {
        map.set(d.relativeDirectory)
        createPage({
          path: d.relativeDirectory,
          component: path.resolve(`./src/templates/category-template.tsx`),
          context: {
            titlePage:d.relativeDirectory,
            folderPrefix: `/^${d.relativeDirectory}\\//`
          },
        });
      }
      pagePath = d.relativeDirectory +"/"+pagePath;
    }
    //khởi tạo page con
      createPage({
        path:pagePath,
        component: path.resolve(`./src/templates/category-content-template.tsx`),
        context: {
          title,
          directory: pagePath
        },
      });
    
  });
};

