/*Currently holds all the categories in a array,the categories themselves will contain the todos */

const categoriesHolder = (() => {
  let container = [];

  const addToContainer = (category) =>{
    container.push(category);
  }

  return{container,
    addToContainer}
})();

export {categoriesHolder}
