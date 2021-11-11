document.addEventListener('DOMContentLoaded', ()=> {
   fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
       .then( response => response.json())
       .then( data => {
           // Котирування долара США
          const USDsale = data[0].sale;
          const USDbuy = data[0].buy;
          document.querySelector('#USDsale').innerHTML = USDsale ;
          document.querySelector('#USDbuy').innerHTML = USDbuy;
           // Котирування Євро
           const EURsale = data[1].sale;
           const EURbuy = data[1].buy;
           document.querySelector('#EURsale').innerHTML = EURsale;
           document.querySelector('#EURbuy').innerHTML = EURbuy;
           // Котирування російського рубля
           const RUBsale = data[2].sale;
           const RUBbuy = data[2].buy;
           document.querySelector('#RUBsale').innerHTML = RUBsale;
           document.querySelector('#RUBbuy').innerHTML = RUBbuy;
           // Котирування біткойна
           const BTCsale = data[3].sale;
           const BTCbuy = data[3].buy;
           document.querySelector('#BTCsale').innerHTML = BTCsale;
           document.querySelector('#BTCbuy').innerHTML = BTCbuy;





       })
});