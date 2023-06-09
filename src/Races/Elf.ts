import Race from "./Race";

class Elf extends Race {
    private _maxLifePoints: number;
    private static _instances = 0;

    constructor(name: string, dexterity: number) {
        super(name, dexterity);
        this._maxLifePoints = 99;
    }

    public get maxLifePoints(): number {
        return this._maxLifePoints;
    }

    public static createdRacesInstances(): number {
        this._instances += 1;
        return Elf._instances;
    }
}

export default Elf;