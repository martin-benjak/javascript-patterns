// When you have one async function, any code that calls that function now contains an async step.
showPun().then(function () {
	console.log('Maybe I should stick to programmng');
});

function showPun() {
	return getPun().then(function (pun) {
		console.log(pun);
	});
}

function getPun() {
	// Assume ajax() returns a promise that is eventually
	// fulfilled by json for {content: 'The pet store job was ruff!'}
	return ajax(/* some url */).then(function(json) {
		var pun = JSON.parse(json);
		return pun.content;
	});
}

// Console output:
// The pet store job was ruff!
// Maybe I should stick to programming