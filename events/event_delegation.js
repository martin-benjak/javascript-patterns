// Event delegation is a smart use of bubbling to help simplify handling events
// event.target - a reference to the object that dispatched the event.
// event.target.matches('a') - The Element.matches() method returns true if the element would be selected by the specified selector string; otherwise, returns false.
// Example - There is a series of child elements and those child elements will have a parent, for example a div with a series of anchor tags inside of the div. You want to listen for a click event on the anchor tags and then return the id of the clicked element.
document.getElementById('foo').addEventListener('click', function(event) {
  	if (event.target && event.target.matches('a')) {
  		alert('Anchor ID: ' + event.target.id);
	}
});