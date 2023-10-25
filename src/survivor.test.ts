import { Survivor } from "./survivor";
describe('The Survivor', () => {
    it('has a name',  () => {
        const survivor = new Survivor("Jimmy");

        expect(survivor.getName()).toEqual("Jimmy")
    })
    it('has a wound count', () => {
        const survivor = new Survivor("Jimmy");
        const woundCount = survivor.getWoundCount();
        expect(woundCount).toBe(0);
    });
    it('get wound when attacked', () => {
        const survivor = new Survivor("Jimmy");
        survivor.getAttacked();
        const woundCount = survivor.getWoundCount();
        expect(woundCount).toBe(1);
    })
})