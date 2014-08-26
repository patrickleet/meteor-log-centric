Package.describe({
  // define a message to describe the package
  summary: "Gravity Event Store.",
  version: "0.0.1"
});

Package.on_use(function(api) {
  api.use('livedata', ['client', 'server']);

  api.add_files('lib/gravity-event-store.js', ['client', 'server']);

  // api.export('EventStore', ['client', 'server']);
  api.export('EventStore', ['client', 'server']);
});