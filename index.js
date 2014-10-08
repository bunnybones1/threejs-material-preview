var sphereRadius = .2;
var spherePadding = .1;
var sphereGeometry;
function Grid(materials) {
	THREE.Object3D.call(this);
	sphereGeometry = sphereGeometry || new THREE.SphereGeometry(sphereRadius, 32, 32);
	var wrap = Math.ceil(Math.sqrt(materials.length));
	var spacing = sphereRadius * 2 + spherePadding;
	for (var i = 0; i < materials.length; i++) {
		var iX = i % wrap;
		var iY = ~~(i / wrap);
		var sphere = new THREE.Mesh(sphereGeometry, materials[i]);
		sphere.position.set(iX * spacing, iY * spacing, 0);
		this.add(sphere);
	};
};
Grid.prototype = Object.create(THREE.Object3D.prototype);

function Ring(materials) {
	THREE.Object3D.call(this);
	sphereGeometry = sphereGeometry || new THREE.SphereGeometry(sphereRadius, 32, 32);
	var ringCircumference = (materials.length * sphereRadius * 2 * 1.5);
	var ringRadius = ringCircumference / (2 * Math.PI);
	for (var i = 0, len = materials.length; i < len; i++) {
		var ratio = i / len * Math.PI * 2;
		var sphere = new THREE.Mesh(sphereGeometry, materials[i]);
		sphere.position.set(Math.cos(ratio) * ringRadius, .1, Math.sin(ratio) * ringRadius);
		this.add(sphere);
	};
}
Ring.prototype = Object.create(THREE.Object3D.prototype);

module.exports = {
	Grid : Grid,
	Ring : Ring
}