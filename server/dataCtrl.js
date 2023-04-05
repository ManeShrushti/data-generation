

var dataService = require('./dataService');
var errorResponse = require('./response').error;
var successResponse = require('./response').success;


module.exports = {
    getDummyData:function(req,res){
        dataService.getDummyData(req,function(err,dt){
        if(err){
            return res.send(errorResponse(err));
        }
        res.send(successResponse(dt,null))
       });
    },
    getData:function(req,res){
        dataService.getData(req,function(err,dt){
        if(err){
            return res.send(errorResponse(err));
        }
        res.send(successResponse(dt,null))
       });
    },
    insertData:function(req,res){
        dataService.insertData(req.body,function(err,dt){
         if(err){
                     return res.send(errorResponse(err));
                 }
                 res.send(successResponse(dt,null))
        });
     },
}