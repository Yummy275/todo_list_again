import {magicDOMTools} from "../magicDOMTools"
import {categoriesHolder} from "./categories_holder"
import {createCategory} from "./button_functions"
import {specificCategoryLink} from "./button_functions"
import {deleteCat} from "./button_functions"

const categoriesDisplay = () => {
  const categoriesDisplayDiv = magicDOMTools.createAddtextAddclasses('div', "", 'allCatsDiv');

  /* Makes create button on top */
  const createBtn = magicDOMTools.createAddtextAddclasses("button", "Create", "createBtn");
  magicDOMTools.setEventListenerClick(createBtn , createCategory);
  magicDOMTools.appendChildren(categoriesDisplayDiv, createBtn);

  /*Print out categories of todo's*/
  for (var i = 0; i < categoriesHolder.container.length; i++) {
    const categoryDiv = magicDOMTools.createAddtextAddclasses('div', "", 'categoryDiv')

    const categoryLink = magicDOMTools.createAddtextAddclasses('button', categoriesHolder.container[i].title,
      'categoryLink');
    categoryLink.addEventListener("click", specificCategoryLink.bind(event, categoriesHolder.container[i]));

    const catEditDeleteBtnDiv = magicDOMTools.createAddtextAddclasses("div", "", "catEditDeleteBtnDiv")

    const editBtn = magicDOMTools.createAddtextAddclasses("button", "Edit", "catBtn");
    /*edit function */

    const deleteBtn = magicDOMTools.createAddtextAddclasses("button", "Delete", "catBtn");
    deleteBtn.addEventListener("click", deleteCat.bind(event, categoriesHolder.container[i]));

    magicDOMTools.appendChildren(catEditDeleteBtnDiv, editBtn, deleteBtn);

    magicDOMTools.appendChildren(categoryDiv, categoryLink, catEditDeleteBtnDiv);
    magicDOMTools.appendChildren(categoriesDisplayDiv, categoryDiv)
  }

  magicDOMTools.appendToDisplayContent(categoriesDisplayDiv);
}

export{categoriesDisplay}
