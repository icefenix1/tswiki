import { Search } from "./search";
import { Searchinfo } from "./searchinfo";

export class Query {
    public searchinfo: Searchinfo;
    public search: Search[];

    constructor(searchinfo: Searchinfo, search: Search[]) {
        this.searchinfo = searchinfo;
        this.search = search;

    }
}