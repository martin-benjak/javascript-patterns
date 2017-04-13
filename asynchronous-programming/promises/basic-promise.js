function loadImage(url) {
	var promise = new Promise(function resolver(resolve, reject) {

		var img = new Image();
		img.src = url;

		img.onload = function() {
			resolve(img);
		};

		img.onerorr = function(e) {
			reject(e);
		};

	});

	return promise;
}

var promise = loadImage('test-image.png');

promise.then(function(img) {

	document.body.appendChild(img);

});

promise.catch(function(e) {
	console.log('Error occured while loading image');
	console.log(e);
});