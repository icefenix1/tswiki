import express = require("express");
import { DoSearch } from '../modules/dosearch';

// Create a new express app instance
const app: express.Application = express();
app.get("/", async function (req, res) {
    let search = new DoSearch;

    let enSearch = await search.Search("絵文字", "en");
    let jpSearch = await search.Search("絵文字", "jp");

    enSearch.push(...jpSearch);

    var result = search.SortAndTrim(enSearch,jpSearch);

    res.send(result);
});
app.listen(3000, function () {
    console.log("App is listening on port 3000! Load http://localhost:3000/");
});


