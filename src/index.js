import {display} from "./category_stuff/category_display.js"
import {todoCategoryFactory} from "./category_stuff/category.js"
import {todoFactory} from "./todo_stuff/todo.js"

const newCat = todoCategoryFactory("long term");
const newTodo = todoFactory("gym", "keep it up", "never", "yes");

newCat.add(newTodo);
displayCategory(newCat);
