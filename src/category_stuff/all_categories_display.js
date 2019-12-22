import {magicDOMTools} from "../magicDOMTools"
import {categoriesHolder} from "./categories_holder"
import {createCategory} from "./button_functions"

const categoriesDisplay = () => {
  magicDOMTools.clearDisplay();

  const catDiv = magicDOMTools.createAddtextAddclasses('div', "", 'catDiv');

  /*Print out categories of todo's*/
  for (var i = 0; i < categoriesHolder.container.length; i++) {
    const categoryLink = magicDOMTools.createAddtextAddclasses('button', categoriesHolder.container[i].title,
      'categoryLink');
    /*categoryLink.addEventListener("click", );*/
    catDiv.appendChild(categoryLink);
  }

  /*Prints out buttons */
  const addbtn = magicDOMTools.createAddtextAddclasses("button", "Add", "normalBtn", "catBtn");
  magicDOMTools.setEventListenerClick(addbtn , createCategory);
  const editbtn = magicDOMTools.createAddtextAddclasses("button", "Edit", "normalBtn", "catBtn");
  const deletebtn = magicDOMTools.createAddtextAddclasses("button", "Delete", "normalBtn", "catBtn");

  magicDOMTools.appendChildren(catDiv, addbtn, editbtn, deletebtn);
  magicDOMTools.appendToBody(catDiv);
}

export{categoriesDisplay}
