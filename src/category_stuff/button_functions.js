import {getNewCategoryName} from "../user_info_getter"
import {todoCategoryFactory} from "./category"
import {categoriesHolder} from "./categories_holder"
import {displayAllCategories} from "../displayer"

const createCategory = () => {
  const newCat = todoCategoryFactory(getNewCategoryName());
  categoriesHolder.addToContainer(newCat);
  displayAllCategories();
}

export {createCategory}
