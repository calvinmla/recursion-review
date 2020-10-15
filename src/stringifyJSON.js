// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  // array / object
  if (Array.isArray(obj)) {

    if (obj.length === 0) {
      return '[]';
    }
    var results = '[';
    for (var i = 0; i < obj.length; i++) {
      var result = stringifyJSON(obj[i]);
      if (i !== obj.length - 1) {
        results += result + ',';
      } else {
        results += result;
      }
    }
    results += ']';
    return results;
  } else if (typeof obj === 'object' && obj !== null && obj !== undefined) {
    if (Object.keys(obj).length === 0) {
      return '{}';
    }
    var results = '{';
    for (var keys in obj) {
      var keyString = stringifyJSON(keys);
      var valueString = stringifyJSON(obj[keys]);
      if (Object.keys(obj)[Object.keys(obj).length - 1] !== keys) {
        results += keyString + ':' + valueString + ',';
      } else {
        results += keyString + ':' + valueString;
      }
    }
    results += '}';
    return results;
  }

  // string
  if (typeof obj === 'string') {
    console.log('"' + obj + '"');
    return '"' + obj + '"';
  } else {
    return obj + '';
  }


};
