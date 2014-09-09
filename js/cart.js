
var config;
function init (e) {
	console.log('inicializando');

	$.getJSON( "js/config.json", function( data ) {
			console.log( data );
			config = data;
	});

	$('.add').on("click", AddToCart);
}

function AddToCart(e) {
    alert('agregando articulo');
    console.log(e.currentTarget);
    // $.ajax({
    // 	    url: "",
    //         type: "POST",
    //         cache: false,
	//      data: {
	  
    //         }, 
    // });
}

function buy(e) {

}

function ListArticles(e) {

}

$(document).on("ready", function() {
    console.log("js cargado");
    init();
});
