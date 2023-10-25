const survivorModel = require('../src/survivor');
describe('The Survivor', () => {
    it('has a name',  () => {
        const survivor = new Survivor("Jimmy");

        expect(survivor.getName()).toEqual("Jimmy")
    })
})