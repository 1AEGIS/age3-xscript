import {int, float, double, vector, long} from "../../Types";
import * as TAD from "../TAD/Terrain";


export type River = TAD.River|
    "Rio Negro"|
    "South Africa River"|
    "Korea River"|
    "Borneo River"|
    "rio negro"|
    "south africa river"|
    "korea river"|
    "borneo river";

export type Ocean = TAD.Ocean|
    "Korea Coast"|
    "Marocco Coast"|
    "South Africa Coast"|
    "korea coast"|
    "marocco coast"|
    "south africa coast";

export type Lake = TAD.Lake|
    "Korea Lake"|
    "Sahara Oasis"|
    "korea lake"|
    "sahara oasis";

export type Water = River|Ocean|Lake;

export type Cliff = TAD.Cliff|
    "African Sand"|
    "African Red Cliff"|
    "African Red Sand"|
    "African Veld"|
    "Korea"|
    "Marocco"|
    "Rio Negro"|
    "Salta"|
    "african sand"|
    "african red cliff"|
    "african red sand"|
    "african veld"|
    "korea"|
    "marocco"|
    "rio negro"|
    "salta";

export type MapType = TAD.MapType|
    "Cafreria"|
    "Cape"|
    "CapeofGoodHope"|
    "Honshut"|
    "Kalahari"|
    "Korea"|
    "Nile"|
    "Rionegro"|
    "Transvaal"|
    "cafreria"|
    "cape"|
    "capeofgoodhope"|
    "honshut"|
    "kalahari"|
    "korea"|
    "nile"|
    "rionegro"|
    "transvaal";

export type Forest = TAD.Forest|
    "African Prairie Oak Forest"|
    "African Prairie Veld"|
    "African Prairie Grass"|
    "Kalahari Desert Forest"|
    "Kalahari Forest"|
    "Rio Negro Forest"|
    "Salta Forest"|
    "african prairie oak forest"|
    "african prairie veld"|
    "african prairie grass"|
    "kalahari desert forest"|
    "kalahari forest"|
    "rio negro forest"|
    "salta forest";

export type Mix = TAD.Mix|
    "african_prairie"|
    "african_prairie_forest"|
    "african_prairie_riverside"|
    "cape_of_good_hope"|
    "kalahari_desert"|
    "kalahari_forest"|
    "korea_a"|
    "korea_b"|
    "korea_c"|
    "korea_forest"|
    "marocco_sand_rock"|
    "rio_negro_dirt"|
    "rio_negro_forest"|
    "rio_negro_grass"|
    "sahara"|
    "salta_dirt"|
    "salta_forest"|
    "salta_grass"|
    "salta_snow";