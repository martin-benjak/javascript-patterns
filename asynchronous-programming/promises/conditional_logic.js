var app = {

	login: function (callback, userName) {


		if (userName === 'martin') {

			setTimeout(function() {

				var response = true;
				callback(response);
				return response;				

			}, 1000);
		}

		if (userName === 'alex') {

			setTimeout(function() {

				var response = false;
				callback(response);
				return response;				

			}, 5000);
		}

	}

};

var user = {

	authenticated: null,

	login: function(userName) {

		if (user.authenticated === null) {

			var promise = new Promise(function resolver(resolve, reject) {


				app.login(function(response) {

						window.console && console.log('user.login: async callback was called');

						if (typeof response === 'boolean') {

							user.authenticated = (response === true) ? true : false;

							if (user.authenticated === false) {
								user.authenticated = null;
								reject('user.login: unsuccessfull login');

								window.console && console.log('user.login: ' + userName + ' was not successfully logged.');

							}

							else {

								user.authenticated = true;
								resolve();
								window.console && console.log('user.login: ' + userName + ' was successfully logged.');

							}


						}

						else {

							reject('user.login: Invalid output');

						}

				}, userName);


			});

		}

		else {

				window.console && console.log('user.login: Skipeed because of already logged promise');

		}

		return promise;

	}
};

function showMainMenu(userName) {

	var p = (user.authenticated === null) ? user.login(userName) : Promise.resolve();
	return p.then(function() {
		window.console && console.log('showMainMenu: Display menu');
	});

}

showMainMenu('martin');