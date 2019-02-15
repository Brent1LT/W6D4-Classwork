const DOMNodeCollection = require('./dom_node_collection.js');

window.$l = function(arg){
 
  if (arg instanceof HTMLElement) {
    let res = [];
    res.push(arg);
    return new DOMNodeCollection(res);
  } else if ((typeof arg) === 'string') {
    let res = new DOMNodeCollection(Array.from(document.querySelectorAll(arg)));
    return res;
  }
};

