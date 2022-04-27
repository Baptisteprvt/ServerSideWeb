const     flashMiddleware = (req, res, next) => {
    // if there's a flash message, transfer
    // it to the context, then clear it
    res.locals.flash = req.session.flash
    delete req.session.flash
    next()
}





const getNewsData = () => [
  {
    body: "My mail : s00229555@mail.itsligo.ie",
    Auther: 'Baptiste PREVOT'
},
{
    body: "Add me on instagram : @baptisteprevot",
    Auther: 'Youknowwho',
}
]

const newsMiddleware = (req, res, next) => {
if(!res.locals.partials) res.locals.partials = {}
res.locals.partials.newsContext = getNewsData()
next()
}

module.exports = { newsMiddleware: newsMiddleware, flashMiddleware: flashMiddleware }