const express = require('express');
const router = express.Router();

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





router.get('/JM', (req, res) => {
    res.render('person', { person: data.JM, listing: data })
})

router.get('/Genv', (req, res) => {
    res.render('person', { person: data.Genv, listing: data })
})

router.get('/Manue', (req, res) => {
    res.render('person', { person: data.Manue, listing: data })
})

router.get('/addnew', (req, res) => {
    console.log("Data sent via post");
    var fname = req.query.firstname;
    var sname = req.query.surname;
    console.log('Date entered ' + fname + ' ' + sname);

    res.render('personform')

})
router.post('/addnew', (req, res) => {
    console.log("Data sent via post");
    console.table(req.body);
    res.redirect(303, 'personadded',)
})

router.get('/personadded', (req, res) => {
    res.render('personadded')
})



router.get('/contact', (req, res) => {
    res.render('contact')
})
router.post('/contact', (req, res) => {
    console.table(req.body);
    res.redirect(303, 'submit',)
})

router.get('/submit', (req, res) => {
    res.render('submit')
})



router.get('/', (req, res) =>
    res.render('listing', { listing: data }))


module.exports = router;

