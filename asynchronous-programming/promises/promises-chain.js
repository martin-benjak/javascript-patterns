var app = {

	asyncCall: function (id, callback, params) {


		if (params[0] === 'chrome') {

			setTimeout(function() {

				var response = [true];
				callback(response);
				return [true];				

			}, 1000);
		}

		if (params[0] === 'gtoolbar') {

			setTimeout(function() {

				var response = [true];
				callback(response);
				return [true];				

			}, 500);
		}

		if (params[0] === 'chrome-reactivate') {

			setTimeout(function() {

				var response = [false];
				callback(response);
				return [false];				

			}, 200);
		}

	}

};

var detectOffer = function(offer) {

	return new Promise((resolve, reject) => {

        app.asyncCall('ShouldDisplayOfferForProduct', (response) => {

			if (response !== null && typeof response !== 'undefined' && response.length !== 0) {

				if (typeof response[0] === 'boolean') {

					resolve(response[0]);

				}

                else {

					reject(Error('Invalid response (ShouldDisplayOfferForProduct): Element of returned array is ' + typeof response[0] + ', but should be boolean'));

				}

			}

			else {

				reject(Error('Invalid response (ShouldDisplayOfferForProduct)'));

			}

		}, [offer]);

	});

};

detectOffer('chrome')
.then(function(response) {
	console.log(response);
	return detectOffer('chrome-reactivate');
})
.then(function(response) {
	console.log(response);
	return detectOffer('gtoolbar');
})
.then(function(response) {
	console.log(response);
})
.catch(function(error) {
 	console.log('oh no', error);
});