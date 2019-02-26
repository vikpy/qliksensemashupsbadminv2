/*!
 * Start Bootstrap - SB Admin 2 v3.3.7+1 (http://startbootstrap.com/template-overviews/sb-admin-2)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */

var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );
//Creating Custom Qlik Sense Objects here 
var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:",
	identity : 1
};

//Configuring connection using require
require.config( {
	baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port: "") + config.prefix + "resources"
						} );
									
require( ["js/qlik", "../vendor/qBlob/qBlob.js"], function ( qlik , qBlob) {
    //Qlik App
    var app;
	
    function getQlikApp () {
    //return qlik.openApp( "4bf04442-aa89-43ff-870a-917c86c92990", config )
		return qlik.openApp( "Consumer_Sales.qvf", config );
	}

    //Creating Angular Module 	
	var myApp = angular.module("myApp", ["ngRoute"]);

    //Defining Routes
    myApp.config(function($routeProvider) {
		$routeProvider
		.when("/", {
			templateUrl : "main.html",
			controller  : 'MainCtrl'
		})
		.when("/sales_margin", {
			templateUrl : "sales_margin.html",
			controller  : 'FirstCtrl'
		})
		.when("/sales", {
			templateUrl : "sales.html",
			controller  : 'SecondCtrl'
		})
		.when("/sales_rep", {
			templateUrl : "sales_rep.html",
			controller  : 'ThirdCtrl'
		})
		.when("/budget", {
			templateUrl : "budget.html",
			controller  : 'FourthCtrl'
		})
		.when("/report", {
			templateUrl : "report.html",
			controller  : 'FifthCtrl'		
		});		
    });

	
   //Controller for Dashboard
   myApp.controller( "MainCtrl", ['$scope', function ( $scope ) {
		if ( !app ) {
			app = getQlikApp();
		}
		
		
		
	//Filter
	$('#filter').on('click', function(){
		app.getObject('QS33','GdUUhw');	
		app.getObject('QS01','mHzvAm');
	    app.getObject('QS02','EzEYG');
	}
	);		
	//Dashboard
	//KPIS
	app.getObject('QS03','NrHfp')
	app.getObject('QS04','ajMAEu');
	app.getObject('QS05','bJSZttJ');
	
    //Charts
	app.getObject('QS06','qamd').then( function( vizModel ) {  
      // Prevent clicking on the button too early  
      //$('#cmdExport').show();  
	var $contextMenu = $("#contextMenu1");
  
		$("#QS06").on("contextmenu", function(e) {
		$contextMenu.css({
		display: "block",
		left: e.pageX,
		top: e.pageY
		});
		return false;
	});
 
	$contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );
 
		$contextMenu.on("click",  function() {
		$contextMenu.hide();
		});	  
	  
	  
      $('#export1').on('click', function() {  
         vizModel.exportData().then(function( reply ) {  
            console.log('qUrl', reply);  
            window.open(reply.result.qUrl,'_blank');  
         });  
      })  ;
	  $("#image1").click(function(e) {  
		e.preventDefault();  
		qBlob.saveToFile('QS06', 'chartname.jpg');  
		}); 
    });

	
	app.getObject('QS07','JcJvj').then( function( vizModel ) {  
      // Prevent clicking on the button too early  
      //$('#cmdExport').show();  
	  
	var $contextMenu = $("#contextMenu2");
  
		$("#QS07").on("contextmenu", function(e) {
		$contextMenu.css({
		display: "block",
		left: e.pageX,
		top: e.pageY
		});
		return false;
	});
 
	$contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );
 
		$contextMenu.on("click",  function() {
		$contextMenu.hide();
		});	  
	  
      $('#export2').on('click', function() {  
         vizModel.exportData().then(function( reply ) {  
            console.log('qUrl', reply);  
            window.open(reply.result.qUrl,'_blank') ;   
         });  
      })  ;
	  $("#image2").click(function(e) {  
		e.preventDefault();  
		qBlob.saveToFile('QS07', 'chartname.jpg');  
		}); 
    });


	app.getObject('QS08','WJYuPN').then( function( vizModel ) {  
      // Prevent clicking on the button too early  
      //$('#cmdExport').show();  
	  
	var $contextMenu = $("#contextMenu3");
  
		$("#QS08").on("contextmenu", function(e) {
		$contextMenu.css({
		display: "block",
		left: e.pageX,
		top: e.pageY
		});
		return false;
	});
 
	$contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );
 
		$contextMenu.on("click",  function() {
		$contextMenu.hide();
		});	  
	  	  
	  
      $('#export3').on('click', function() {  
         vizModel.exportData().then(function( reply ) {  
            console.log('qUrl', reply);  
            window.open(reply.result.qUrl,'_blank') ;   
         });  
      })  ;
	  $("#image3").click(function(e) {  
		e.preventDefault();  
		qBlob.saveToFile('QS08', 'chartname.jpg');  
		}); 
    });
	app.getObject('QS09','MEAjCJ').then( function( vizModel ) {  
      // Prevent clicking on the button too early  
      //$('#cmdExport').show();  
	  
	var $contextMenu = $("#contextMenu4");
  
		$("#QS09").on("contextmenu", function(e) {
		$contextMenu.css({
		display: "block",
		left: e.pageX,
		top: e.pageY
		});
		return false;
	});
 
	$contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );
 
		$contextMenu.on("click",  function() {
		$contextMenu.hide();
		});	  
	  	  	  
	  
	  
      $('#export4').on('click', function() {  
         vizModel.exportData().then(function( reply ) {  
            console.log('qUrl', reply);  
            window.open(reply.result.qUrl,'_blank') ;   
         });  
      })  ;
	  $("#image4").click(function(e) {  
		e.preventDefault();  
		qBlob.saveToFile('QS09', 'chartname.jpg');  
		}); 
    });
	app.getObject('QS10','fNGRa').then( function( vizModel ) {  
      // Prevent clicking on the button too early  
      //$('#cmdExport').show();  
	  
	var $contextMenu = $("#contextMenu5");
  
		$("#QS10").on("contextmenu", function(e) {
		$contextMenu.css({
		display: "block",
		left: e.pageX,
		top: e.pageY
		});
		return false;
	});
 
	$contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );
 
		$contextMenu.on("click",  function() {
		$contextMenu.hide();
		});	  
	  	  	  
	  
      $('#export5').on('click', function() {  
         vizModel.exportData().then(function( reply ) {  
            console.log('qUrl', reply);  
            window.open(reply.result.qUrl,'_blank') ;   
         });  
      })  ;
	  $("#image5").click(function(e) {  
		e.preventDefault();  
		qBlob.saveToFile('QS10', 'chartname.jpg');  
		}); 
    });
	app.getObject('QS11','nPLRub').then( function( vizModel ) {  
      // Prevent clicking on the button too early  
      //$('#cmdExport').show();  
	var $contextMenu = $("#contextMenu6");
  
		$("#QS11").on("contextmenu", function(e) {
		$contextMenu.css({
		display: "block",
		left: e.pageX,
		top: e.pageY
		});
		return false;
	});
 
	$contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );
 
		$contextMenu.on("click",  function() {
		$contextMenu.hide();
		});	  
	  	  	  
      $('#export6').on('click', function() {  
         vizModel.exportData().then(function( reply ) {  
            console.log('qUrl', reply);  
            window.open(reply.result.qUrl,'_blank') ;   
         });  
      })  ;
	  $("#image6").click(function(e) {  
		e.preventDefault();  
		qBlob.saveToFile('QS11', 'chartname.jpg');  
		}); 
    }); 	
	
	}] );

   //Controller for Analytics
   //Sales & Margin Analysis
   myApp.controller( "FirstCtrl", ['$scope', function ( $scope ) {
		if ( !app ) {
			app = getQlikApp();
		}

	//Filter
	$('#filter').on('click', function(){
		app.getObject('QS33','GdUUhw');	
		app.getObject('QS01','mHzvAm');
	    app.getObject('QS02','EzEYG');
	}
	);		
	//Analytics 
	//Charts
    //Sales & Margin Analysis
	app.getObject('QS12','vCNaSe').then( function( vizModel ) {  
      // Prevent clicking on the button too early  
      //$('#cmdExport').show();  
	  
	  
	var $contextMenu = $("#contextMenu7");
  
		$("#QS12").on("contextmenu", function(e) {
		$contextMenu.css({
		display: "block",
		left: e.pageX,
		top: e.pageY
		});
		return false;
	});
 
	$contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );
 
		$contextMenu.on("click",  function() {
		$contextMenu.hide();
		});	  
	  	  	  
      $('#export7').on('click', function() {  
         vizModel.exportData().then(function( reply ) {  
            console.log('qUrl', reply);  
            window.open(reply.result.qUrl,'_blank') ;   
         });  
      })  ;
	  $("#image7").click(function(e) {  
		e.preventDefault();  
		qBlob.saveToFile('QS12', 'chartname.jpg');  
		}); 
    }); 	
	app.getObject('QS13','BqZP').then( function( vizModel ) {  
      // Prevent clicking on the button too early  
      //$('#cmdExport').show();  
	  
	var $contextMenu = $("#contextMenu8");
  
		$("#QS13").on("contextmenu", function(e) {
		$contextMenu.css({
		display: "block",
		left: e.pageX,
		top: e.pageY
		});
		return false;
	});
 
	$contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );
 
		$contextMenu.on("click",  function() {
		$contextMenu.hide();
		});	  
	  	  	  	  
	  
      $('#export8').on('click', function() {  
         vizModel.exportData().then(function( reply ) {  
            console.log('qUrl', reply);  
            window.open(reply.result.qUrl,'_blank') ;   
         });  
      })  ;
	  $("#image8").click(function(e) {  
		e.preventDefault();  
		qBlob.saveToFile('QS13', 'chartname.jpg');  
		}); 
    }); 
	app.getObject('QS14','CLfuxL').then( function( vizModel ) {  
      // Prevent clicking on the button too early  
      //$('#cmdExport').show();  
	  
	var $contextMenu = $("#contextMenu9");
  
		$("#QS14").on("contextmenu", function(e) {
		$contextMenu.css({
		display: "block",
		left: e.pageX,
		top: e.pageY
		});
		return false;
	});
 
	$contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );
 
		$contextMenu.on("click",  function() {
		$contextMenu.hide();
		});	  
	  	  	  	  
	  
      $('#export9').on('click', function() {  
         vizModel.exportData().then(function( reply ) {  
            console.log('qUrl', reply);  
            window.open(reply.result.qUrl,'_blank') ;   
         });  
      })  ;
	  $("#image9").click(function(e) {  
		e.preventDefault();  
		qBlob.saveToFile('QS14', 'chartname.jpg');  
		}); 
    }); 
	app.getObject('QS15','KzjmJ').then( function( vizModel ) {  
      // Prevent clicking on the button too early  
      //$('#cmdExport').show(); 


	var $contextMenu = $("#contextMenu10");
  
		$("#QS15").on("contextmenu", function(e) {
		$contextMenu.css({
		display: "block",
		left: e.pageX,
		top: e.pageY
		});
		return false;
	});
 
	$contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );
 
		$contextMenu.on("click",  function() {
		$contextMenu.hide();
		});	  
	  	  	  	  
	  	  
      $('#export10').on('click', function() {  
         vizModel.exportData().then(function( reply ) {  
            console.log('qUrl', reply);  
            window.open(reply.result.qUrl,'_blank') ;   
         });  
      })  ;
	  $("#image10").click(function(e) {  
		e.preventDefault();  
		qBlob.saveToFile('QS15', 'chartname.jpg');  
		}); 
    }); 	
	app.getObject('QS16','vvAbDn').then( function( vizModel ) {  
      // Prevent clicking on the button too early  
      //$('#cmdExport').show();  

	var $contextMenu = $("#contextMenu11");
  
		$("#QS16").on("contextmenu", function(e) {
		$contextMenu.css({
		display: "block",
		left: e.pageX,
		top: e.pageY
		});
		return false;
	});
 
	$contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );
 
		$contextMenu.on("click",  function() {
		$contextMenu.hide();
		});	  
	  	  	  	
	  
      $('#export11').on('click', function() {  
         vizModel.exportData().then(function( reply ) {  
            console.log('qUrl', reply);  
            window.open(reply.result.qUrl,'_blank') ;   
         });  
      })  ;
	  $("#image11").click(function(e) {  
		e.preventDefault();  
		qBlob.saveToFile('QS16', 'chartname.jpg');  
		}); 
    }); 
	app.getObject('QS17','akDGX').then( function( vizModel ) {  
      // Prevent clicking on the button too early  
      //$('#cmdExport').show();  
	var $contextMenu = $("#contextMenu12");
  
		$("#QS17").on("contextmenu", function(e) {
		$contextMenu.css({
		display: "block",
		left: e.pageX,
		top: e.pageY
		});
		return false;
	});
 
	$contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );
 
		$contextMenu.on("click",  function() {
		$contextMenu.hide();
		});	  
	  	  	 	  
	  
      $('#export12').on('click', function() {  
         vizModel.exportData().then(function( reply ) {  
            console.log('qUrl', reply);  
            window.open(reply.result.qUrl,'_blank') ;   
         });  
      })  ;
	  $("#image12").click(function(e) {  
		e.preventDefault();  
		qBlob.saveToFile('QS17', 'chartname.jpg');  
		}); 
    }); 


   }]);	
   
   	//Sales Analysis   
   myApp.controller( "SecondCtrl", ['$scope', function ( $scope ) {
		if ( !app ) {
			app = getQlikApp();
		}

	//Filter
	$('#filter').on('click', function(){
		app.getObject('QS33','GdUUhw');	
		app.getObject('QS01','mHzvAm');
	    app.getObject('QS02','EzEYG');
	}
	);		
	//Analytics 
	//Charts   
   	//Sales Analysis
	app.getObject('QS18','dcksUYY').then( function( vizModel ) {  
      // Prevent clicking on the button too early  
      //$('#cmdExport').show();  

	var $contextMenu = $("#contextMenu13");
  
		$("#QS18").on("contextmenu", function(e) {
		$contextMenu.css({
		display: "block",
		left: e.pageX,
		top: e.pageY
		});
		return false;
	});
 
	$contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );
 
		$contextMenu.on("click",  function() {
		$contextMenu.hide();
		});	  
	  	  	 		  
	  
	  
      $('#export13').on('click', function() {  
         vizModel.exportData().then(function( reply ) {  
            console.log('qUrl', reply);  
            window.open(reply.result.qUrl,'_blank') ;   
         });  
      })  ;
	  $("#image13").click(function(e) {  
		e.preventDefault();  
		qBlob.saveToFile('QS18', 'chartname.jpg');  
		}); 
    }); 
	app.getObject('QS19','PyQXKt').then( function( vizModel ) {  
      // Prevent clicking on the button too early  
      //$('#cmdExport').show();  


	var $contextMenu = $("#contextMenu14");	  
		$("#QS19").on("contextmenu", function(e) {
		$contextMenu.css({
		display: "block",
		left: e.pageX,
		top: e.pageY
		});
		return false;
	});
 
	$contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );
 	  
      $('#export14').on('click', function() {  
         vizModel.exportData().then(function( reply ) {  
            console.log('qUrl', reply);  
            window.open(reply.result.qUrl,'_blank') ;   
         });  
      })  ;
	  $("#image14").click(function(e) {  
		e.preventDefault();  
		qBlob.saveToFile('QS19', 'chartname.jpg');  
		}); 
    }); 
	app.getObject('QS20','MRmuW').then( function( vizModel ) {  
      // Prevent clicking on the button too early  
      //$('#cmdExport').show();  
	var $contextMenu = $("#contextMenu15");	  
		$("#QS20").on("contextmenu", function(e) {
		$contextMenu.css({
		display: "block",
		left: e.pageX,
		top: e.pageY
		});
		return false;
	});
 
	$contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );	  
	  
	  
      $('#export15').on('click', function() {  
         vizModel.exportData().then(function( reply ) {  
            console.log('qUrl', reply);  
            window.open(reply.result.qUrl,'_blank') ;   
         });  
      })  ;
	  $("#image15").click(function(e) {  
		e.preventDefault();  
		qBlob.saveToFile('QS20', 'chartname.jpg');  
		}); 
    }); 
	app.getObject('QS34','QvvKHzu').then( function( vizModel ) {  
      // Prevent clicking on the button too early  
      //$('#cmdExport').show();  
	  
	var $contextMenu = $("#contextMenu16");	  
		$("#QS34").on("contextmenu", function(e) {
		$contextMenu.css({
		display: "block",
		left: e.pageX,
		top: e.pageY
		});
		return false;
	});
 
	$contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );		  
	  
	  
      $('#export16').on('click', function() {  
         vizModel.exportData().then(function( reply ) {  
            console.log('qUrl', reply);  
            window.open(reply.result.qUrl,'_blank') ;   
         });  
      })  ;
	  $("#image16").click(function(e) {  
		e.preventDefault();  
		qBlob.saveToFile('QS34', 'chartname.jpg');  
		}); 
    }); 
	
   }]);
   
   //Sales Rep Analysis
    myApp.controller( "ThirdCtrl", ['$scope', function ( $scope ) {
		if ( !app ) {
			app = getQlikApp();
		}

	//Filter
	$('#filter').on('click', function(){
		app.getObject('QS33','GdUUhw');	
		app.getObject('QS01','mHzvAm');
	    app.getObject('QS02','EzEYG');
	}
	);		
	//Analytics 
	//Charts   
   	//Sales Rep Analysis
	app.getObject('QS21','savsPXN').then( function( vizModel ) {  
      // Prevent clicking on the button too early  
      //$('#cmdExport').show();  
	var $contextMenu = $("#contextMenu17");	  
		$("#QS21").on("contextmenu", function(e) {
		$contextMenu.css({
		display: "block",
		left: e.pageX,
		top: e.pageY
		});
		return false;
	});
 
	$contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );		  
	  
	  
      $('#export17').on('click', function() {  
         vizModel.exportData().then(function( reply ) {  
            console.log('qUrl', reply);  
            window.open(reply.result.qUrl,'_blank') ;   
         });  
      })  ;
	  $("#image17").click(function(e) {  
		e.preventDefault();  
		qBlob.saveToFile('QS21', 'chartname.jpg');  
		}); 
    }); 
	app.getObject('QS22','fQdkG').then( function( vizModel ) {  
      // Prevent clicking on the button too early  
      //$('#cmdExport').show();  
	  
	var $contextMenu = $("#contextMenu18");	  
		$("#QS22").on("contextmenu", function(e) {
		$contextMenu.css({
		display: "block",
		left: e.pageX,
		top: e.pageY
		});
		return false;
	});
 
	$contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );		  
	  
      $('#export18').on('click', function() {  
         vizModel.exportData().then(function( reply ) {  
            console.log('qUrl', reply);  
            window.open(reply.result.qUrl,'_blank') ;   
         });  
      })  ;
	  $("#image18").click(function(e) {  
		e.preventDefault();  
		qBlob.saveToFile('QS22', 'chartname.jpg');  
		}); 
    }); 
	app.getObject('QS23','pyQPxfg').then( function( vizModel ) {  
      // Prevent clicking on the button too early  
      //$('#cmdExport').show();  
	var $contextMenu = $("#contextMenu19");	  
		$("#QS23").on("contextmenu", function(e) {
		$contextMenu.css({
		display: "block",
		left: e.pageX,
		top: e.pageY
		});
		return false;
	});
 
	$contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );		  
	  	  
	  
      $('#export19').on('click', function() {  
         vizModel.exportData().then(function( reply ) {  
            console.log('qUrl', reply);  
            window.open(reply.result.qUrl,'_blank') ;   
         });  
      })  ;
	  $("#image19").click(function(e) {  
		e.preventDefault();  
		qBlob.saveToFile('QS23', 'chartname.jpg');  
		}); 
    }); 	
	app.getObject('QS24','bsxkrg').then( function( vizModel ) {  
      // Prevent clicking on the button too early  
      //$('#cmdExport').show();  
	  
	var $contextMenu = $("#contextMenu20");	  
		$("#QS24").on("contextmenu", function(e) {
		$contextMenu.css({
		display: "block",
		left: e.pageX,
		top: e.pageY
		});
		return false;
	});
 
	$contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );		  
	  
      $('#export20').on('click', function() {  
         vizModel.exportData().then(function( reply ) {  
            console.log('qUrl', reply);  
            window.open(reply.result.qUrl,'_blank') ;   
         });  
      })  ;
	  $("#image20").click(function(e) {  
		e.preventDefault();  
		qBlob.saveToFile('QS24', 'chartname.jpg');  
		}); 
    }); 
	
	}]);
	
	
	myApp.controller( "FourthCtrl", ['$scope', function ( $scope ) {
		if ( !app ) {
			app = getQlikApp();
		}

	//Filter
	$('#filter').on('click', function(){
		app.getObject('QS33','GdUUhw');	
		app.getObject('QS01','mHzvAm');
	    app.getObject('QS02','EzEYG');
	}
	);		
	//Analytics 
	//Charts
    //Budget Analysis	
	app.getObject('QS25','qEqbcMm').then( function( vizModel ) {  
      // Prevent clicking on the button too early  
      //$('#cmdExport').show();  
	  
	var $contextMenu = $("#contextMenu21");	  
		$("#QS25").on("contextmenu", function(e) {
		$contextMenu.css({
		display: "block",
		left: e.pageX,
		top: e.pageY
		});
		return false;
	});
 
	$contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );		  
	  	  
	  
      $('#export21').on('click', function() {  
         vizModel.exportData().then(function( reply ) {  
            console.log('qUrl', reply);  
            window.open(reply.result.qUrl,'_blank') ;   
         });  
      })  ;
	  $("#image21").click(function(e) {  
		e.preventDefault();  
		qBlob.saveToFile('QS25', 'chartname.jpg');  
		}); 
    }); 
	app.getObject('QS26','VtfsZDc').then( function( vizModel ) {  
      // Prevent clicking on the button too early  
      //$('#cmdExport').show();  
	var $contextMenu = $("#contextMenu22");	  
		$("#QS26").on("contextmenu", function(e) {
		$contextMenu.css({
		display: "block",
		left: e.pageX,
		top: e.pageY
		});
		return false;
	});
 
	$contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );	  
	  
	  
      $('#export22').on('click', function() {  
         vizModel.exportData().then(function( reply ) {  
            console.log('qUrl', reply);  
            window.open(reply.result.qUrl,'_blank') ;   
         });  
      })  ;
	  $("#image22").click(function(e) {  
		e.preventDefault();  
		qBlob.saveToFile('QS26', 'chartname.jpg');  
		}); 
    }); 
	app.getObject('QS27','EpsDdJ').then( function( vizModel ) {  
      // Prevent clicking on the button too early  
      //$('#cmdExport').show();  
	var $contextMenu = $("#contextMenu23");	  
		$("#QS27").on("contextmenu", function(e) {
		$contextMenu.css({
		display: "block",
		left: e.pageX,
		top: e.pageY
		});
		return false;
	});
 
	$contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );		  
	  
	  
      $('#export23').on('click', function() {  
         vizModel.exportData().then(function( reply ) {  
            console.log('qUrl', reply);  
            window.open(reply.result.qUrl,'_blank') ;   
         });  
      })  ;
	  $("#image23").click(function(e) {  
		e.preventDefault();  
		qBlob.saveToFile('QS27', 'chartname.jpg');  
		}); 
    }); 	
	app.getObject('QS28','TqwwFf').then( function( vizModel ) {  
      // Prevent clicking on the button too early  
      //$('#cmdExport').show();  
	  
	var $contextMenu = $("#contextMenu24");	  
		$("#QS28").on("contextmenu", function(e) {
		$contextMenu.css({
		display: "block",
		left: e.pageX,
		top: e.pageY
		});
		return false;
	});
 
	$contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );	  
	  
	  
      $('#export24').on('click', function() {  
         vizModel.exportData().then(function( reply ) {  
            console.log('qUrl', reply);  
            window.open(reply.result.qUrl,'_blank') ;   
         });  
      })  ;
	  $("#image24").click(function(e) {  
		e.preventDefault();  
		qBlob.saveToFile('QS28', 'chartname.jpg');  
		}); 
    }); 

    }]);	
	
	
	
	myApp.controller( "FifthCtrl", ['$scope', function ( $scope ) {
		if ( !app ) {
			app = getQlikApp();
		}

	//Filter
	$('#filter').on('click', function(){
		app.getObject('QS33','GdUUhw');	
		app.getObject('QS01','mHzvAm');
	    app.getObject('QS02','EzEYG');
	}
	);			
	//Report Analysis	
	app.getObject('QS29','RfEbJ').then( function( vizModel ) {  
      // Prevent clicking on the button too early  
      //$('#cmdExport').show();  
	  
	var $contextMenu = $("#contextMenu25");	  
		$("#QS29").on("contextmenu", function(e) {
		$contextMenu.css({
		display: "block",
		left: e.pageX,
		top: e.pageY
		});
		return false;
	});
 
	$contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );	  
	  	  
	  
	  
	  
      $('#export25').on('click', function() {  
         vizModel.exportData().then(function( reply ) {  
            console.log('qUrl', reply);  
            window.open(reply.result.qUrl,'_blank') ;   
         });  
      })  ;
	  $("#image25").click(function(e) {  
		e.preventDefault();  
		qBlob.saveToFile('QS29', 'chartname.jpg');  
		}); 
    }); 
	app.getObject('QS30','KnASd').then( function( vizModel ) {  
      // Prevent clicking on the button too early  
      //$('#cmdExport').show();  
	  
	var $contextMenu = $("#contextMenu26");	  
		$("#QS30").on("contextmenu", function(e) {
		$contextMenu.css({
		display: "block",
		left: e.pageX,
		top: e.pageY
		});
		return false;
	});
 
	$contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );	  
	  	  	  
	  
      $('#export26').on('click', function() {  
         vizModel.exportData().then(function( reply ) {  
            console.log('qUrl', reply);  
            window.open(reply.result.qUrl,'_blank') ;   
         });  
      })  ;
	  $("#image26").click(function(e) {  
		e.preventDefault();  
		qBlob.saveToFile('QS30', 'chartname.jpg');  
		}); 
    }); 
	app.getObject('QS31','ufWRp').then( function( vizModel ) {  
      // Prevent clicking on the button too early  
      //$('#cmdExport').show();  
	var $contextMenu = $("#contextMenu27");	  
		$("#QS31").on("contextmenu", function(e) {
		$contextMenu.css({
		display: "block",
		left: e.pageX,
		top: e.pageY
		});
		return false;
	});
 
	$contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );		  
	  
	  
      $('#export27').on('click', function() {  
         vizModel.exportData().then(function( reply ) {  
            console.log('qUrl', reply);  
            window.open(reply.result.qUrl,'_blank') ;   
         });  
      })  ;
	  $("#image27").click(function(e) {  
		e.preventDefault();  
		qBlob.saveToFile('QS31', 'chartname.jpg');  
		}); 
    }); 	
	app.getObject('QS32','LXAaTP').then( function( vizModel ) {  
      // Prevent clicking on the button too early  
      //$('#cmdExport').show();  
	  
	var $contextMenu = $("#contextMenu28");	  
		$("#QS32").on("contextmenu", function(e) {
		$contextMenu.css({
		display: "block",
		left: e.pageX,
		top: e.pageY
		});
		return false;
	});
 
	$contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );		  
	  
      $('#export28').on('click', function() {  
         vizModel.exportData().then(function( reply ) {  
            console.log('qUrl', reply);  
            window.open(reply.result.qUrl,'_blank') ;   
         });  
      })  ;
	  $("#image28").click(function(e) {  
		e.preventDefault();  
		qBlob.saveToFile('QS32', 'chartname.jpg');  
		}); 
    }); 
	
	}]);
	
    angular.bootstrap( document, ["myApp", "qlik-angular"] );
	qlik.setOnError( function ( error ) {
		$( '#popupText' ).append( error.message + "<br>" );
		$( '#popup' ).fadeIn( 1000 );
	} );
	$( "#closePopup" ).click( function () {
		$( '#popup' ).hide();
	} );

    //Current Selection Tab on the top
	var app = qlik.openApp('Consumer_Sales.qvf', config);		
	app.getObject('CurrentSelections', 'CurrentSelections');

    
	

} );





















