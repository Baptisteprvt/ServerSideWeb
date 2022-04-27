const express = require('express');
const { readFamily , createFamily, deleteFamily, updateFamily } = require('../models/family');
const router = express.Router();


router.get('/addnew', async (req, res) => {

    res.render('familyform')


})
router.post('/addnew', async (req, res) => {

    // note we leave error handling for now and assume our data is created.
    
        await createFamily(req.body);
        req.session.flash =    
        { type: 'success', intro: 'Data Saved:', message:  "Data for <strong>" +
         req.body.name+ "</strong> has been added"};
 
        res.redirect(303, '/family')
       
    
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


router.get('/:name', async (req, res) => {
    var name = req.params.name;

    const person = await readFamily({'name': name})

    if (!person) {
        res.render('404');          //If the person doesn't exist then you can't acces to him
    }
    else {
        res.render('person', { person: person });
    }
})




router.get('/', async (req, res) =>
{
    const family = await readFamily();

    console.table(family);

    res.render('listing', { personlist: family })
    
})

router.get('/:name/delete', async (req, res) => {
    var name = req.params.name;

    await deleteFamily(name);

    res.redirect(303, '/family');

});

router.get('/:name/edit', async (req, res) => {

    var name = req.params.name;

    const person = await readFamily({'name': name})

    if (!person) {
        res.render('404');
    }
    else {
        res.render('familyeditform', { person: person });
    }
})

router.post('/:name/edit', async (req,res) =>{

    await updateFamily(req.body);

    req.session.flash =    
    { type: 'success', intro: 'Data Updated:', message:  "Data for <strong>" +
     req.body.name+ "</strong> has been updated"};
    
    res.redirect(303, '/family')

})


router.get('/', async (req, res) =>
{
    const family = await readFamily();

    if (req.session.familydata){
        var newName = req.session.familydata.name;
    }
    else {
        var newName = ""
    }

    res.render('listing', { personlist: family, newName : newName })
    
})


module.exports = router;
