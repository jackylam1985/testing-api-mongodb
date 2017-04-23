'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContentItemSchema = new Schema({
  headline: {
    type: String,
    Required: 'Headline is required'
  },
  introText: {
    type: String,
    Required: 'Intro text is required'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['draft', 'pending approval', 'approved']
    }],
    default: ['draft']
  }
});

module.exports = mongoose.model('ContentItem', ContentItemSchema);