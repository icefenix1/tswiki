export class Search {
    public ns: number;
    public title: string;
    public pageid: number;
    public size: number;

    constructor(ns: number, title: string, pageid: number, size: number) {
        this.ns = ns;
        this.title = title;
        this.pageid = pageid;
        this.size = size;
    }
}