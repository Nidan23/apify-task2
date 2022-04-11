import axios from 'axios'

export default async function request(body) {
    await axios.post('https://api.apify.com/v2/datasets/VuFwckCdhVhoLJJ08/items?clean=true&format=json', body)
}