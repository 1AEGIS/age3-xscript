import {int, float, double, vector, long} from "../../Types";
import * as TWC from "../TWC/Terrain";


export type River = TWC.River|
    "Deccan Plateau River"|
    "Yellow River"|
    "deccan plateau river"|
    "yellow river";

export type Ocean = TWC.Ocean|
    "Borneo Coast"|
    "Ceylon Coast"|
    "Coastal Japan"|
    "borneo coast"|
    "ceylon coast"|
    "coastal japan";

export type Lake = TWC.Lake|
    "Borneo Water"|
    "Yellow River Flooded"|
    "Japan_HC"|
    "China_HC"|
    "India_HC"|
    "borneo water"|
    "yellow river flooded"|
    "japan_hc"|
    "china_hc"|
    "india_hc";

export type Water = River|Ocean|Lake;

export type Cliff = TWC.Cliff|
    "Ceylon"|
    "Coastal Japan"|
    "Deccan Plateau"|
    "Deccan Plateau River"|
    "Himalayas"|
    "Yellow River"|
    "ceylon"|
    "coastal japan"|
    "deccan plateau"|
    "deccan plateau river"|
    "himalayas"|
    "yellow river";

export type MapType = TWC.MapType|
    "Borneo"|
    "Ceylon"|
    "Deccan"|
    "Himalayas"|
    "Honshut"|
    "Japan"|
    "Mongolia"|
    "Siberia"|
    "SilkRoad1"|
    "SilkRoad2"|
    "SilkRoad3"|
    "YellowRiver"|
    "borneo"|
    "ceylon"|
    "deccan"|
    "himalayas"|
    "honshut"|
    "japan"|
    "mongolia"|
    "siberia"|
    "silkroad1"|
    "silkroad2"|
    "silkroad3"|
    "yellowriver";

export type Forest = TWC.Forest|
    "Borneo Forest"|
    "Borneo Palm Forest"|
    "Borneo Canopy Forest"|
    "Coastal Japan Forest"|
    "Deccan Forest"|
    "Ashoka Forest"|
    "Eucalyptus Forest"|
    "Bamboo Forest"|
    "Ginkgo Forest"|
    "Yellow River Forest"|
    "Mongolian Forest"|
    "Himalayas Forest"|
    "Saxaul Forest"|
    "Mongolian Fir Forest"|
    "Ceylon Forest"|
    "borneo forest"|
    "borneo palm forest"|
    "borneo canopy forest"|
    "coastal japan forest"|
    "deccan forest"|
    "ashoka forest"|
    "eucalyptus forest"|
    "bamboo forest"|
    "ginkgo forest"|
    "yellow river forest"|
    "mongolian forest"|
    "himalayas forest"|
    "saxaul forest"|
    "mongolian fir forest"|
    "ceylon forest";

export type Mix = TWC.Mix|
    "african_prairie"|
    "african_prairie_forest"|
    "african_prairie_riverside"|
    "amazon grass"|
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
    "bayou_forest"|
    "bayou_grass"|
    "borneo_grass_a"|
    "borneo_grass_b"|
    "borneo_grass_c"|
    "borneo_sand_a"|
    "borneo_underbrush"|
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
    "cape_of_good_hope"|
    "caribbean grass"|
    "carolina_grass"|
    "ceylon_grass_a"|
    "ceylon_sand_a"|
    "coastal_japan_a"|
    "coastal_japan_b"|
    "coastal_japan_c"|
    "coastal_japan_forest"|
    "deccan_dirt_a"|
    "deccan_forest"|
    "deccan_grassy_Dirt_a"|
    "deccan_grass_a"|
    "deccan_grass_b"|
    "desertforestflr_cal"|
    "GeometricPatterngrass"|
    "geometricpatterngrass"|
    "grandcanyon_forest"|
    "grandcanyon_frstflr"|
    "grandcanyon_rock_7"|
    "grandcanyon_rock_8"|
    "grandcanyon_rock_9"|
    "great plains drygrass"|
    "great plains grass"|
    "great plains grass01"|
    "greatlakes_grass"|
    "greatlakes_snow"|
    "great_lakes_ice"|
    "himalayas_a"|
    "himalayas_b"|
    "kalahari_desert"|
    "kalahari_forest"|
    "korea_a"|
    "korea_b"|
    "korea_c"|
    "korea_forest"|
    "marocco_sand_rock"|
    "mongolia_desert"|
    "mongolia_forest"|
    "mongolia_grass"|
    "mongolia_grass_b"|
    "newengland_grass"|
    "newengland_grass_b"|
    "new_england_forest"|
    "nwt_forest"|
    "nwt_grass1"|
    "painteddesert_groundmix_1"|
    "painteddesert_groundmix_2"|
    "painteddesert_groundmix_3"|
    "painteddesert_groundmix_4"|
    "pampas_dirt"|
    "pampas_forest"|
    "pampas_grass"|
    "patagonia_dirt"|
    "patagonia_grass"|
    "patagonia_snow"|
    "rio_negro_dirt"|
    "rio_negro_forest"|
    "rio_negro_grass"|
    "rockies_dirt"|
    "rockies_dirt_snow"|
    "rockies_grass"|
    "rockies_grass_snow"|
    "rockies_grass_snowa"|
    "rockies_grass_snowb"|
    "rockies_snow"|
    "saguenay grass"|
    "saguenay tundra"|
    "saguenay_forest"|
    "sahara"|
    "salta_dirt"|
    "salta_forest"|
    "salta_grass"|
    "salta_snow"|
    "scorched_ground"|
    "sonora_dirt"|
    "testmix"|
    "texas_dirt"|
    "texas_grass"|
    "yellow_river_a"|
    "yellow_river_b"|
    "yellow_river_forest"|
    "yucatan_grass"|
    "yukon grass"|
    "yukon snow";
