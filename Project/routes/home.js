const express = require('express');
const router = express.Router();
const linksForHome =
    [{ url: 'https://www.epita.fr/', text: 'My French University' }];


/*router.get('/',  (req, res) => {
    res.cookie ('tracking', 'Look a cookie');
    res.render('home');
});*/

/*router.get('/', (req, res) => {
    res.render('home');
});*/
var data = {
    "JM": {
        "name": "JM",
        "dob": "31/03/1962",
        "imageurl": "/images/foilimage1.png",
        "Role": ["Father"]
    },

    "Genv": {
        "name": "Genv",
        "dob": "03/05/1969",
        "imageurl": "/images/armsimage1.PNG",
        "Role": ["Mother"]
    },

    "Manue": {
        "name": "Manue",
        "dob": "31/03/1962",
        "imageurl": "/images/téléchargement.jpg",
        "Role": ["Sister"]
    }
}

router.get('/about', (req, res) => {
    res.render('about', { listing: data })
})

router.get('/contact', (req, res) => {
    res.render('contact', { listing: data })
})
router.get('/submit', (req, res) => {
    res.render('submit', { listing: data })
})

router.get('/', (req, res) => {

    var message = "";

    if (req.signedCookies.tracking) {
        var dateLastVisit = req.signedCookies.tracking;
        var message = "Welcome back, you last visited on : " + dateLastVisit;
    }

    var currentDate = new Date();
    res.cookie('tracking', currentDate.toDateString(), { signed: true });

    res.render('home', { 'message': message, links: linksForHome, listing: data });
});


module.exports = router;