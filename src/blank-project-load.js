// Factory function to create blank project array list
export const blankProjectLoad = () => {
    let projectsArray = [];
    let projectTitle = "Default Project";
    projectsArray.push({projectTitle});
    return {projectsArray, projectTitle};
}