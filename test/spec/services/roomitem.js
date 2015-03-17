'use strict';

describe('Service: RoomItem', function () {

  // load the service's module
  beforeEach(module('frontendApp'));

  // instantiate service
  var RoomItem;
  beforeEach(inject(function (_RoomItem_) {
    RoomItem = _RoomItem_;
  }));

  it('should do something', function () {
    expect(!!RoomItem).toBe(true);
  });

});
