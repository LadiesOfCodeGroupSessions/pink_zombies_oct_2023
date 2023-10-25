import { Survivor } from "./survivor";
describe('The Survivor', () => {

    it('has a name',  () => {
        const survivor = new Survivor("Jimmy");
        expect(survivor.getName()).toEqual("Jimmy")
    })

    it('has a wound count', () => {
        const survivor = new Survivor("Jimmy");
        expect(survivor.getWoundCount()).toBe(0);
    });

    it('gets wound when attacked once', () => {
        const survivor = new Survivor("Jimmy");
        survivor.getAttacked(1);

        expect(survivor.getWoundCount()).toBe(1);
        expect(survivor.isAlive()).toBe(true);
    })

    it('dies when attacked twice', () => {
            const survivor = new Survivor("Jimmy");
            survivor.getAttacked(2);

            expect(survivor.getWoundCount()).toBe(2);
            expect(survivor.isAlive()).toBe(false);
    })

    //next time - more attacked does not increase the wound count
    // ( additional Wounds are ignored.)
})