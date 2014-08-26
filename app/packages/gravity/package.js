Package.describe({
  // define a message to describe the package
  summary: "API for accessing the Gravity Event Store.",
  version: "0.0.1"
});

Package.on_use(function(api) {
  api.use('livedata', ['client', 'server']);

  api.add_files('lib/gravity.js', ['client', 'server']);

  // api.export('EventStore', ['client', 'server']);
  api.export('GravityEventStoreClient', ['client', 'server']);
});