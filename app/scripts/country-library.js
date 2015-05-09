angular.module('countryLibrary',[])
	.constant('COUNTRY_API_PREFIX','http://api.geonames.org')
	.constant('COUNTRY_COUNTRY_INFO','/countryInfoJSON?username=songvc')
	.constant('COUNTRY_NEIGHBOR', '/neighboursJSON?geonameId={{ id }}&username=songvc')
	.constant('COUNTRY_SEARCH','/searchJSON?q={{ q }}&name_equals={{ name_equals }}&isNameRequired={{ isNameRequired }}&maxRows={{rows}}&username=songvc')

	.factory('countryRequest', function($http, $q, COUNTRY_API_PREFIX){
		return function(path){
			var defer = $q.defer();
			$http.get(COUNTRY_API_PREFIX + path,{cache:true})
				.success(function(data){
					defer.resolve(data);
				})
			return defer.promise;
		}
	})

	.factory('countryInfo', function($http, $q, countryRequest, COUNTRY_COUNTRY_INFO){
		return function(){
			return countryRequest(COUNTRY_COUNTRY_INFO);
		}	
	})

	.factory('countryNeighbor', function($http, $q, $interpolate, countryRequest, COUNTRY_NEIGHBOR){
		return function(id){
			var path = $interpolate(COUNTRY_NEIGHBOR)({
				id: id
			});
			return countryRequest(path);
		}
	})

	.factory('countrySearch', function($http, $q, $interpolate, countryRequest, COUNTRY_SEARCH){
		return function(q,name_equals){
			var path = $interpolate(COUNTRY_SEARCH)({
				q:q,
				name_equals:name_equals,
				isNameRequired: true,
				rows:1
			});
			console.log(path);
			return countryRequest(path);
		}
	})

	.factory('findCountry',function(){
		return function(nameKey,myArray){
			for (var i=0; i < myArray.length; i++) {
				if (myArray[i].countryName === nameKey) {
	            	return myArray[i];
        		}
   
    		}			
		}
	})
