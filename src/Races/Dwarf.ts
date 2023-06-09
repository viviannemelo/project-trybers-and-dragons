import Race from "./Race";

class Dwarf extends Race {
    private _maxLifePoints: number;
    private static _instances = 0;

    constructor(name: string, dexterity: number) {
        super(name, dexterity);
        this._maxLifePoints = 80;
    }

    public get maxLifePoints(): number {
        return this._maxLifePoints;
    }

    public static createdRacesInstances(): number {
        this._instances += 1;
        return Dwarf._instances;
    }
}

export default Dwarf;