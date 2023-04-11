# Data Generator
### _Effortlessly generate random data for testing and prototyping with this Data-Generator API in Node.js_
\
Data-Generator is a Node.js library that provides an easy way to generate random data for testing and prototyping purposes. This project uses only Express and a some custom codes to generate data.
The data values of the desired datatypes, are set randomly within the given range or within the scope of provided values.


This api is live on the [Render](https://render.com/)

_Refer to the [Available Section](#available-endpoints) section on how to generate data using this live api_


# Installation
To install Data-Generator, run the following command:
```bash
npm install
```
To start the server on , run the following command:
```bash
npm start
```
If the server start is successful, you'll see a message as:

```bash
> data-generator@1.0.0 start
> node index.js

Server has been started at 8082
```

# Available Endpoints
Data-Generator provides the following endpoints for generating random data:


**HTTP Method : GET** 

`https://data-generation-api.onrender.com/dummy?interval=(time_interval_in_seconds)`

_**Optional parameter**_
- interval : Timestamp interval in seconds (default is set to 10 seconds)
 
>_This endpoint generates 500 rows of static data with 10 seconds(default) time interval between two data points. The time at which the endpoint was hit, is considered as the starting point for timestamp data_ 


Sample data point generated using this endpoint:
```json
{
    "asset_uri": "B101",
    "timestamp": "2023-04-11T11:05:28.001Z",
    "isActive": true,
    "latitude": 64.989643,
    "longitude": -125.686397,
    "natural_gas": 206.9613,
    "electricity": 322.452,
    "temperature": 54.77,
    "pressure": 1691.73,
    "carbon_emission": 2729.54419,
    "totalEnergy": 29332.6,
    "totalCost": 66003.1
}
```

> **Note**: This data is static and values will be the same on every hit.
The data is retrived from _**server/dummyData.json**_ file.

----

**HTTP Method : GET** 

`https://data-generation-api.onrender.com/data?num_rows=(number of rows)&interval=(time_interval_in_seconds)`

_**Optional parameter**_

  - num_rows: Number of rows to generate in the data
  - interval : Timestamp interval in seconds (default is set to 10 seconds)
 
> _This endpoint generates n rows of random data for already defined attributes with 10 seconds(default) time interval between two data points.
The first timestamp is always the the time of the API hit_ 


Sample data point generated using this endpoint:
```json
 {
     "timestamp": "2023-04-11T11:48:14.807Z",
     "isActive": true,
     "natural_gas": 767.19,
     "electricity": 774.75,
     "temperature": 549.93,
     "pressure": 625.75,
     "carbon_emission": 260.43,
     "totalCost": 931.53,
     "totalEnergy": 512.86,
     "latitude": -49.462373,
     "longitude": -44.299714
},
{
    "timestamp": "2023-04-11T12:48:14.807Z",
    "isActive": true,
    "natural_gas": 130.31,
    "electricity": 255.82,
    "temperature": -859.73,
    "pressure": 476.51,
    "carbon_emission": 229.46,
    "totalCost": 174.84,
    "totalEnergy": 513.1,
    "latitude": -29.663623,
    "longitude": -113.591381
},
```
> **Note**: The data keys are static but the values will be randomly generated on every hit.

----


*HTTP Method : **POST*** 

`https://data-generation-api.onrender.com/data`

> _This endpoint generates n rows of random data for given attribute of defined datatype with 10 seconds(default) time interval between two data points.
The first timestamp is always the the time of the API hit_ 

**Supported Datatypes**
1) **double** : Generates random double value within range.

    _* Default_ 
        
        - [min]: 0,
        
        - [max]: 1000,
        
        - [precision]: 2
    _* Override_ 
        
        - [min]: Minimum double value
        
        - [max]: Maximum double value
        
        - [precision]: Floating points after decimals
        
    _* Example_ 
    
    ```json
     {
            "name": "temperature",
            "datatype": "double",
            "min": -100,
            "max": 100,
            "precision": 3
    }
    Output:
    "temperature" : 50.894
    ```

#
2) **number** : Generates random integer value within range.
    
    _* Default_ 
        
        - [min]: 0
        
        - [max]: 1000
        
   
   _* Overrride_ 
        
        - [min]: Minimum numeric value
        
        - [max]: Maximum numeric value
        
   
   _* Example_ 
    ```json
    {
            "name": "pressure",
            "datatype": "number",
            "min": -100,
            "max": 100
    }
    Output:
    "pressure" : 72
    ```

#
3) **string** : Generates random string value.
        
     
     _* Default_ 
     
        - [length]: 10
     
        
    _* Overrride_ 
        
        
        - [values]: Range of possible values 
       
       **OR**
        
        - [length]: Length of the string to be generated
    

    _* Example_ 
    ```json
    {
            "name": "asset_uri",
             "datatype": "string",
            "values": ["B101","B102"] 
    }
    Output:
    "asset_uri": "B101"
    ```

     ```json
    {
            "name": "name",
            "datatype": "string",
            "length": 10
    }
    Output:
    "name": "B77FatK6Fd"
    ```
    > **Note** : One of either values or length is required for random string data to be generated.
    
