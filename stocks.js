const si = require('stock-info');

function setStock(){
    setInterval(function(){
        stocks()
    },1000)
}

function stocks(){
    si.getSingleStockInfo('TSLA').then(function(data){console.log(data.regularMarketPrice);var TSLA = data.regularMarketPrice; var TSLAopen = data.regularMarketChange;
        document.getElementsByClassName(data.symbol)[0].innerHTML = data.regularMarketPrice;
        if(data.regularMarketChange>0) {
            document.getElementsByClassName(data.symbol)[0].style.color = "#00ff00";
            document.getElementsByClassName(data.symbol)[0].innerHTML = Math.floor(TSLA) + "<br><br>+" + TSLAopen;
        }else{
            document.getElementsByClassName(data.symbol)[0].style.color = "#ff0000";
            document.getElementsByClassName(data.symbol)[0].innerHTML = Math.floor(TSLA) + "<br><br>" + TSLAopen;
        }
        si.getSingleStockInfo('LUNE.ST').then(function(data1){console.log(data1.regularMarketPrice);var LUNE = data1.regularMarketPrice; var LUNEopen = data1.regularMarketChange;
            document.getElementsByClassName(data1.symbol)[0].innerHTML = data1.regularMarketPrice;
            if(data1.regularMarketChange>0) {
                document.getElementsByClassName(data1.symbol)[0].style.color = "#00ff00";
                document.getElementsByClassName(data1.symbol)[0].innerHTML = Math.floor(LUNE) + "<br><br>+" + LUNEopen;
            }else{
                document.getElementsByClassName(data1.symbol)[0].style.color = "#ff0000";
                document.getElementsByClassName(data1.symbol)[0].innerHTML = Math.floor(LUNE) + "<br><br>" + LUNEopen;
            }
            si.getSingleStockInfo('EVO.ST').then(function(data2){console.log(data.regularMarketPrice);var EVO = data2.regularMarketPrice; var EVOopen = data2.regularMarketChange;
                if(EVOopen>0) {
                    document.getElementsByClassName(data2.symbol)[0].style.color = "#00ff00";
                    document.getElementsByClassName(data2.symbol)[0].innerHTML = Math.floor(EVO) + "<br><br>+" + EVOopen;
                }else{
                    document.getElementsByClassName(data2.symbol)[0].style.color = "#ff0000";
                    document.getElementsByClassName(data2.symbol)[0].innerHTML = Math.floor(EVO) + "<br><br>" + EVOopen;
                }
                var dailyChange = Math.floor(LUNEopen*33 + TSLAopen * 2 * 8.8 + EVOopen * 5);
                if(dailyChange > 0) {
                    document.getElementsByClassName("value")[0].style.color = "#00ff00";
                    document.getElementsByClassName("value")[0].innerHTML = Math.floor(TSLA * 2 * 8.8 + LUNE * 33 + EVO * 5) + "<br><br>+" + dailyChange;
                }else{
                    document.getElementsByClassName("value")[0].style.color = "#ff0000";
                    document.getElementsByClassName("value")[0].innerHTML = Math.floor(TSLA * 2 * 8.8 + LUNE * 33 + EVO * 5) + "<br><br>" + dailyChange;
                }
            });
        });
    });
}