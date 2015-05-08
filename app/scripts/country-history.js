angular.module('countryHistory',[])
	.controller("HistoryCtrl",function(countryHistory,$scope){
  		$scope.listings = countryHistory.list();
	})

	.factory('countryHistory',function(){
		var historyQuenue = [];
		return {
			push: function(entry){
				historyQuenue.push(entry);
			},
			list: function(){
				return historyQuenue;
			}
		}
	})