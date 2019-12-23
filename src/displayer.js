import {categoriesDisplay} from "./category_stuff/all_categories_display"
import {magicDOMTools} from "./magicDOMTools"

const displayAllCategories = () => {
  magicDOMTools.clearDisplay();
  categoriesDisplay();
}

export {displayAllCategories}
