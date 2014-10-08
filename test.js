var loadAndRunScripts = require('loadandrunscripts');
var ManagedView = require('threejs-managed-view');
loadAndRunScripts(
	[
		'bower_components/three.js/three.js'
	],
	function() {
		var matPreview = require('./');
		var view = new ManagedView.View({
			// stats:true
		});

		//lights
		var light = new THREE.PointLight(0xffffff, 1);
		view.scene.add(light);
		var hemisphereLight = new THREE.HemisphereLight(0x7f6f5f, 0x7f0000);
		view.scene.add(hemisphereLight);

		var mats = [
			new THREE.MeshPhongMaterial({
				color: 0xffffff
			}),
			new THREE.MeshPhongMaterial({
				color: 0xff0000
			}),
			new THREE.MeshPhongMaterial({
				color: 0xffff00
			}),
			new THREE.MeshPhongMaterial({
				color: 0x00ff00
			}),
			new THREE.MeshPhongMaterial({
				color: 0x00ffff
			}),
			new THREE.MeshPhongMaterial({
				color: 0x0000ff
			}),
			new THREE.MeshPhongMaterial({
				color: 0xff00ff
			}),
			new THREE.MeshPhongMaterial({
				color: 0x222222
			})
		];

		var ring = new matPreview.Ring(mats);
		view.scene.add(ring);
		ring.position.x = -2;

		var grid = new matPreview.Grid(mats);
		view.scene.add(grid);
		grid.position.x = 2;

		function onEnterFrame() {
			ring.rotation.y += .1;
		}
		view.renderManager.onEnterFrame.add(onEnterFrame);
	}
)