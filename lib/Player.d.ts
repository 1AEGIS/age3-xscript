import {int, float, double, vector, long, resource} from "./Types";

/**
 * Adds to a player's resource amount.
 */
export declare function	rmAddPlayerResource(playerID: int, resourceName: string&resource, amount: float): void;
/**
 * Gets the number of players on the given team
 */
export declare function	rmGetNumberPlayersOnTeam(teamID: int): int;
/**
 * Gets the civilization of the specified player.
 */
export declare function	rmGetPlayerCiv(playerID: int): int;
/**
 * Gets the culture of the specified player.
 */
export declare function	rmGetPlayerCulture(playerID: int): int;
/**
 * Gets a player's nickname.
 */
export declare function	rmGetPlayerName(playerID: int): string;
/**
 * Gets the team the specified player is on.
 */
export declare function	rmGetPlayerTeam(playerID: int): int;
/**
 * Multiplies a player's resource amount by the given factor.
 */
export declare function	rmMultiplyPlayerResource(playerID: int, resourceName: string&resource, factor: float): void;
/**
 * Sets one player location.
 */
export declare function	rmPlacePlayer(playerID: int, xFraction: float, zFraction: float): void;
/**
 * Makes a circle of player locations.
 */
export declare function	rmPlacePlayersCircular(minFraction: float, maxFraction: float, angleVariation: float): void;
/**
 * Makes a line of player locations.
 */
export declare function	rmPlacePlayersLine(x1: float, z1: float, x2: float, z2: float, distVariation: float, spacingVariation: float): void;
/**
 * Makes a square of player locations.
 */
export declare function	rmPlacePlayersSquare(dist: float, distVariation: float, spacingVariationfloat: float): void;
/**
 * Gets a player's start location x fraction.
 */
export declare function	rmPlayerLocXFraction(playerID: int): number;
/**
 * Gets a player's start location z fraction.
 */
export declare function	rmPlayerLocZFraction(playerID: int): number;
/**
 * When placing players in a circle or square, this command allows you to skip part of the circle or square, in essence removing a slice from the pie (maybe you want to fit an ocean in there like in Sea of Worms).
 */
export declare function	rmSetPlacementSection(fromPercent: float, toPercent: float): void;
/**
 * Sets the team to place.
 */
export declare function	rmSetPlacementTeam(teamID: int): void;
/**
 * Sets a player's 'official' area.
 */
export declare function	rmSetPlayerArea(playerID: int, areaID: int): void;
/**
 * Manually sets a player's starting location.
 */
export declare function	rmSetPlayerLocation(playerID: int, xFraction: float, zFraction: float): void;
/**
 * Sets the area of the map to use for player placement.
 */
export declare function	rmSetPlayerPlacementArea(minX: float, minZ: float, maxX: float, maxZ: float): void;
/**
 * Sets a player's resource amount.
 */
export declare function	rmSetPlayerResource(playerID: int, resourceName: string&resource, amount: float): void;
/**
 * Sets a team's 'official' area.
 */
export declare function	rmSetTeamArea(teamID: int, areaID: int): void;
/**
 * Sets the team spacing modifier.
 */
export declare function	rmSetTeamSpacingModifier(modifier: float): void;
