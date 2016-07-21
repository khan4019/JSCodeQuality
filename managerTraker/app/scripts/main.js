var views = document.getElementsByClassName('view');
for (var i = 0; i < views.length; i++) {
  views[i].addEventListener('click', function() {
  	window.location.href = i +'.html';
 });
}
