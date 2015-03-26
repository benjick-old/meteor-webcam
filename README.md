WebcamJS for Meteor

https://github.com/jhuckaby/webcamjs

Usage:

client/camera.html
```html
<template name="camera">
	<div id="webcam"></div>
	<button class="snap">Take photo</button>
	{{#if image}}
		<img src="{{image}}">
	{{/if}}
</template>
```

client/camera.js
```javascript
Template.camera.onRendered(function() {

	Webcam.on( 'error', function(err) {
		console.log(err); // outputs error to console instead of window.alert
	});

	Webcam.set({
		width: 320,
		height: 240,
		dest_width: 640,
		dest_height: 480,
		image_format: 'jpeg',
		jpeg_quality: 90
	});
	Webcam.attach( '#webcam' );
})

Template.camera.events({
	'click .snap': function () {
		Webcam.snap( function(image) {
			Session.set('webcamSnap', image);
		})
	}
});

Template.camera.helpers({
	image: function () {
		return Session.get('webcamSnap');
	}
});
```