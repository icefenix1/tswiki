"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WikiResponse = void 0;
var WikiResponse = /** @class */ (function () {
    function WikiResponse(batchcomplete, _continue, query) {
        this.batchcomplete = batchcomplete;
        this.continue = _continue;
        this.query = query;
    }
    return WikiResponse;
}());
exports.WikiResponse = WikiResponse;
