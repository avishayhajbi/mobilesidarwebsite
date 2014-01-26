/* rotate screen */
$(document).ready(function() {
    window.addEventListener("orientationchange", function() {
       alert(window.orientation);
    });
});

var OrientationLock = function() {}

OrientationLock.prototype.lock = function(orientation, success, fail) {
        return cordova.exec(success, fail, "OrientationLock", "lock", [orientation])
}

OrientationLock.prototype.unlock = function(success, fail) {
        return cordova.exec(success, fail, "OrientationLock", "unlock", [])
}

if ( ! window.plugins ) {
  window.plugins = {}
}
if ( ! window.plugins.orientationLock ) {
  window.plugins.orientationLock = new OrientationLock()
}

module.exports = OrientationLockrn [windowWidth, windowHeight];
}
/* end rotate screen */

/*menu*/

/*end menu*/

