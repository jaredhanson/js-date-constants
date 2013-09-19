var constants = require('../index');

describe('date-constants', function() {
  
  describe('MAX_DATE', function() {
    it('should be a date', function() {
      expect(constants.MAX_DATE).to.be.a('date');
      expect(constants.MAX_DATE).to.be.an.instanceOf(Date);
    });
    
    it('should have correct value', function() {
      expect(constants.MAX_DATE.valueOf()).to.equal(8640000000000000);
    });
    
    it('should convert to JSON', function() {
      expect(constants.MAX_DATE.toJSON()).to.equal('+275760-09-13T00:00:00.000Z');
    });
  });
  
  describe('MIN_DATE', function() {
    it('should be a date', function() {
      expect(constants.MIN_DATE).to.be.a('date');
      expect(constants.MIN_DATE).to.be.an.instanceOf(Date);
    });
    
    it('should have correct value', function() {
      expect(constants.MIN_DATE.valueOf()).to.equal(-8640000000000000);
    });
    
    it('should convert to JSON', function() {
      expect(constants.MIN_DATE.toJSON()).to.equal('-271821-04-20T00:00:00.000Z');
    });
  });
  
});
