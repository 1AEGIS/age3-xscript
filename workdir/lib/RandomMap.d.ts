import {int, float, double, vector, long} from "./Types";
import {MapType, Mix} from "./Terrain";

/**
 * 0 = normal size 1 = large size
 */
export declare const cMapSize: int;
/**
 * Total number of players, mother nature excluded.
 */
export declare const cNumberNonGaiaPlayers: int;
/**
 * Total number of players, mother nature included.
 */
export declare const cNumberPlayers: int;
/**
 * Total number of teams.
 */
export declare const cNumberTeams: int;

/**
 * Gets class ID for given class name.
 */
export declare function rmClassID(name: string): int;
/**
 * Define a class with the given name.
 */
export declare function rmDefineClass(className: string): int;
/**
 * Define a constant with given name and value.
 */
export declare function rmDefineConstant(name: string, value: int): void;
/**
 * Echoes an error string to the debugger output, can not be seen in AoT.
 */
export declare function rmEchoError(echoString: string, level?: int): void;
/**
 * Echoes an info string to the debugger output, can not be seen in AoT.
 */
export declare function rmEchoInfo(echoString: string, level?: int): void;
/**
 * Echoes a warning string to the debugger output, can not be seen in AoT.
 */
export declare function rmEchoWarning(echoString: string, level?: int): void;
/**
 * Gets the sea level for the map.
 */
export declare function rmGetSeaLevel(): float;
/**
 * Returns a random float between min and max.
 */
export declare function rmRandFloat(min?: float, max?: float): float;
/**
 * Returns a random integer between min and max.
 */
export declare function rmRandInt(min?: int, max?: int): int;
/**
 * Sets Gaia's civilization.
 */
export declare function rmSetGaiaCiv(civ: long): void;
/**
 * Sets a lighting set.
 */
export declare function rmSetLightingSet(name: string): void;
/**
 * Sets the size of the map.
 */
export declare function rmSetMapSize(x: int, z: int): void;
/**
 * Sets the sea level for the map.
 */
export declare function rmSetSeaLevel(level?: float): void;
/**
 * Sets the sea type for the map.
 */
export declare function rmSetSeaType(name: string): void;
/**
 * Sets the friendly cool loading screen text and progress.
 * @param status Message (not used in AoE3).
 * @param progress Progress bar value (0.0 - 1.0).
 */
export declare function rmSetStatusText(status: string, progress: float): void;
/**
 * Initializes the terrain to the base type and height.
 */
export declare function rmTerrainInitialize(baseTerrain: string, height?: float): void;
/**
 * Returns the square root of x.
 */
export declare function sqrt(x: float): float;
/**
 * Returns which area is closer.
 */
export declare function rmFindCloserArea(xFraction: float, zFraction: float, area1: int, area2: int): int;
/**
 * Returns the HC Level of the given player.
 */
export declare function rmGetHomeCityLevel(playerID: int): int;
/**
 * Returns the highest HC Level of the players in the game.
 */
export declare function rmGetHighHomeCityLevel(): int;
/**
 * Returns the average (rounded down) HC Level of the players in the game.
 */
export declare function rmGetAverageHomeCityLevel(): int;
/**
 * Returns the lowest HC Level of the players in the game.
 */
export declare function rmGetLowHomeCityLevel(): int;



/**
 * Returns civ ID by name.
 */
export declare function rmGetCivID(civName: string): long;

export declare function rmAllocateSubCivs(arg0: int): boolean;

export declare function rmSetSubCiv(number: int, civName: string): void;

export declare function rmSetWindMagnitude(arg0: float): void;

export declare function rmSetGlobalRain(arg0: float): void;

export declare function rmSetGlobalSnow(arg0: float): void;

export declare function rmSetMapElevationParameters(type: long, minFrequency: float, numberOctaves: long, persistence: float, heightVariation: float): void;

export declare function rmSetBaseTerrainMix(name: Mix): void;
/**
 * Set map type, such as `"texas"`
 */
export declare function rmSetMapType(type: MapType): void;
/**
 * Returns true if the map belongs to the given type.
 */
export declare function rmIsMapType(type: MapType): Boolean;

export declare function rmSetWorldCircleConstraint(obey: boolean): void;

export declare function rmGetMapXSize(): int;

export declare function rmGetNomadStart(): boolean;

export declare function rmGetUnitPosition(unitID: int): vector;

export declare const cElevTurbulence: float;

export declare function ypIsAsian(playerID: int): boolean;

export declare function ypMonasteryBuilder(playerID: int, number?: int): int;

export declare function rmFindClosestPointVector(point: vector, distance: int): vector;

export declare function rmFindClosestPoint(locX: float, locY: float, distance: int): vector;

export declare function rmSetNuggetDifficulty(min: 1|2|3|4|5, max: 1|2|3|4|5): void;

export declare function rmGetIsKOTH(): boolean;

export declare function rmAddMerc(proto: string, count: int, min: int, max: int, increment: float): void;

export declare function rmEnableLocalWater(enable: boolean): void;

export declare function rmGetIsFFA(): boolean;