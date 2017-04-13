var async = true,
	xhr = new XMLHttpRequest(),
	data = 'https://www.cnb.cz/cs/financni_trhy/devizovy_trh/kurzy_devizoveho_trhu/denni_kurz.txt?date=27.03.2017&t=' + Math.random();

xhr.open('get', data, async);
xhr.send();
// Request is sent and asynchronously executed. Related event (load or error) is added in the queue as soon as asynchronous work is done.
// Main JS thread is not able to receive event because of "run to completion" rule.

// create a three second delay (don't do this in real life)
var timestamp = Date.now() + 3000;
while (Date.now() < timestamp) {  }

// Now that three seconds have passed,
// add a listner to the xhr.load and xhr.error events
function listener() {
	console.log('greetings from listener');
}
xhr.addEventListener('load', listener);
xhr.addEventListener('error', listener);


// Because of "run to completion" rule and the event loop it is safe to use code above
// GET async request is specified and sent. The rule of "run to completion" ensures that a main JS is run firstly. JS single-threaded and thread is dedicated to perform a main JS.
// Async code - xhr.send() is handled in separeted thread in spite of the fact that JS is single-threaded.
// Callback is added to the queue ("event loop" principle). Once a main JS is completely executed, queue is started handling.


// Race conditions
var asyncB = true,
	xhrB = new XMLHttpRequest(),
	dataB = 'https://www.cnb.cz/cs/financni_trhy/devizovy_trh/kurzy_devizoveho_trhu/denni_kurz.txt?date=27.03.2017&t=' + Math.random();

xhrB.open('get', dataB, asyncB);
xhrB.send();
// Request is sent and asynchronously executed. Related event (load or error) is added in the queue as soon as asynchronous work is done.
// Main JS thread is now able to receive event because setTimeout and its callback is added to the queue after 1s.
// If the load or error events already occured, no callback listenerB is executed. If not, callback listenerB is registered and handled after receive load or error event

setTimeout(function delayd() {

	function listenerB() {
		console.log('greetings from listnerB');
	}
	xhrB.addEventListener('load', listenerB);
	xhrB.addEventListener('error', listenerB);

}, 1000);