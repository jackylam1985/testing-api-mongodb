'use strict';

var mongoose = require('mongoose'),
  ContentItem = mongoose.model('ContentItem');

exports.listAllContentItems = function(req, res) {
  console.log("getting list of items");
  ContentItem.find({}, function(err, contentItem) {
    if (err)
      res.send(err);
    res.json(contentItem);
  });
};

exports.createContentItem = function(req, res) {
  var newContentItem = new ContentItem(req.body);
  newContentItem.save(function(err, contentItem) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.read_a_task = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate(req.params.taskId, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_task = function(req, res) {


  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};
