import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
        'X-RapidAPI-Key': '251defec78msh46e144e02d82477p106a37jsn6806957ae2e2',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    },
  });
    
  return data;
}

