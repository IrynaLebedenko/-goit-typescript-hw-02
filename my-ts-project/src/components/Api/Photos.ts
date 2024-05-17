import axios from "axios";
import { Photo } from '../Types/types'

const API_KEY = "3jJQzJDxECaGcqKlznxLi12ZuERIW6RvWp_lWJqN0A8";
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers["Authorization"] = `Client-ID ${API_KEY}`;
// axios.defaults.headers.common["Version"] = "Accept-Version: v1";
axios.defaults.params = {
  orientation: "landscape",
  per_page: 16,
};

interface SearchPhotosResponse {
    total: number;
    total_pages: number;
    results: Photo[];
  }

export const getPhotos = async (query: string, page:number): Promise<SearchPhotosResponse> => {
  const { data } = await axios.get<SearchPhotosResponse>(`search/photos?page=${page}&query=${query}`);

  return data;
};