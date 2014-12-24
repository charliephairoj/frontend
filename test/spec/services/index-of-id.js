'use strict';

xdescribe('Service: indexOfId', function () {

  // load the service's module
  beforeEach(module('employeeApp.services'));

  // instantiate service
  var indexOfID;
  beforeEach(inject(function(_indexOfId_) {
        indexOfID = _indexOfId_;
  }));

    describe('Phase: Initialization', function(){
        it('should test', function(){
            indexOfID.filter(1, [{id:4}, {id:1}], function(e){
            });
        });
    });
  

});
