---
path: '/first-post'
title: 'Sykes-API'
---

This module lets you connect to Sykes web services using SOAP.

Note : Currently only two functionalities has been implemented : Order Loading and Inventory Level. **These are not available to the public but are opened to pre-agreed IP addresses.**

### Installation

  ```bash
  npm install node-sykes-api
  ```

## Usage
  In loopback:
   ```javascript
   var sykesAPI = require('node-sykes-api');

   module.exports = function(InventoryLevel) {

     InventoryLevel.beforeRemote('create', function(context, user, next) {

       const servicesType = 'InventoryLevel';
       const body = context.req.body;
       const outputFormat = 'JSON'; //Optional

       /*
         Syntax:
         sykesAPI(servicesType, body, [outputFormat,] function(err, res){
          ...
        });
       */
       sykesAPI(servicesType, body, outputFormat, function(err, res) {
         if (err) {
           next(err);
         } else {
           context.res.status(201).send({result: res});
         }
       });

     });
   };
  ```

  In Express App:
   ```javascript
   var sykesAPI = require('node-sykes-api');
   var express = require('express');
   var bodyParser = require("body-parser");
   var app = express();

   app.use(bodyParser.urlencoded({extended: false}));
   app.use(bodyParser.json());

   app.post('/sykes-api', function(req, res, next) {

     const servicesType = 'InventoryLevel';
     const body = req.body;
     const outputFormat = 'JSON'; //Optional

     sykesAPI(servicesType, body, outputFormat, function(err, response) {
       if (err) {
         next(err);
       } else {
         res.status(201).send({result: response});
       }
     });

   });

   var port = process.env.PORT || 8080;

   var server = app.listen(port, function() {
     console.log("Server is running on port " + port);
   });  
   ```
  <br />