var outerEl = document.body,
	insideEl = document.getElementById('external-link');


// Both console logs will be displayed
outerEl.addEventListener('click', function() {
	console.log('outerEl click was fired');
});

insideEl.addEventListener('click', function(e) {
	console.log('insideEl click was fired');
	e.preventDefault();
});


// Only insideEl will triggered console log
outerEl.addEventListener('click', function() {
	console.log('outerEl click was fired');
});
 
insideEl.addEventListener('click', function(e) {
	console.log('insideEl click was fired');
	e.preventDefault();
	e.stopPropagation();
});


// Both console logs will be displayed
outerEl.addEventListener('click', function() {
	console.log('outerEl click was fired');
});

insideEl.addEventListener('click', function(e) {
	console.log('insideEl click was fired');
	e.returnValue = false; 
});

// prevent default behaviour of browser was not stoppped (This works in jQuery)
outerEl.addEventListener('click', function() {
	console.log('outerEl click was fired');
});

insideEl.addEventListener('click', function(e) {
	console.log('insideEl click was fired');
	return false; 
});