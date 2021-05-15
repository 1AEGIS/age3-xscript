import {int, float, double, vector, long} from "./Types";


export type River = 
    ""|
    "Amazon River"|
    "Rio Negro"|
    "Pampas River"|
    "Yukon River"|
    "Amazon River"|
    "Andes River"|
    "Deccan Plateau River"|
    "South Africa River"|
    "Yellow River"|
    "Korea River"|
    "Borneo River"|
    "amazon river"|
    "rio negro"|
    "pampas river"|
    "yukon river"|
    "amazon river"|
    "andes river"|
    "deccan plateau river"|
    "south africa river"|
    "yellow river"|
    "korea river"|
    "borneo river";

export type Ocean = 
    ""|
    "Atlantic Coast"|
    "Caribbean Coast"|
    "Cinematic Ship Ocean"|
    "Hudson Bay"|
    "Bayou SPC"|
    "New England Coast"|
    "Amazon River Basin"|
    "Yucatan Coast"|
    "Bayou Ocean"|
    "Araucania North Coast"|
    "Araucania Central Coast"|
    "Araucania Southern Coast"|
    "Borneo Coast"|
    "California Coast"|
    "Ceylon Coast"|
    "Coastal Japan"|
    "Korea Coast"|
    "Marocco Coast"|
    "Hudson Bay"|
    "South Africa Coast"|
    "atlantic coast"|
    "caribbean coast"|
    "cinematic ship ocean"|
    "hudson bay"|
    "bayou spc"|
    "new england coast"|
    "amazon river basin"|
    "yucatan coast"|
    "bayou ocean"|
    "araucania north coast"|
    "araucania central coast"|
    "araucania southern coast"|
    "borneo coast"|
    "california coast"|
    "ceylon coast"|
    "coastal japan"|
    "korea coast"|
    "marocco coast"|
    "hudson bay"|
    "south africa coast";

export type Lake = 
    ""|
    "Great Lakes Ice"|
    "Great Lakes"|
    "Great Plains Pond"|
    "Texas Pond"|
    "New England Lake"|
    "Saguenay Lake"|
    "Bayou"|
    "Amsterdam"|
    "Paris"|
    "Berlin"|
    "Lisbon"|
    "London"|
    "Seville"|
    "Constantinople"|
    "Borneo Water"|
    "Yellow River Flooded"|
    "Korea Lake"|
    "Northwest Territory Water"|
    "Sahara Oasis"|
    "Japan_HC"|
    "China_HC"|
    "India_HC"|
    "great lakes ice"|
    "great lakes"|
    "great plains pond"|
    "texas pond"|
    "new england lake"|
    "saguenay lake"|
    "bayou"|
    "amsterdam"|
    "paris"|
    "berlin"|
    "lisbon"|
    "london"|
    "seville"|
    "constantinople"|
    "borneo water"|
    "yellow river flooded"|
    "korea lake"|
    "northwest territory water"|
    "sahara oasis"|
    "japan_hc"|
    "china_hc"|
    "india_hc";

export type Water = River|Ocean|Lake;

export type Cliff = 
    ""|
    "African Sand"|
    "African Red Cliff"|
    "African Red Sand"|
    "African Veld"|
    "Ceylon"|
    "Coastal Japan"|
    "Deccan Plateau"|
    "Deccan Plateau River"|
    "Himalayas"|
    "Korea"|
    "Marocco"|
    "Patagonia"|
    "Rio Negro"|
    "Salta"|
    "Yellow River"|
    "Andes"|
    "Andeswall"|
    "Amazon"|
    "Orinoco"|
    "Bayou"|
    "Caribbean"|
    "Carolina"|
    "Carolina Inland"|
    "Carolina Coast"|
    "Cave"|
    "Great Plains"|
    "New England_texgrass"|
    "New England Inland"|
    "New England Inland Grass"|
    "New England"|
    "New England snow"|
    "Painteddesert"|
    "Patagonia"|
    "Rocky Mountain2"|
    "Rocky Mountain Edge"|
    "Sonora"|
    "SPC Caribbean"|
    "SPC Rocky Cliffs"|
    "SPC Mountain Pass"|
    "Texas Grass"|
    "Texas"|
    "California"|
    "californiacoast"|
    "californiacoast2"|
    "Araucania North"|
    "Araucania North Coast"|
    "Araucania North Coast2"|
    "Araucania Central"|
    "araucania central coast"|
    "araucania central coast2"|
    "Araucania South"|
    "Araucania Southern Coast"|
    "african sand"|
    "african red cliff"|
    "african red sand"|
    "african veld"|
    "ceylon"|
    "coastal japan"|
    "deccan plateau"|
    "deccan plateau river"|
    "himalayas"|
    "korea"|
    "marocco"|
    "patagonia"|
    "rio negro"|
    "salta"|
    "yellow river"|
    "andes"|
    "andeswall"|
    "amazon"|
    "orinoco"|
    "bayou"|
    "caribbean"|
    "carolina"|
    "carolina inland"|
    "carolina coast"|
    "cave"|
    "great plains"|
    "new england_texgrass"|
    "new england inland"|
    "new england inland grass"|
    "new england"|
    "new england snow"|
    "painteddesert"|
    "patagonia"|
    "rocky mountain2"|
    "rocky mountain edge"|
    "sonora"|
    "spc caribbean"|
    "spc rocky cliffs"|
    "spc mountain pass"|
    "texas grass"|
    "texas"|
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

