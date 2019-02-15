class DOMNodeCollection {
  constructor(arr) {
    this.elements = arr;
  }
  
  html(str) {
    if (typeof str === "string") {
      this.elements.forEach((el) => {
        el.innerHTML = str;
      });
    } else {
      return this.elements[0].innerHTML;
    }
  }
  empty() {
    this.html("");
  }

  append(arg) {
    if (arg instanceof DOMNodeCollection) {
      this.elements.forEach(el => {
        arg.elements.forEach(el2 => {
          el.innerHTML += el2.outerHTML;
        })
      });
    } else if((typeof arg) === 'string') {
      this.elements.forEach(el => {
        el.innerHTML += arg;
      });
    } else if(arg instanceof HTMLElement) {
      this.elements.forEach(el =>{
        el.innerHTML += arg.outerHTML;
      });
    }
  }

  attr(arg1,arg2) {
    if (arg2) {
      this.elements.forEach((el) => {
        el.setAttribute(arg1,arg2);
      });
    } else {
      return this.elements[0].getAttribute(arg1);
    }
  }

  addClass(arg1) {
    if (arg1) {
      this.elements.forEach((el) => {
        el.className = arg1;
      });
    } else {
      return this.elements[0].className;
    }
  }

  removeClass() {
    this.addClass("")
  }

  children() {
    let res = [];
    this.elements.forEach((el) => {
      res = res.concat(el.children);
    });

    return new DOMNodeCollection(res);
  }

  parent() {
    let res = [];
    this.elements.forEach((el) => {
      res = res.concat(el.parentNode);
    });

    return new DOMNodeCollection(res);
  }

  find(arg){
    let res = []
    this.elements.forEach(el => {
      res.push(el.querySelectorAll(arg))
    });  

    return new DOMNodeCollection(arg);
  }
}


module.exports = DOMNodeCollection;