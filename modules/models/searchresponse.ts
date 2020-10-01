import { Search } from "./search";


export class SearchResponse {
    public lang: string;
    public title: string;
    public size: number;

    /**
     *
     */
    constructor(search: Search, searchLang: string) {
        this.lang = searchLang;
        this.size = search.size;
        this.title = search.title;
    }
}
