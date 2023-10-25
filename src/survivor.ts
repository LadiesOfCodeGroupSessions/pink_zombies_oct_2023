export class Survivor{
    private name: string;
    private woundCount: number = 0
    public constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public getWoundCount(): number {
        return this.woundCount
    }
    public getAttacked(times:number): number {
        return this.woundCount+=times;
    }

    public isAlive(): boolean {
        return this.woundCount < 2;
    }
}



