
export interface Photo {
    id: string;
    description: string;
    alt_description: string;
    likes?: number;
    urls: {
      small: string;
      full?: string;
      regular?: string;
    }
}