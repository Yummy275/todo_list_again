/*Currently holds all the categories in a array,the categories themselves will contain the todos */

const categoriesHolder = (() => {
  let container = [];

  const addToContainer = (category) => {
    container.push(category);
  }

  const deleteFromContainer = (category) => {
    container.splice(container.indexOf(category), 1);
  }

  return{container,
        addToContainer,
        deleteFromContainer}
})();

export {categoriesHolder}
