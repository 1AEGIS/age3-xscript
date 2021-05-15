import {int, float, double, vector, long} from "./Types";

/**
 * Add specified constraint to given object def.
 */
export declare function rmAddObjectDefConstraint(defID: int, constraintID: int): boolean;
/**
 * Add item to object definition.
 */
export declare function rmAddObjectDefItem(defID: int, unitName: string, count: int, clusterDistance?: float): void;
/**
 * Add given object def to specified class.
 */
export declare function rmAddObjectDefToClass(objectDefID: int, classID: int): boolean;
/**
 * Creates an object definition.
 */
export declare function rmCreateObjectDef(name: string): int;
/**
 * Returns the number of units placed by this objectDefID.
 */
export declare function rmGetNumberUnitsPlaced(objectDefID: int): int;
/**
 * Returns a unit ID that was placed by the objectDefID.
 */
export declare function rmGetUnitPlaced(objectDefID: int, index: int): int;
/**
 * Returns the unit ID of a given player that was placed by the objectDefID.
 */
export declare function rmGetUnitPlacedOfPlayer(objectDefID: int, playerID: int): int;
/**
 * Place object definition for the player at the given area's location.
 */
export declare function rmPlaceObjectDefAtAreaLoc(defID: int, playerID: int, areaID: int, placeCount?: long): boolean;
/**
 * Place object definition at specific location for given player.
 */
export declare function rmPlaceObjectDefAtLoc(defID: int, playerID: int, xFraction: float, zFraction: float, placeCount?: long): boolean;
/**
 * Place object definition for the player at the location of a random area in the given class.
 */
export declare function rmPlaceObjectDefAtRandomAreaOfClass(defID: int, playerID: int, classID: int, placeCount?: long): boolean;
/**
 * Place object definition for the player in the given area.
 */
export declare function rmPlaceObjectDefInArea(defID: int, playerID: int, areaID: int, placeCount?: long): boolean;
/**
 * Place object definition for the player in a random area in the given class.
 */
export declare function rmPlaceObjectDefInRandomAreaOfClass(defID: int, playerID: int, classID: int, placeCount?: long): boolean;
/**
 * Place object definition per player.
 */
export declare function rmPlaceObjectDefPerPlayer(defID: int, playerOwned: boolean, placeCount?: long): boolean;
/**
 * If off, some objects placed will automatically convert to Mother Nature.
 */
export declare function rmSetIgnoreForceToGaia(val: boolean): void;
/**
 * Set the maximum distance for the object definition (in meters).
 */
export declare function rmSetObjectDefMaxDistance(defID: int, dist: float): void;
/**
 * Set the minimum distance for the object definition (in meters).
 */
export declare function rmSetObjectDefMinDistance(defID: int, dist: float): void;
/**
 * Set a herd angle:(clockwise from +z) in the object def.
 */
export declare function rmSetObjectDefHerdAngle(defID: int, angle: float): void;
/**
 * Creates a herd out of all units placed in this object def.
 */
export declare function rmSetObjectDefCreateHerd(defID: int, on: boolean): void;
/**
 * Turn on the garrison starting units flag.
 */
export declare function rmSetObjectDefGarrisonStartingUnits(defID: int, on: boolean): void;
/**
 * Turn on the garrison secondary units flag.
 */
export declare function rmSetObjectDefGarrisonSecondaryUnits(defID: int, on: boolean): void;





export declare function rmCreateStartingUnitsObjectDef(arg0: float): int;

export declare function rmSetObjectDefAllowOverlap(socketID: int, allow: boolean): void;

export declare function rmSetObjectDefTradeRouteID(socketID: int, tradeRouteID: int): void;

export declare function rmPlaceObjectDefAtPoint(socketID: int, arg1: int, location: vector): void;