//Context Menu Handlers



$(function() {
   
  
  var $contextMenu = $("#contextMenu2");
  
  $("#QS07").on("contextmenu", function(e) {
    $contextMenu.css({
      display: "block",
      left: e.pageX,
      top: e.pageY
    });
    return false;
  });
 
  $contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );
 
 $contextMenu.on("click",  function() {
     $contextMenu.hide();
  });



}); 
$(function() {
   
  
  var $contextMenu = $("#contextMenu3");
  
  $("#QS08").on("contextmenu", function(e) {
    $contextMenu.css({
      display: "block",
      left: e.pageX,
      top: e.pageY
    });
    return false;
  });
 
  $contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );
 
 $contextMenu.on("click",  function() {
     $contextMenu.hide();
  });



}); 
$(function() {
   
  
  var $contextMenu = $("#contextMenu4");
  
  $("#QS09").on("contextmenu", function(e) {
    $contextMenu.css({
      display: "block",
      left: e.pageX,
      top: e.pageY
    });
    return false;
  });
 
  $contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );
 
 $contextMenu.on("click",  function() {
     $contextMenu.hide();
  });



}); 
$(function() {
   
  
  var $contextMenu = $("#contextMenu5");
  
  $("#QS10").on("contextmenu", function(e) {
    $contextMenu.css({
      display: "block",
      left: e.pageX,
      top: e.pageY
    });
    return false;
  });
 
  $contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );
 
 $contextMenu.on("click",  function() {
     $contextMenu.hide();
  });



}); 
$(function() {
   
  
  var $contextMenu = $("#contextMenu6");
  
  $("#QS11").on("contextmenu", function(e) {
    $contextMenu.css({
      display: "block",
      left: e.pageX,
      top: e.pageY
    });
    return false;
  });
 
  $contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );
 
 $contextMenu.on("click",  function() {
     $contextMenu.hide();
  });



}); 

