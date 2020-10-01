import { Continue } from "./continue";
import { Query } from "./query";

export class WikiResponse {
    public batchcomplete: string;
    public continue: Continue;
    public query: Query;

    constructor(batchcomplete: string, _continue: Continue, query: Query) {
        this.batchcomplete = batchcomplete;
        this.continue = _continue;
        this.query = query;
    }
}