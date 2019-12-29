import {displayCategory} from "./category_stuff/category_display"
import {todoCategoryFactory} from "./category_stuff/category"
import {todoFactory} from "./todo_stuff/todo"
import {displayAllCategories} from "./displayer"
import {categoriesHolder} from "./category_stuff/categories_holder"

const newCat = todoCategoryFactory("long term");
const newTodo = todoFactory("gym", "keep it up", "never", "yes");
newCat.add(newTodo);
categoriesHolder.addToContainer(newCat);

displayAllCategories();
