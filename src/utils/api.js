import axios from "axios"


const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY || 'your-default-api-key';


const BASE_URL='https://youtube138.p.rapidapi.com/auto-complete/'
const options = {
    params: {hl: 'en', gl: 'US'},


    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }

}
export const fetchDataFromApi = async (url) => {
    try {
      const response = await axios.get(`${BASE_URL}/${url}`, options);
      const { data } = response;
      return data;
    } catch (error) {
      if (error.response && error.response.status === 429) {
        // Implement a backoff strategy, e.g., wait for a few seconds before retrying
        await new Promise(resolve => setTimeout(resolve, 5000));
        return fetchDataFromApi(url); // Retry the request
      } else {
        console.error('Error fetching data from the API:', error);
        throw error;
      }
    }
  };
  