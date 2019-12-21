/* A category of todo's (such as short-term, long-term, work) */

function todoCategoryFactory(title){
  let todosInCategory = [];

  const add = (todo) => {
    todosInCategory.push(todo);
  }

  return{title,
    todosInCategory,
    add}
}

export{todoCategoryFactory};
