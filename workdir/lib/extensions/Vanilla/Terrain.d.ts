import {int, float, double, vector, long} from "../../Types";


export type River = 
    ""|
    "Amazon River"|
    "Pampas River"|
    "Yukon River"|
    "Amazon River"|
    "amazon river"|
    "pampas river"|
    "yukon river"|
    "amazon river";

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
    "Hudson Bay"|
    "atlantic coast"|
    "caribbean coast"|
    "cinematic ship ocean"|
    "hudson bay"|
    "bayou spc"|
    "new england coast"|
    "amazon river basin"|
    "yucatan coast"|
    "hudson bay";

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
    "constantinople";

export type Water = River|Ocean|Lake;

export type Cliff = 
    ""|
    "Patagonia"|
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
    "patagonia"|
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
    "texas";

export type MapType = 
    ""|
    "AIFishingUseful"|
    "AITransportRequired"|
    "AITransportUseful"|
    "Amazonia"|
    "Caribbean"|
    "Carolina"|
    "Desert"|
    "FastTestMap"|
    "Grass"|
    "GreatLakes"|
    "GreatPlains"|
    "Land"|
    "Mountain"|
    "NewEngland"|
    "Pampas"|
    "Patagonia"|
    "Rockies"|
    "Saguenay"|
    "Scenario"|
    "ScenarioFreezing"|
    "ScenarioSpecial"|
    "Snow"|
    "Sonora"|
    "Texas"|
    "Tropical"|
    "Unknown"|
    "Water"|
    "Yucatan"|
    "Yukon"|
    "Default"|
    "aifishinguseful"|
    "aitransportrequired"|
    "aitransportuseful"|
    "amazonia"|
    "caribbean"|
    "carolina"|
    "desert"|
    "fastTestMap"|
    "grass"|
    "greatLakes"|
    "greatPlains"|
    "land"|
    "mountain"|
    "newEngland"|
    "pampas"|
    "patagonia"|
    "rockies"|
    "saguenay"|
    "scenario"|
    "scenarioFreezing"|
    "scenarioSpecial"|
    "snow"|
    "sonora"|
    "texas"|
    "tropical"|
    "unknown"|
    "water"|
    "yucatan"|
    "yukon"|
    "default";

export type Forest = 
    ""|
    "Amazon Rain Forest"|
    "Bayou Swamp Forest"|
    "Caribbean Palm Forest"|
    "Carolina Pine Forest"|
    "Carolina Marsh Forest"|
    "Great Lakes Forest"|
    "Great Lakes Forest Snow"|
    "Great Plains Forest"|
    "Great Plains grass"|
    "Great Plains grass green"|
    "New England Forest"|
    "Pampas Forest"|
    "Patagonia Forest"|
    "Patagonia Snow Forest"|
    "Puya Forest"|
    "Rockies Snow Forest"|
    "Rockies Forest"|
    "Saguenay Forest"|
    "Sonora Forest"|
    "Texas Forest"|
    "Texas Forest Dirt"|
    "Yucatan Forest"|
    "Yukon Snow Forest"|
    "Yukon Forest"|
    "amazon rain forest"|
    "bayou swamp forest"|
    "caribbean palm forest"|
    "carolina pine forest"|
    "carolina marsh forest"|
    "great lakes forest"|
    "great lakes forest snow"|
    "great plains forest"|
    "great plains grass"|
    "great plains grass green"|
    "new england forest"|
    "pampas forest"|
    "patagonia forest"|
    "patagonia snow forest"|
    "puya forest"|
    "rockies snow forest"|
    "rockies forest"|
    "saguenay forest"|
    "sonora forest"|
    "texas forest"|
    "texas forest dirt"|
    "yucatan forest"|
    "yukon snow forest"|
    "yukon forest";

export type Mix = 
    ""|
    "amazon grass"|
    "bayou_forest"|
    "bayou_grass"|
    "caribbean grass"|
    "carolina_grass"|
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
    "newengland_grass"|
    "newengland_grass_b"|
    "new_england_forest"|
    "pampas_dirt"|
    "pampas_forest"|
    "pampas_grass"|
    "patagonia_dirt"|
    "patagonia_grass"|
    "patagonia_snow"|
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
    "scorched_ground"|
    "sonora_dirt"|
    "testmix"|
    "texas_dirt"|
    "texas_grass"|
    "yucatan_grass"|
    "yukon grass"|
    "yukon snow";
