function foo() {
  var bar;
  quux = 6;

  function zip() {
    var quux = 7;
    bar = true;
  }

  return zip;
}
