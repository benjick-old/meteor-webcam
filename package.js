Package.describe({
  name: 'webcam',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('WINDOWS-PREVIEW@0.3.0');
  api.addFiles('webcam.js');
});

  api.export('webcam');
  api.addFiles([
    'webcamjs/webcam.js',
    'webcamjs/webcam.swf'
  ], 'client');
});