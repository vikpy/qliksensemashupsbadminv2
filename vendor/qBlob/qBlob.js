// JavaScript
define(["./vendor/html2canvas.js", "./vendor/Blob.js", "./vendor/canvas-toBlob.js", "./vendor/FileSaver.js"], function() {
  
  var qBlob = {};
  qBlob.saveToFile = function(obj, filename) {
	html2canvas(document.getElementById(obj), {
	  onrendered: function(canvas) {
		canvas.toBlob(function(blob) {
		  saveAs(blob, filename);
		});
	  }
	});
  };
  
  return qBlob;
});