import {categoriesDisplay} from "./category_stuff/all_categories_display"
import {displayCategory} from "./category_stuff/category_display"
import {magicDOMTools} from "./magicDOMTools"

const displayAllCategories = () => {
  magicDOMTools.clearDisplay();
  categoriesDisplay();
}

const displaySpecificCategory = (category) => {
  magicDOMTools.clearDisplay();
  displayCategory(category);
}

export {displayAllCategories,
        displaySpecificCategory}
