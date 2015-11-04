angular.module('services', [])
.factory('dataService', function($rootScope) {
	return {
		data : null
	};
});


	// var uri = "api/print/jonk/nino";
	// function handleError(response) {
	//   return ( response );
	//   }

	//   // I transform the successful response, unwrapping the application data
	//   // from the API response payload.
	//   function handleSuccess(response) {
	//     return ( response );
	//   }

	//   // function for rest api calls and manage response
	//   function callApi(params, url) {
	//     var request = $http({
	//       method: 'GET',
	//       url: url,
	//       params: params,
	//       responseType: 'application/json'
	//     });
	//     return ( request.then(handleSuccess, handleError) );
	//   }

	// callApi('', uri).then(function(response){
	//   console.log("ok "+response);
	// }, handleError)