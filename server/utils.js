const _ = require("lodash");  
module.exports = {
    getRow:function(columns,timestampValue){
       if(columns){
        let row = {};
        columns.forEach(col => {
            const dataType = col.datatype;
            let colName =  col.name;
            if(colName === 'timestamp'){
                row[colName] = timestampValue;
            }
            else{
                switch(dataType){
                    case 'double':
                        if(col.min && col.max){    
                            row[colName] = getRandomFloat(col.min,col.max,col.precision);
                        }
                        else 
                            row[colName] = getRandomFloat(0,1000,2);  
                        break;
                    case 'point':
                        if(col.values) {
                            row[colName] = getValueFromArray(col.values);
                        }
                        break;
                    case 'number':
                        if(col.min && col.max){    
                            row[colName] = getRandomInt(col.min,col.max);
                        }
                        else 
                            row[colName] = getRandomInt(0,1000);  
                        break;
                    case 'string':
                        if(col.values) {
                            row[colName] = getValueFromArray(col.values);
                        }
                        else if(col.length){
                            row[colName] = getRandomString(col.length);
                        }
                        else {
                            row[colName] = getRandomString(10);
                        }
                        break;
                    case 'boolean':
                        row[colName] = getRandomBoolean();
                        break;
                    default:
                        break;
                };
            }
        });
        return row;
        }
    },
}

function getRandomFloat(min, max, decimals) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(decimals));
  }
  
function getRandomInt(min,max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    const result = new Array(length);
    for (let i = 0; i < length; i++) {
        result[i] = characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result.join('');
}

function getRandomBoolean() {
    return Math.random() < 0.5;
  }

function getValueFromArray(arrayData) {
    const randomIndex = Math.floor(Math.random() * arrayData.length);
    return arrayData[randomIndex];
}