$(function() {
   
  
  var $contextMenu = $("#contextMenu7");
  
  $("#QS12").on("contextmenu", function(e) {
    $contextMenu.css({
      display: "block",
      left: e.pageX,
      top: e.pageY
    });
    return false;
  });
 
  $contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );
 
 $contextMenu.on("click",  function() {
     $contextMenu.hide();
  });



}); 
$(function() {
   
  
  var $contextMenu = $("#contextMenu8");
  
  $("#QS13").on("contextmenu", function(e) {
    $contextMenu.css({
      display: "block",
      left: e.pageX,
      top: e.pageY
    });
    return false;
  });
 
  $contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );
 
 $contextMenu.on("click",  function() {
     $contextMenu.hide();
  });



}); 
$(function() {
   
  
  var $contextMenu = $("#contextMenu9");
  
  $("#QS14").on("contextmenu", function(e) {
    $contextMenu.css({
      display: "block",
      left: e.pageX,
      top: e.pageY
    });
    return false;
  });
 
  $contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );
 
 $contextMenu.on("click",  function() {
     $contextMenu.hide();
  });



}); 
$(function() {
   
  
  var $contextMenu = $("#contextMenu10");
  
  $("#QS15").on("contextmenu", function(e) {
    $contextMenu.css({
      display: "block",
      left: e.pageX,
      top: e.pageY
    });
    return false;
  });
 
  $contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );
 
 $contextMenu.on("click",  function() {
     $contextMenu.hide();
  });



}); 
$(function() {
   
  
  var $contextMenu = $("#contextMenu11");
  
  $("#QS16").on("contextmenu", function(e) {
    $contextMenu.css({
      display: "block",
      left: e.pageX,
      top: e.pageY
    });
    return false;
  });
 
  $contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );
 
 $contextMenu.on("click",  function() {
     $contextMenu.hide();
  });



}); 
$(function() {
   
  
  var $contextMenu = $("#contextMenu12");
  
  $("#QS17").on("contextmenu", function(e) {
    $contextMenu.css({
      display: "block",
      left: e.pageX,
      top: e.pageY
    });
    return false;
  });
 
  $contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );
 
 $contextMenu.on("click",  function() {
     $contextMenu.hide();
  });



}); 
$(function() {
   
  
  var $contextMenu = $("#contextMenu13");
  
  $("#QS18").on("contextmenu", function(e) {
    $contextMenu.css({
      display: "block",
      left: e.pageX,
      top: e.pageY
    });
    return false;
  });
 
  $contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );
 
 $contextMenu.on("click",  function() {
     $contextMenu.hide();
  });



}); 
$(function() {
   
  
  var $contextMenu = $("#contextMenu14");
  
  $("#QS19").on("contextmenu", function(e) {
    $contextMenu.css({
      display: "block",
      left: e.pageX,
      top: e.pageY
    });
    return false;
  });
 
  $contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );
 
 $contextMenu.on("click",  function() {
     $contextMenu.hide();
  });



}); 
$(function() {
   
  
  var $contextMenu = $("#contextMenu15");
  
  $("#QS20").on("contextmenu", function(e) {
    $contextMenu.css({
      display: "block",
      left: e.pageX,
      top: e.pageY
    });
    return false;
  });
 
  $contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );
 
 $contextMenu.on("click",  function() {
     $contextMenu.hide();
  });



}); 
$(function() {
   
  
  var $contextMenu = $("#contextMenu16");
  
  $("#QS34").on("contextmenu", function(e) {
    $contextMenu.css({
      display: "block",
      left: e.pageX,
      top: e.pageY
    });
    return false;
  });
 
  $contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );
 
 $contextMenu.on("click",  function() {
     $contextMenu.hide();
  });



}); 
$(function() {
   
  
  var $contextMenu = $("#contextMenu17");
  
  $("#QS21").on("contextmenu", function(e) {
    $contextMenu.css({
      display: "block",
      left: e.pageX,
      top: e.pageY
    });
    return false;
  });
 
  $contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );
 
 $contextMenu.on("click",  function() {
     $contextMenu.hide();
  });



}); 
$(function() {
   
  
  var $contextMenu = $("#contextMenu18");
  
  $("#QS22").on("contextmenu", function(e) {
    $contextMenu.css({
      display: "block",
      left: e.pageX,
      top: e.pageY
    });
    return false;
  });
 
  $contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );
 
 $contextMenu.on("click",  function() {
     $contextMenu.hide();
  });



}); 
$(function() {
   
  
  var $contextMenu = $("#contextMenu19");
  
  $("#QS23").on("contextmenu", function(e) {
    $contextMenu.css({
      display: "block",
      left: e.pageX,
      top: e.pageY
    });
    return false;
  });
 
  $contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );
 
 $contextMenu.on("click",  function() {
     $contextMenu.hide();
  });



}); 
$(function() {
   
  
  var $contextMenu = $("#contextMenu20");
  
  $("#QS24").on("contextmenu", function(e) {
    $contextMenu.css({
      display: "block",
      left: e.pageX,
      top: e.pageY
    });
    return false;
  });
 
  $contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );
 
 $contextMenu.on("click",  function() {
     $contextMenu.hide();
  });



}); 
$(function() {
   
  
  var $contextMenu = $("#contextMenu21");
  
  $("#QS25").on("contextmenu", function(e) {
    $contextMenu.css({
      display: "block",
      left: e.pageX,
      top: e.pageY
    });
    return false;
  });
 
  $contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );
 
 $contextMenu.on("click",  function() {
     $contextMenu.hide();
  });



}); 
$(function() {
   
  
  var $contextMenu = $("#contextMenu22");
  
  $("#QS26").on("contextmenu", function(e) {
    $contextMenu.css({
      display: "block",
      left: e.pageX,
      top: e.pageY
    });
    return false;
  });
 
  $contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );
 
 $contextMenu.on("click",  function() {
     $contextMenu.hide();
  });



}); 
$(function() {
   
  
  var $contextMenu = $("#contextMenu23");
  
  $("#QS27").on("contextmenu", function(e) {
    $contextMenu.css({
      display: "block",
      left: e.pageX,
      top: e.pageY
    });
    return false;
  });
 
  $contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );
 
 $contextMenu.on("click",  function() {
     $contextMenu.hide();
  });



}); 
$(function() {
   
  
  var $contextMenu = $("#contextMenu24");
  
  $("#QS28").on("contextmenu", function(e) {
    $contextMenu.css({
      display: "block",
      left: e.pageX,
      top: e.pageY
    });
    return false;
  });
 
  $contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );
 
 $contextMenu.on("click",  function() {
     $contextMenu.hide();
  });



}); 
$(function() {
   
  
  var $contextMenu = $("#contextMenu25");
  
  $("#QS29").on("contextmenu", function(e) {
    $contextMenu.css({
      display: "block",
      left: e.pageX,
      top: e.pageY
    });
    return false;
  });
 
  $contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );
 
 $contextMenu.on("click",  function() {
     $contextMenu.hide();
  });



}); 
$(function() {
   
  
  var $contextMenu = $("#contextMenu26");
  
  $("#QS30").on("contextmenu", function(e) {
    $contextMenu.css({
      display: "block",
      left: e.pageX,
      top: e.pageY
    });
    return false;
  });
 
  $contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );
 
 $contextMenu.on("click",  function() {
     $contextMenu.hide();
  });



}); 
$(function() {
   
  
  var $contextMenu = $("#contextMenu27");
  
  $("#QS31").on("contextmenu", function(e) {
    $contextMenu.css({
      display: "block",
      left: e.pageX,
      top: e.pageY
    });
    return false;
  });
 
  $contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );
 
 $contextMenu.on("click",  function() {
     $contextMenu.hide();
  });



}); 
$(function() {
   
  
  var $contextMenu = $("#contextMenu28");
  
  $("#QS32").on("contextmenu", function(e) {
    $contextMenu.css({
      display: "block",
      left: e.pageX,
      top: e.pageY
    });
    return false;
  });
 
  $contextMenu.click(function() {
	  $contextMenu.hide() ;
	  return false ;
     }
	  );
 
 $contextMenu.on("click",  function() {
     $contextMenu.hide();
  });



}); 


/*

/*
angular.bootstrap( document, ["myApp", "qlik-angular"] );
	qlik.setOnError( function ( error ) {
		$( "#errmsg" ).html( error.message ).parent().show();
} );
*/






