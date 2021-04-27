const express = require('express')
const app = express()
const port = 80

// 1. Domain : portal.getsbo.com, sboportal-beta.getsbo.com,  protocol = http, port = 80, redirect protocol  = https, redirect port 443
// 2. Domain : myaccount.getsbo.com, myaccount.synopi.com, myaccount-beta.getsbo.com,myaccount.synopi.com , protocol = http, port = 13443, redirect protocol  = https, redirect port 13443
// 3. Domain: ems.synopi.com, ems-beta.synopi.com, protocol = http, port = 14443, redirect protocol  = https, redirect port 14443

app.all('/*/', (req, res) => {
    console.log(req.protocol, req.headers.host, req.url)
    // if (req.protocol == 'http') return res.redirect(`https://${req.headers.host}/${req.url}`);
    res.send("hello")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})