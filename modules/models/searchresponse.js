"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchResponse = void 0;
var SearchResponse = /** @class */ (function () {
    /**
     *
     */
    function SearchResponse(search, searchLang) {
        this.lang = searchLang;
        this.size = search.size;
        this.title = search.title;
    }
    return SearchResponse;
}());
exports.SearchResponse = SearchResponse;
