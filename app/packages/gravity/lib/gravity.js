GravityEventStoreClient = function(options) {
  var self = this;

  options = options || {};
  options.url = options.url || "http://localhost:2998";

  console.log('connecting to gravity server on ' + options.url);
  this.eventStore = DDP.connect(options.url);

  console.log('creating gravity collections');
  this.events = new Meteor.Collection('gravity.events', this.eventStore);
  this.appliedEvents = new Meteor.Collection('gravity.appliedEvents');
};

GravityEventStoreClient.prototype = {
  constructor: GravityEventStoreClient,

  send: function(event, options) {
    console.log('sending event: ' + event);
    this.eventStore.call('gravitySend', event);
  },

  listen: function(eventSelector) {
    console.log('listening for event: ' + eventSelector);
  }
};