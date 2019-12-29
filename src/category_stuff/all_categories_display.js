import {magicDOMTools} from "../magicDOMTools"
import {categoriesHolder} from "./categories_holder"
import {createCategory} from "./button_functions"
import {specificCategoryLink} from "./button_functions"
import {deleteCat} from "./button_functions"

const categoriesDisplay = () => {
  const catDiv = magicDOMTools.createAddtextAddclasses('div', "", 'catDiv');

  /* Makes create button on top */
  const createbtn = magicDOMTools.createAddtextAddclasses("button", "Create", "createBtn");
  magicDOMTools.setEventListenerClick(createbtn , createCategory);
  magicDOMTools.appendChildren(catDiv, createbtn);

  /*Print out categories of todo's*/
  for (var i = 0; i < categoriesHolder.container.length; i++) {
    const categoryLink = magicDOMTools.createAddtextAddclasses('button', categoriesHolder.container[i].title,
      'categoryLink');
    categoryLink.addEventListener("click", specificCategoryLink.bind(event, categoriesHolder.container[i]));
    const editBtn = magicDOMTools.createAddtextAddclasses("button", "Edit", "catBtn");
    const deleteBtn = magicDOMTools.createAddtextAddclasses("button", "Delete", "catBtn");
    deleteBtn.addEventListener("click", deleteCat.bind(event, categoriesHolder.container[i]));
    magicDOMTools.appendChildren(catDiv, categoryLink, editBtn, deleteBtn);
  }

  magicDOMTools.appendToDisplayContent(catDiv);
}

export{categoriesDisplay}
