var config;

function get_selector (types, sel_obj) {
	var selector;
	  jQuery.map(types, function(obj) {
            if (obj.text === sel_obj.type)
                selector = obj.symbol + sel_obj.name;
        });
	  return selector;
}

function init() {
    var add, selector;
    console.log('inicializando');
    $.getJSON("js/config.json", function(data) {
        config = data;
        add = data.selectors.add_button;
      	selector = get_selector(data.types,add);
        $(selector).on("click", AddToCart);
    });
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
