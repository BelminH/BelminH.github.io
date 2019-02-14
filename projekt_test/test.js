function repeatOften() {
  $("<div/>").appendTo("body");
  requestAnimationFrame(repeatOften);
}
requestAnimationFrame(repeatOften);
