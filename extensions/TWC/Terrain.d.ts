import {int, float, double, vector, long} from "../../Types";
import * as Vanilla from "../Vanilla/Terrain";


export type River = Vanilla.River|
    "Andes River"|
    "andes river";

export type Ocean = Vanilla.Ocean|
    "Araucania North Coast"|
    "Araucania Central Coast"|
    "Araucania Southern Coast"|
    "California Coast"|
    "araucania north coast"|
    "araucania central coast"|
    "araucania southern coast"|
    "california coast";

export type Lake = Vanilla.Lake|
    "Northwest Territory Water"|
    "northwest territory water";

export type Water = River|Ocean|Lake;

export type Cliff = Vanilla.Cliff|
    "Andes"|
    "Andeswall"|
    "Painteddesert"|
    "California"|
    "CaliforniaCoast"|
    "CaliforniaCoast2"|
    "Araucania North"|
    "Araucania North Coast"|
    "Araucania North Coast2"|
    "Araucania Central"|
    "Araucania Central Coast"|
    "Araucania Central Coast2"|
    "Araucania South"|
    "Araucania Southern Coast"|
    "andes"|
    "andeswall"|
    "painteddesert"|
    "california"|
    "californiacoast"|
    "californiacoast2"|
    "araucania north"|
    "araucania north coast"|
    "araucania north coast2"|
    "araucania central"|
    "araucania central coast"|
    "araucania central coast2"|
    "araucania south"|
    "araucania southern coast";

export type MapType = Vanilla.MapType|
    "Andes"|
    "Araucania"|
    "California"|
    "NorthwestTerritory"|
    "PaintedDesert"|
    "Plymouth"|
    "andes"|
    "araucania"|
    "california"|
    "northwestterritory"|
    "painteddesert"|
    "plymouth";

export type Forest = Vanilla.Forest|
    "Andes Forest"|
    "Araucania Forest"|
    "California Redwood Forest"|
    "California Madrone Forest"|
    "California Desert Forest"|
    "California Pine Forest"|
    "North Araucania Forest"|
    "North Araucania Coastal Forest"|
    "NW Territory Forest"|
    "NW Territory Birch Forest"|
    "Painteddesert Forest"|
    "andes forest"|
    "araucania forest"|
    "california redwood forest"|
    "california madrone forest"|
    "california desert forest"|
    "california pine forest"|
    "north araucania forest"|
    "north araucania coastal forest"|
    "nw territory forest"|
    "nw territory birch forest"|
    "painteddesert forest";

export type Mix = Vanilla.Mix|
    "andes_dirt_a"|
    "andes_grass_a"|
    "andes_grass_b"|
    "andes_grass_c"|
    "araucania_dirt_a"|
    "araucania_dirt_b"|
    "araucania_grass_a"|
    "araucania_grass_b"|
    "araucania_grass_c"|
    "araucania_grass_d"|
    "araucania_north_dirt_a"|
    "araucania_north_forest"|
    "araucania_north_forest2"|
    "araucania_north_grass_a"|
    "araucania_north_grass_b"|
    "araucania_north_grass_c"|
    "araucania_snow_a"|
    "araucania_snow_b"|
    "araucania_snow_c"|
    "california_desert"|
    "california_desert0"|
    "california_desert2"|
    "california_desert3"|
    "california_forestground"|
    "california_grass"|
    "california_grassrocks"|
    "california_madrone_forest"|
    "california_shoregrass"|
    "california_snowforest"|
    "california_snowground"|
    "california_snowground2"|
    "california_snowground3"|
    "california_snowground4"|
    "california_snowground5"|
    "grandcanyon_forest"|
    "grandcanyon_frstflr"|
    "grandcanyon_rock_7"|
    "grandcanyon_rock_8"|
    "grandcanyon_rock_9"|
    "nwt_forest"|
    "nwt_grass1"|
    "painteddesert_groundmix_1"|
    "painteddesert_groundmix_2"|
    "painteddesert_groundmix_3"|
    "painteddesert_groundmix_4";
