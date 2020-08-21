function ajax(type, api, mdata, mtoken){
	return new Promise((resolve, reject) => {
		$.ajax({
			type: type,
			url: "http://newweb.biruoyu.com/Api/" + api + "?r=" + Math.random(2),
			data: {
				Data: mdata,
				token: mtoken
			}, 
			dataType: "json",
			success: function (res) {
				resolve(res);
			},
			error: function (res) {
				reject(res);
			}
		});
	});

}
function getAjax(type, api, mdata){
	return new Promise((resolve, reject) => {
		$.ajax({
			type: type,
			url: "http://newweb.biruoyu.com/Api/" + api + "?r=" + Math.random(2),
			data: {
				Data: mdata
			},
			dataType: "json",
			headers: {
				"Access-Control-Allow-Origin":"*",
				"Access-Control-Allow-Headers":"X-Requested-With"
			},

			// dataType: 'jsonp',
 	        // jsonpCallback:'callback',

			success: function (res) {
				resolve(res);
			},
			error: function (res) {
				reject(res);
			}
		})
	})
}


