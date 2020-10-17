// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var results = [];
  var element;
  if (arguments[1] === undefined) {
    element = document.body;
  } else {
    element = arguments[1];
  }
  console.log(element);
  if (element.hasChildNodes()) {
    for (var i = 0; i < element.childNodes.length; i++) {
      getElementsByClassName(className, element.childNodes[i]);
    }
  }
  var classes = element.classList;
  if (classes !== undefined) {
    for (var i = 0; i < classes.length; i++) {
      if (classes[i] === className) {
        results.push(element);
        i = classes.length;
      }
    }
  }

  console.log(results);
  return results;
};
