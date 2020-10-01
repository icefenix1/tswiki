export class Continue {
    public sroffset: number;
    public continue: string;

    constructor(sroffset: number, _continue: string) {
        this.sroffset = sroffset;
        this.continue = _continue;
    }
}