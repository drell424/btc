/* YOU ARE IN: btc/javascript/script.js */

var url = 'http://api.coindesk.com/v1/bpi/currentprice/USD.json';


function getBtcData( url ) {

    var ajaxConfig = {
        url: url
        , jsonp: 'callback'
        , dataType: "json"
        , async: false
        , data: {
            format: "json"
        }
        , success: successFunc()
        
    
    };

    
    $.ajax( ajaxConfig );
};


function successFunc() {
	return function( response ){
	var data = response;
	var rate = parseFloat(data.bpi.USD.rate).toFixed(2);
	$('#btcPrice').text(rate)
}
};

getBtcData(url);



function convert() {
	var usd = $('#inpUSD').val();
	var btcP = parseFloat($('#btcPrice').text());
	var btc = $('#inpBTC').val();

	console.log('btc' + btc)
	console.log('usd' + usd)
	
	if ( usd > 0) {
	var btc = (usd / btcP).toFixed(4);
	$('#inpBTC').val(btc);
	$('#inpUSD').val(usd);
	}
	else {
	var usd = (btc * btcP).toFixed(2);
	$('#inpBTC').val(btc);
	$('#inpUSD').val(usd);
	}

}

$('#convert').on('click', function() {
	convert();

});

$('#inpUSD').on('click', function(){
	$(this).val('');
	$('#inpBTC').val('');
});

$('#inpBTC').on('click', function(){
	$(this).val('');
	$('#inpUSD').val('');
});






