const express = require('express');

const route = express.Router();

const services = require('../services/render')
const controller = require('../controller/controller')

/* 
* @description Root Route 
* @method Get
 */
route.get('/',services.homeRoutes)

/* 
* @description create batch Route 
* @method Get
 */

route.get('/create-batch', services.addRoutes)

/* 
* @description update batch Route 
* @method Get
 */

route.get('/update-batch', services.updateRoutes)

/* 
* @description record Route 
* @method crud
 */

route.get('/record-batch', services.BatcRecordRoutes)

route.get('/addrecord-batch', services.addRecordRoutes)

//api

route.post('/api/batch', controller.create);
route.get('/api/batch', controller.find);
route.put('/api/batch/:id', controller.update);
route.delete('/api/batch/:id', controller.delete);

//my sections api

route.post('/api/record', controller.createRecord);
route.get('/api/record', controller.recordfind);
route.put('/api/record/:id', controller.updateRecord);
route.delete('/api/record/:id', controller.deleteRecord);
 

module.exports = route 