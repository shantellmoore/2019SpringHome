const express = require('express');
const activity = require('../models/activities');

const app = express.Router();

app.get("/getAll", (req, res) => {

    activity.getAll ((err, data) => {
        if(err) throw err;
        res.send(data);
    });

});
app.get("/getActivity", (req, res) => {

    activity.getActivity ((err, data) => {
        if(err) throw err;
        res.send(data);
    });

});
app.post("/deleteActivity", (req, res) => {

    activity.deleteActivity (req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });

});
app.post("/updateActivity", (req, res) => {

    console.log(req.body);
    activity.updateActivity (req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });

});


module.exports = app;
