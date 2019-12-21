/* Describes what a todo is (ex. working out, mowing the lawn) */

function todoFactory(title, description, endDate, priority) {
  return {title,
     description,
     endDate,
     priority};
}
export {todoFactory}
