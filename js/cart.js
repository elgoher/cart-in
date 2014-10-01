var selectors, types;

function get_selector(types, sel_obj) {
    var selector;
    jQuery.map(types, function(obj) {
        if (obj.text === sel_obj.type)
            selector = obj.symbol + sel_obj.name;
    });
    return selector;
}

function start_server(event) {
	 $.ajax({
        url: '',
        type: "POST",
        cache: false,
        success: function (mensaje){
         if(!mensaje){
            event.stopImmediatePropagation();
            
         
         }
        },
        error: function (xhr, status, error) { 
           console.log('desde val session: '+xhr.responseText);
            return false;
        }    
    });
}

function init() {
    console.log('inicializando');
    $.getJSON("js/config.json", function(data) {
    	selectors = data.selectors;
        types = data.types;
        $.each(selectors, function(key, value) {
            selector = get_selector(types, value);
            switch (key) {
                case 'add_button':
                    $(selector).on("click", AddToCart);
                break;
                case 'buy_button':
                    $(selector).on("click", buy);
                break;
            }
        });
    });
    start_server();
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
    alert('ohh! compraste un articulo');
    console.log(e.currentTarget);
}

function ListArticles(e) {

}

$(document).on("ready", function() {
    console.log("js cargado");
    init();
});
