import axios from 'axios'
import {process} from "./modules/dataProcessing.js";

axios.get('https://api.apify.com/v2/datasets/VuFwckCdhVhoLJJ08/items?clean=true&format=json')
    .then(res => {
        new process(res.data).findCheapest()
    })