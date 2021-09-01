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

//api

route.post('/api/batch', controller.create);
route.get('/api/batch', controller.find);
route.put('/api/batch/:id', controller.update);
route.delete('/api/batch/:id', controller.delete);


module.exports = route 