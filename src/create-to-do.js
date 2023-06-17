// Creating an array for ToDo if needed
let toDoArray = [];

// Factory function to create todo list
export const createToDo = (Title, Description, DueDate, Priority, Checklist) => {
    toDoArray.push({Title, Description, DueDate, Priority, Checklist});
    return {Title, Description, DueDate, Priority, Checklist};
}