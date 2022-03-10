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
    if (!res.locals.partials) res.locals.partials = {}
    res.locals.partials.newsContext = getNewsData()
    next()
}

module.exports = newsMiddleware