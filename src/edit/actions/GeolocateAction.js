L.GeolocateAction = L.EditAction.extend({
  initialize(map, overlay, options) {
    var edit = overlay.editing;

    options = options || {};
    options.toolbarIcon = {
      svg: true,
      html: 'explore',
      tooltip: overlay.options.translation.geolocateImage,
      className: edit._mode === 'lock' ? 'disabled' : '',
    };

    L.EditAction.prototype.initialize.call(this, map, overlay, options);
  },

  addHooks() {
    var image = this._overlay.getElement();

    EXIF.getData(image, L.EXIF(image));
  },
});
