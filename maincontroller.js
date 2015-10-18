angular.module('mainModule', [])

.controller('controller', ['$scope','$log',
                   function($scope, $log ) {

  //   $scope.name = '';
  //   $scope.surname = '';
  //   $scope.email = '';
  //   $scope.cel = '';
  //   $scope.description = '';
  //   $scope.test = "prova";

  //   $scope.step = 1;

  //   $scope.movimenti = { "lista": [
  //                             {
  //                               "id": "1",
  //                               "categoria": "TELECOM",
  //                               "descrizione": "bonifico",
  //                               "importo": "13",
  //                               "puntoVendita": "Telecom",
  //                               "dataOperazione": "1423090800000",
  //                               "causale": "BONIFICO A DEBITO"
  //                             },
  //                             {
  //                               "id": "2",
  //                               "categoria": "Eprice",
  //                               "descrizione": "pagamento",
  //                               "importo": "45",
  //                               "puntoVendita": "Eprice",
  //                               "dataOperazione": "1423090800000",
  //                               "causale": "PAGAMENTO A SALFANI"
  //                             }
  //                         ]
  //                       };

  //   $scope.movimentiSel = $scope.movimenti.lista;

  //    $scope.informazioni = function(){

  // 	  $scope.infoUser=[{

	 //    	name:$scope.name,
	 //    	surname:$scope.surname,
	 //    	email:$scope.email,
	 //    	cel:$scope.cel,
	 //    	description:$scope.description

  //  			}];


  //  	}


     

  // $scope.openMovimento = function(item){
  //   $scope.step = 2;
  //   $scope.dettaglioMovimento = item;
  // };


  //  $scope.tornaIndietro = function(){
  //   $scope.step = 1;
  //   $scope.dettaglioMovimento = "";
  // };


$scope.country= [{"id":"it","name":"Italy"},{"id":"en","name":"England"}]];





}]);