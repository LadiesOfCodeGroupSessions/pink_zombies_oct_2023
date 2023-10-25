const zombieModel = require('../src/zombie');
describe('Create method', () => {
    it('sum',  () => {
        const name = zombieModel.name;

        expect(name).toEqual("Zombie")
    })
})