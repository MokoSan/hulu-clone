
interface Data {
    title : string;
    url : string;
}

interface Result {
    id : string;
    poster_path : string;
    backdrop_path : string;
    overview: string;
    media_type : string;
    release_date : string;
    first_air_date : string;
    genre: string;
    title : string;
    original_name : string;
    vote_count : number;
}

interface Results {
    results : [Result]
}