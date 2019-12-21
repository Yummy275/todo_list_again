/* DOM manipulation stuff happens */

const magicDOMTools = (() => {
    const createElement = (type) => {
      return document.createElement(type);
    };

    const addClassName = (name , target) => {
      target.classList.add(name);
    }

    const changeTextContent = (textContent , target) => {
      target.textContent = textContent;
    }

    const setEventListenerClick = (target, func) => {
      target.addEventListener("click", func);
    }

    const createAddtextAddclasses = (type, textContent, ...classNames) => {
      const newElement = document.createElement(type);
      newElement.textContent = textContent;
      for (var cls of classNames){
        newElement.classList.add(cls);
      }
      return newElement;
    }

    const appendChildren = (target , ...names) => {
      for (var name of names){
        target.appendChild(name);
      }
    }

    const appendToBody = (...targets) => {
      for (var target of targets){
        document.body.appendChild(target);
      }
    }

    const clearBody = () => {
      document.body.innerHTML = "";
    }

    return {createElement,
      addClassName,
      changeTextContent,
      setEventListenerClick,
      createAddtextAddclasses,
      appendChildren,
      appendToBody,
      clearBody}
})();

export {magicDOMTools}
