/* Describes the display of the page which shows todos of a specific category */

import {magicDOMTools} from '../magicDOMTools'

const displayCategory = (category) => {
  const table = magicDOMTools.createAddtextAddclasses('table', "", 'catTable');
  const headerRow = magicDOMTools.createElement('tr');

  /*header of table*/
  magicDOMTools.appendChildren(headerRow,
    magicDOMTools.createAddtextAddclasses('th', "Title", 'theader'),
    magicDOMTools.createAddtextAddclasses('th', "End Date", 'theader'),
    magicDOMTools.createAddtextAddclasses('th', "Priority", 'theader'),
    magicDOMTools.createAddtextAddclasses('th', "Complete", 'theader'));

  magicDOMTools.appendChildren(table, headerRow);

  /*row for each todo in the category*/
  for(var i = 0; i < category.todosInCategory.length; i++){
    const newRow = magicDOMTools.createElement('tr')
    magicDOMTools.appendChildren(newRow,
      magicDOMTools.createAddtextAddclasses('td', category.todosInCategory[i].title, 'tbody'),
      magicDOMTools.createAddtextAddclasses('td', category.todosInCategory[i].endDate, 'tbody'),
      magicDOMTools.createAddtextAddclasses('td', category.todosInCategory[i].priority, 'tbody'));

    magicDOMTools.appendChildren(table, newRow);
  }

  /*Prints out buttons */
  const addbtn = magicDOMTools.createAddtextAddclasses("button", "Add", "normalBtn", "catBtn");
  const editbtn = magicDOMTools.createAddtextAddclasses("button", "Edit", "normalBtn", "catBtn");
  const deletebtn = magicDOMTools.createAddtextAddclasses("button", "Delete", "normalBtn", "catBtn");

  magicDOMTools.appendToBody(table, addbtn, editbtn, deletebtn);
}

export{displayCategory}
