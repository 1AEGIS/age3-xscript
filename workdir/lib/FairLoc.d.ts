import {int, float, double, vector, long} from "./Types";

/**
 * Adds some fairLoc placement info.
 */
export declare function rmAddFairLoc(unitName: string, forward: boolean, inside: boolean, minPlayerDist: float, maxPlayerDist: float, locDist: float, edgeDist: float, playerArea: boolean, teamArea: boolean): int;
/**
 * Add specified constraint to a fairLoc placement.
 */
export declare function rmAddFairLocConstraint(fairLocID: int, constraintID: int): boolean;
/**
 * Gets a player's fairLoc x fraction.
 */
export declare function rmFairLocXFraction(playerID: int, index: int): float;
/**
 * Gets a player's fairLoc z fraction.
 */
export declare function rmFairLocZFraction(playerID: int, index: int): float;
/**
 * Gets a player's number of fairLocs.
 */
export declare function rmGetNumberFairLocs(playerID: int): int;
/**
 * Places down a fairLoc and returns whether or not it was succesful.
 */
export declare function rmPlaceFairLocs(): boolean;
/**
 * Resets fairLoc placement info.
 */
export declare function rmResetFairLocs(): void;
