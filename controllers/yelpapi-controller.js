const express = require('express');
const router = express.Router();
const axios = require('axios');

//use string interpolation for city/state/price
router.get('/:city/:state/:price', (req, res) => {
                //PRICE IS A NUMBER 1-4!!
    axios({
        method: 'get',
        url: `https://api.yelp.com/v3/businesses/search?location=/${req.params.city}/${req.params.state}&price=${req.params.price}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer wcSKNHrOWUcsj3ycgjPoEdUqt0o_W2pmIVP0CLgT35zgKPSFfKlksCkCyynniIgcD_SynweDXRXNL4KVJiZcb2ijqQXEpajH79_bBJU5YmjdpXuHYAU0fV4ygAzjXHYx'
        }

    }).then(get => {
        res.send(get.data);
        console.log(get.data)
    })
        .catch(error => {
            console.log(error);
        })

});


module.exports = router;