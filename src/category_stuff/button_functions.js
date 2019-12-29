import {getNewCategoryName} from "../user_info_getter"
import {todoCategoryFactory} from "./category"
import {categoriesHolder} from "./categories_holder"
import {displayAllCategories} from "../displayer"
import {displaySpecificCategory} from "../displayer"

const specificCategoryLink = (category) => {
  displaySpecificCategory(category);
}

const createCategory = () => {
  const newCat = todoCategoryFactory(getNewCategoryName());
  categoriesHolder.addToContainer(newCat);
  displayAllCategories();
}

export {createCategory,
        specificCategoryLink}
