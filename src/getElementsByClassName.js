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

  if (element.classList && element.classList.contains(className)) {
    results.push(element);
  }

  if (element.hasChildNodes()) {
    for (var i = 0; i < element.childNodes.length; i++) {
      var recursiveResults = getElementsByClassName(className, element.childNodes[i]);
      if (recursiveResults.length !== 0) {
        results = results.concat(recursiveResults);
      }
    }
  }
  return results;
};
