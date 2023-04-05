const { json } = require("body-parser");
var fs = require('fs');
var utils = require('./utils');
const INTERVAL = 10 * 1000; // 10 seconds in milliseconds



module.exports = {
    getDummyData:function(req,cb){
        let lastTimestamp = Date.now();
        const filePath = './server/dummyData.json'; // Replace with your JSON file path
        fs.readFile(filePath, 'utf8', (err, data) => {
          if (err) {
            console.error(err);
            return cb('Error reading file',null);
          }
          let jsonData = JSON.parse(data);
          // changing timestamp to current timestamp incrementing every 10 secs;
          jsonData.map((dt)=>{ dt['timestamp'] = new Date(lastTimestamp).toISOString(); lastTimestamp += INTERVAL; })
          return cb(null,jsonData);
        });
    },

    getData:function(req,cb){
        let lastTimestamp = Date.now();
        let num_rows = 5;
        if(req.query.num_rows){
            num_rows  = req.query.num_rows;
        }
        const filePath = './server/payload.json'; // Replace with your JSON file path
        fs.readFile(filePath, 'utf8', (err, data) => {
          if (err) {
            console.error(err);
            return cb('Error reading file',null);
          }
          let resData = [];
          let payloadData = JSON.parse(data);
          for(let i=0;i<num_rows; i++){
             let timestampValue = new Date(lastTimestamp).toISOString(); 
             lastTimestamp += INTERVAL;
             let row = utils.getRow(payloadData.dataColumns,timestampValue);
             resData.push(row);
          }
          return cb(null,resData);
        });
    },
    insertData:function(data,cb){
        let lastTimestamp = Date.now();
        let queryObj = Object.assign({},data);
        if(!queryObj.num_rows && !queryObj.dataColumns){
            return cb('Error parsing the payload',null);
        }
        let resData = [];
        for(let i=0;i<queryObj.num_rows; i++){
           let timestampValue = new Date(lastTimestamp).toISOString(); 
           lastTimestamp += INTERVAL;
           let row = utils.getRow(queryObj.dataColumns,timestampValue);
           resData.push(row);
        }
        return cb(null,resData);
    },
}