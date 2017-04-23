'use strict';
module.exports = function(app) {
  var contentItem = require('./controllers/contentItemController');


  // todoList Routes
  app.route('/contentitems')
    .get(contentItem.listAllContentItems)
    .post(contentItem.createContentItem);


  //app.route('/contentitems/:contentItemId')
  //  .get(contentItem.readContentItem)
  //  .put(contentItem.updateContentItem);
};
