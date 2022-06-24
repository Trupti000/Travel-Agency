'use strict';

/**
 * travel-booking service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::travel-booking.travel-booking');
