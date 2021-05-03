const express = require('express');
const axios = require('axios');
const app = express();

//https://github.com/M-Media-Group/Covid-19-API

app.get('/covid', async (req, res) => {
    const response = await axios.get(
        "https://covid-api.mmediagroup.fr/v1/cases");
    res.send(response.data);
});

app.get('/covid/vaccines', async (req, res) => {
    const response = await axios.get(
        "https://covid-api.mmediagroup.fr/v1/vaccines");
    res.send(response.data);
});

app.get('/covid/indonesia', async (req, res) => {
    const response = await axios.get(
        "https://covid-api.mmediagroup.fr/v1/cases?country=Indonesia");
    res.send(response.data);
});

app.get('/covid/:countryid', async(req,res)=>{
    const countryid = req.params.countryid;
    const response = await axios.get(
        "https://covid-api.mmediagroup.fr/v1/cases?country="+countryid);
    res.send(response.data)
 })

const server = app.listen(8080, function () {
    const host = server.address().address
    const port = server.address().port
    console.log("Server telah aktif, menunggu respon dari http://%s:%s", host, port)
})