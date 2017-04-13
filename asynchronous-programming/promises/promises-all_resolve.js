/**
             * Promise definition
             * @param  {string} offer       indicator of offer 
             * @return {Promise.<boolean, Error>}
             */
            var detectOfferPromises = function(offer) {

                return new Promise((resolve, reject) => {

                    asyncCall('ShouldDisplayOfferForProduct', (response) => {

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

            },

                chrome = detectOfferPromises('chrome'),
                gtoolbar = detectOfferPromises('gtoolbar'),
                rChrome = detectOfferPromises('chrome-reactivate');


            if (!testResultingOffersIndicator) {

                Promise.all([chrome, gtoolbar, rChrome]).then(values => {

                    var indicatorChromeOffer = values[0],
                        indicatorGtoolbarOffer = values[1],
                        indicatorRchromeOffer = values[2],
                        indicatorWtu = postUpdateScreenFreeAvgast.getWtuAvailability(pBesObj);

                    var resultingOffer = postUpdateScreenFreeAvgast.detectOffer(indicatorChromeOffer, indicatorGtoolbarOffer, indicatorRchromeOffer, indicatorWtu);
                    postUpdateScreenFreeAvgast.renderOffer(elementsDOM, elementsBtnWrapDOM, resultingOffer, brandCode, closeBtnAvailable);

                });

            }

            else {

                var urlResultsTest = urlResultsFinder(testResultingOffers, testResultingOffersIndicator),
                    chromeTest = JSON.parse(urlResultsTest[0]),
                    gtoolbarTest = JSON.parse(urlResultsTest[1]),
                    rChromeTest = JSON.parse(urlResultsTest[2]),
                    wtuTest = JSON.parse(urlResultsTest[3]);

                Promise.resolve([chromeTest, gtoolbarTest, rChromeTest]).then(values => {

                    var indicatorChromeOfferTest = values[0],
                        indicatorGtoolbarOfferTest = values[1],
                        indicatorRchromeOfferTest = values[2],
                        indicatorWtuTest = wtuTest;

                    var resultingOffer = postUpdateScreenFreeAvgast.detectOffer(indicatorChromeOfferTest, indicatorGtoolbarOfferTest, indicatorRchromeOfferTest, indicatorWtuTest);
                        postUpdateScreenFreeAvgast.renderOffer(elementsDOM, elementsBtnWrapDOM, resultingOffer, brandCode, closeBtnAvailable);

                });


            }