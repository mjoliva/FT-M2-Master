var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)){
    resultSet.push(startEl)
  }

  for(let i=0; i < startEl.children.length; i++){
    let elements = traverseDomAndCollectElements(matchFunc, startEl.children[i])
    resultSet = resultSet.concat(elements)
  }

  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí

  /*if(selector[0] === ".") return "class";
  else if(selector[0] === "#") return "id";
  else if(selector.split(".").length === 2) return "tag.class";
  else return "tag";*/
  
  let result = selector[0] === "." ? "class" : selector[0] === "#" ? "id" : selector.split(".").length === 2 ? "tag.class" : "tag";
  return result
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
   
    matchFunction = (domElement) => `#${domElement.id}` === selector
   
  } else if (selectorType === "class") {
  
    matchFunction = (domElement) => domElement.classList.contains(selector.substring(1))
  
  } else if (selectorType === "tag.class") {

    matchFunction = (domElement) => matchFunctionMaker(selector.split(".")[0])(domElement) && matchFunctionMaker(`.${selector.split(".")[1]}`)
    (domElement)
  } else if (selectorType === "tag") {
    
    matchFunction = (domElement) => domElement.tagName.toLowerCase() === selector.toLowerCase()
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
