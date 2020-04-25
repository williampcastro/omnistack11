const genrateUniqueId = require('../../src/utils/generateUniqueId');


describe('Generate Unique ID', () => {
    it('should generate an unique ID', () => {
        const id = genrateUniqueId();
        expect(id).toHaveLength(8);
    })
});
