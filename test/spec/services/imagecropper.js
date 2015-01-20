'use strict';

xdescribe('Service: ImageCropper', function () {

  // load the service's module
  beforeEach(module('frontendApp'));

  // instantiate service
  var ImageCropper;
  beforeEach(inject(function (_ImageCropper_) {
    ImageCropper = _ImageCropper_;
  }));

  it('should do something', function () {
    expect(!!ImageCropper).toBe(true);
  });

});
