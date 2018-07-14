
            $.noConflict
            function require(url) {
                var rtrn
             jQuery.ajax({async:false,url: url, success: function(result){
                if(url.search(".json")!==-1) {rtrn= result;} else if(url.search(".js")!==-1) {rtrn= eval("function() {"+result+"}");} else {
            rtrn= result;
                }
        }});return rtrn;
            }
var config = require("config.json");
var name = location.protocol+location.host+location.pathname;
var i = 0;
while(!(config[i].name = name)) {
i++;
}
require(config[i].openWith);