#

4) **boolean** : Generates random boolean value
        
    _* Example_ 
    ```json
    {
            "name": "asset_avail",
            "datatype": "boolean"
    }
    Output:
    "asset_avail": true,
    ```
    
#

4) **point** : Generates random array of values from the defined values
        
    _* Example_ 
    ```json
    {
            "name": "location",
            "datatype": "point",
            "values": "[[18.5204,73.8567],[21.1702, 72.8311]]"
    }```
    
    Output:
    "location": [
        18.5204,
        73.8567
    ]

#


_**Sample Payload**_
```json
{
    "dataColumns": [
        {
            "name": "asset_uri",
            "datatype": "string",
            "values": [
                "B101",
                "B102"
            ]
        },
        {
            "name": "timestamp",
            "datatype": "datetime"
        },
        {
            "name": "temperature",
            "datatype": "double",
            "min": -100,
            "max": 100,
            "precision": 3
        },
        {
            "name": "pressure",
            "datatype": "number",
            "min": -100,
            "max": 100
        },
        {
            "name": "asset_avail",
            "datatype": "boolean"
        },
        {
            "name": "country",
            "datatype": "string",
            "values": [
                "India",
                "China",
                "Australia"
            ]
        },
        {
            "name": "name",
            "datatype": "string",
            "length": 10
        },
        {
            "name": "location",
            "datatype": "point",
            "values": [
                [
                    18.5204,
                    73.8567
                ],
                [
                    21.1702,
                    72.8311
                ]
            ]
        }
    ],
    "num_rows": 10,
    "interval": 3600
}

```
 
#

_**Data Generated**_

```json
{
    "status": "SUCCESS",
    "data": [
        {
            "asset_uri": "B101",
            "timestamp": "2023-04-11T12:47:59.917Z",
            "temperature": 67.386,
            "pressure": 82,
            "asset_avail": true,
            "country": "India",
            "name": "B77FatK6Fd",
            "location": [
                18.5204,
                73.8567
            ]
        },
        {
            "asset_uri": "B102",
            "timestamp": "2023-04-11T13:47:59.917Z",
            "temperature": 42.442,
            "pressure": 82,
            "asset_avail": false,
            "country": "India",
            "name": "fx5Fm7G1sQ",
            "location": [
                21.1702,
                72.8311
            ]
        },
        {
            "asset_uri": "B101",
            "timestamp": "2023-04-11T14:47:59.917Z",
            "temperature": 92.093,
            "pressure": 36,
            "asset_avail": false,
            "country": "China",
            "name": "Ptzt2Rt2uO",
            "location": [
                18.5204,
                73.8567
            ]
        },
        {
            "asset_uri": "B102",
            "timestamp": "2023-04-11T15:47:59.917Z",
            "temperature": 45.205,
            "pressure": 74,
            "asset_avail": true,
            "country": "India",
            "name": "sAIH8C2EyL",
            "location": [
                18.5204,
                73.8567
            ]
        },
        {
            "asset_uri": "B102",
            "timestamp": "2023-04-11T16:47:59.917Z",
            "temperature": -91.758,
            "pressure": -81,
            "asset_avail": true,
            "country": "Australia",
            "name": "Ho1ktYSOnQ",
            "location": [
                18.5204,
                73.8567
            ]
        },
        {
            "asset_uri": "B102",
            "timestamp": "2023-04-11T17:47:59.917Z",
            "temperature": -39.06,
            "pressure": -44,
            "asset_avail": false,
            "country": "Australia",
            "name": "Nj3lYQ4nlf",
            "location": [
                18.5204,
                73.8567
            ]
        },
        {
            "asset_uri": "B101",
            "timestamp": "2023-04-11T18:47:59.917Z",
            "temperature": 63.887,
            "pressure": 8,
            "asset_avail": true,
            "country": "India",
            "name": "lCVIDT3uVj",
            "location": [
                21.1702,
                72.8311
            ]
        },
        {
            "asset_uri": "B101",
            "timestamp": "2023-04-11T19:47:59.917Z",
            "temperature": 56.923,
            "pressure": 30,
            "asset_avail": false,
            "country": "China",
            "name": "qtytngkxCk",
            "location": [
                21.1702,
                72.8311
            ]
        },
        {
            "asset_uri": "B101",
            "timestamp": "2023-04-11T20:47:59.917Z",
            "temperature": -25.765,
            "pressure": 79,
            "asset_avail": false,
            "country": "Australia",
            "name": "PLvBbWlv6g",
            "location": [
                18.5204,
                73.8567
            ]
        },
        {
            "asset_uri": "B101",
            "timestamp": "2023-04-11T21:47:59.917Z",
            "temperature": -96.202,
            "pressure": -39,
            "asset_avail": true,
            "country": "Australia",
            "name": "WDrPVcIiZu",
            "location": [
                21.1702,
                72.8311
            ]
        }
    ],
    "message": null
}
```


## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)






