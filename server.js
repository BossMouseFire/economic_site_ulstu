const express = require('express');
const path = require('path');
const cors = require('cors')
const port = process.env.PORT || 3001;
const rp = require('request-promise');
// здесь у нас происходит импорт пакетов и определяется порт нашего сервера
const app = express();
// //здесь наше приложение отдаёт статику
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/get_price-conversion', cors(), function (req, res) {
    const requestOptions = {
      method: 'GET',
      uri: "https://pro-api.coinmarketcap.com/v1/tools/price-conversion",
      qs: req.query,
      headers: {
        "X-CMC_PRO_API_KEY": "3814aac7-4d3f-41e8-8a91-1294e1015c5a",
      },
      json: true,
    };
    rp(requestOptions).then(response => {
        console.log(response)
        res.send(response);
    }).catch((err) => {
      console.log('API call error:', err.message);
    });
});
//обслуживание html
app.get('/*', function (req, res) {
res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);