export type MapType = 
    ""|
    "AIFishingUseful"|
    "AITransportRequired"|
    "AITransportUseful"|
    "Amazonia"|
    "Andes"|
    "Araucania"|
    "Bayou"|
    "Borneo"|
    "Cafreria"|
    "California"|
    "Cape"|
    "Caribbean"|
    "Carolina"|
    "Ceylon"|
    "Deccan"|
    "Desert"|
    "FastTestMap"|
    "Grass"|
    "GreatLakes"|
    "GreatPlains"|
    "Himalayas"|
    "Honshut"|
    "Japan"|
    "Kalahari"|
    "Korea"|
    "Land"|
    "Mongolia"|
    "Mountain"|
    "NewEngland"|
    "Nile"|
    "NorthwestTerritory"|
    "PaintedDesert"|
    "Pampas"|
    "Patagonia"|
    "Plymouth"|
    "Rionegro"|
    "Rockies"|
    "Saguenay"|
    "Scenario"|
    "ScenarioFreezing"|
    "ScenarioSpecial"|
    "Scenarioypack"|
    "Siberia"|
    "SilkRoad1"|
    "SilkRoad2"|
    "SilkRoad3"|
    "Snow"|
    "Sonora"|
    "Texas"|
    "Transvaal"|
    "Tropical"|
    "Unknown"|
    "Water"|
    "YellowRiver"|
    "Yucatan"|
    "Yukon"|
    "Default"|
    "aifishinguseful"|
    "aitransportrequired"|
    "aitransportuseful"|
    "amazonia"|
    "andes"|
    "araucania"|
    "bayou"|
    "borneo"|
    "cafreria"|
    "california"|
    "cape"|
    "caribbean"|
    "carolina"|
    "ceylon"|
    "deccan"|
    "desert"|
    "fastTestMap"|
    "grass"|
    "greatLakes"|
    "greatPlains"|
    "himalayas"|
    "honshut"|
    "japan"|
    "kalahari"|
    "korea"|
    "land"|
    "mongolia"|
    "mountain"|
    "newEngland"|
    "nile"|
    "northwestTerritory"|
    "paintedDesert"|
    "pampas"|
    "patagonia"|
    "plymouth"|
    "rionegro"|
    "rockies"|
    "saguenay"|
    "scenario"|
    "scenarioFreezing"|
    "scenarioSpecial"|
    "scenarioypack"|
    "siberia"|
    "silkRoad1"|
    "silkRoad2"|
    "silkRoad3"|
    "snow"|
    "sonora"|
    "texas"|
    "transvaal"|
    "tropical"|
    "unknown"|
    "water"|
    "yellowRiver"|
    "yucatan"|
    "yukon"|
    "default";

export type Forest = 
    ""|
    "African Prairie Oak Forest"|
    "African Prairie Veld"|
    "African Prairie Grass"|
    "Amazon Rain Forest"|
    "Andes Forest"|
    "Araucania Forest"|
    "Bayou Swamp Forest"|
    "California Redwood Forest"|
    "California Madrone Forest"|
    "California Desert Forest"|
    "California Pine Forest"|
    "Caribbean Palm Forest"|
    "Carolina Pine Forest"|
    "Carolina Marsh Forest"|
    "Great Lakes Forest"|
    "Great Lakes Forest Snow"|
    "Great Plains Forest"|
    "Great Plains grass"|
    "Great Plains grass green"|
    "Kalahari Desert Forest"|
    "Kalahari Forest"|
    "New England Forest"|
    "North Araucania Forest"|
    "North Araucania Coastal Forest"|
    "NW Territory Forest"|
    "NW Territory Birch Forest"|
    "Pampas Forest"|
    "Patagonia Forest"|
    "Patagonia Snow Forest"|
    "Painteddesert Forest"|
    "puya Forest"|
    "Rio Negro Forest"|
    "Rockies Snow Forest"|
    "Rockies Forest"|
    "Sahara Forest"|
    "Saguenay Forest"|
    "Salta Forest"|
    "Sonora Forest"|
    "Texas Forest"|
    "Texas Forest Dirt"|
    "Yucatan Forest"|
    "Yukon Snow Forest"|
    "Yukon Forest"|
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
    "african prairie oak forest"|
    "african prairie veld"|
    "african prairie grass"|
    "amazon rain forest"|
    "andes forest"|
    "araucania forest"|
    "bayou swamp forest"|
    "california redwood forest"|
    "california madrone forest"|
    "california desert forest"|
    "california pine forest"|
    "caribbean palm forest"|
    "carolina pine forest"|
    "carolina marsh forest"|
    "great lakes forest"|
    "great lakes forest snow"|
    "great plains forest"|
    "great plains grass"|
    "great plains grass green"|
    "kalahari desert forest"|
    "kalahari forest"|
    "new england forest"|
    "north araucania forest"|
    "north araucania coastal forest"|
    "nw territory forest"|
    "nw territory birch forest"|
    "pampas forest"|
    "patagonia forest"|
    "patagonia snow forest"|
    "painteddesert forest"|
    "puya forest"|
    "rio negro forest"|
    "rockies snow forest"|
    "rockies forest"|
    "sahara forest"|
    "saguenay forest"|
    "salta forest"|
    "sonora forest"|
    "texas forest"|
    "texas forest dirt"|
    "yucatan forest"|
    "yukon snow forest"|
    "yukon forest"|
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

export type Mix = 
    ""|
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
