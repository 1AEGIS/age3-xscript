import {int, float, double, vector, long, meters,fraction} from "./Types";

/**
 * Converts an area from fraction of the map to tile count.
 */
export declare function rmAreaFractionToTiles(fraction: fraction): float;
/**
 * Converts area tile count to fraction of map.
 */
export declare function rmAreaTilesToFraction(tiles: int): fraction;
/**
 * Converts an angle in degrees to radians.
 */
export declare function rmDegreesToRadians(degrees: float): float;
/**
 * Converts a distance in meters to a number of tiles.
 */
export declare function rmMetersToTiles(meters: meters): float;
/**
 * Converts a number of tiles to a distance in meters.
 */
export declare function rmTilesToMeters(tiles: int): meters;
/**
 * Converts a fraction of the map in the x direction to meters.
 */
export declare function rmXFractionToMeters(meters: fraction): meters;
/**
 * Converts an fraction of the map in the x direction to tile count.
 */
export declare function rmXFractionToTiles(fraction: fraction): float;
/**
 * Converts meters into a fraction of the map in the x direction.
 */
export declare function rmXMetersToFraction(meters: meters): fraction;
/**
 * Converts tile count in the x direction to fraction of map.
 */
export declare function rmXTilesToFraction(tiles: int): fraction;
/**
 * Converts a fraction of the map in the z direction to meters.
 */
export declare function rmZFractionToMeters(meters: fraction): meters;
/**
 * Converts an fraction of the map in the z direction to tile count.
 */
export declare function rmZFractionToTiles(fraction: fraction): float;
/**
 * Converts meters into a fraction of the map in the z direction.
 */
export declare function rmZMetersToFraction(meters: meters): fraction;
/**
 * Converts tile count in the z direction to fraction of map.
 */
export declare function rmZTilesToFraction(tiles: int): fraction;
