import axios from 'axios';
import { error } from 'console';
import { response } from 'express';
import { SearchResponse } from './models/searchresponse';
import { WikiResponse } from './models/wikiresponse';


export class DoSearch {

    //Search wikipedia for the search string
    public async Search(searchString: string, searchLang: string): Promise<SearchResponse[]> {
        
        let url = encodeURI("https://" + searchLang + ".wikipedia.org/w/api.php?action=query&format=json&srlimit=100&prop=&list=search&meta=&srsearch=" + searchString + "&srnamespace=0&sroffset=100&srprop=size&srsort=relevance");
        let toReturn= new Array<SearchResponse>();
        await axios.get<WikiResponse>(url).then(async (resp) => {          
            resp.data.query.search.forEach(s => {
                toReturn.push(new SearchResponse(s, searchLang));                
            });          
            
        }, error);
        return toReturn;
    }

    //Merge 2 SearchResponse Arrays then sort them and return the top 20 based on page size.
    public SortAndTrim(response1: SearchResponse[], response2: SearchResponse[]): SearchResponse[] {
        response1.push(...response2);

        return response1.sort((a, b) => (a.size < b.size) ? 1 : -1).slice(0, 20);
    }

}
