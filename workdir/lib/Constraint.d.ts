import {int, float, double, vector, long} from "./Types";

/**
 * Gets constraint ID for given constraint name.
 */
export declare function rmConstraintID(name: string): int;
/**
 * Make a constraint that forces something to remain within an area.
 */
export declare function rmCreateAreaConstraint(name: string, areaID: int): int;
/**
 * Make a constraint that forces something to stay away from an area.
 */
export declare function rmCreateAreaDistanceConstraint(name: string, areaID: int, distance: float): int;
/**
 * Make a constraint that forces something to remain within a given distance from the areaID.
 */
export declare function rmCreateAreaMaxDistanceConstraint(name: string, areaID: int, distance: float): int;
/**
 * Make an area overlap constraint.
 */
export declare function rmCreateAreaOverlapConstraint(name: string, areaID: int): int;
/**
 * Make a box constraint and forces something to remain in it.
 */
export declare function rmCreateBoxConstraint(name: string, startX: float, startZ: float, endX: float, endZ: float, bufferFraction?: float): int;
/**
 * Make a class distance constraint that forces something to stay away from everything in the given class.
 */
export declare function rmCreateClassDistanceConstraint(name: string, classID: int, distance: float): int;
/**
 * Make a constraint that forces something to remain within an area's cliff edge.
 */
export declare function rmCreateCliffEdgeConstraint(name: string, areaID: int): int;
/**
 * Make an area cliff edge distance constraint.
 */
export declare function rmCreateCliffEdgeDistanceConstraint(name: string, areaID: int, distance: float): int;
/**
 * Make an area cliff edge max distance constraint.
 */
export declare function rmCreateCliffEdgeMaxDistanceConstraint(name: string, areaID: int, distance: float): int;
/**
 * Make a constraint that forces something to remain within an area's cliff ramp edge.
 */
export declare function rmCreateCliffRampConstraint(name: string, areaID: int): int;
/**
 * Make an area cliff ramp edge distance constraint.
 */
export declare function rmCreateCliffRampDistanceConstraint(name: string, areaID: int, distance: float): int;
/**
 * Make an area cliff ramp edge max distance constraint.
 */
export declare function rmCreateCliffRampMaxDistanceConstraint(name: string, areaID: int, distance: float): int;
/**
 * Make a constraint that forces something to remain within an area's edge.
 */
export declare function rmCreateEdgeConstraint(name: string, areaID: int): int;
/**
 * Make an area edge distance constraint and returns its ID
 */
export declare function rmCreateEdgeDistanceConstraint(name: string, areaID: int, distance: float): int;
/**
 * Make an area edge max distance constraint.
 */
export declare function rmCreateEdgeMaxDistanceConstraint(name: string, areaID: int, distance: float): int;
/**
 * Make a constraint to avoid terrain with certain a passability.
 */
export declare function rmCreateTerrainDistanceConstraint(name: string, type: string, passable: boolean, distance: float): int;
/**
 * Make a constraint to be close to terrain with certain a passability.
 */
export declare function rmCreateTerrainMaxDistanceConstraint(name: string, type: string, passable: boolean, distance: float): int;
/**
 * Make a type distance constraint.
 */
export declare function rmCreateTypeDistanceConstraint(name: string, classType: string, distance: float): int;
/**
 * Clears constraints for closest point finder.
 */
export declare function rmClearClosestPointConstraints(): void;
/**
 * Adds constraint to closest point finder.
 */
export declare function rmAddClosestPointConstraint(constraintID: int): void;


/**
 * Create a sector of a ring constraint.
 * @param xFraction Center coords.
 * @param zFraction Center coords.
 * @param insideRadius Inner radius.
 * @param outsideRadius Outer radius.
 * @param minAngle Starting angle.
 * @param maxAngle Ending angle.
 */
export declare function rmCreatePieConstraint(name: string, xFraction: float, zFraction: float, insideRadius: int, outsideRadius: int, minAngle: float, maxAngle: float, arg?: int): number;

export declare function rmCreateTradeRouteDistanceConstraint(name: string, distance: float): int;

export declare function rmSetAreaObeyWorldCircleConstraint(areaID: int, obey: boolean): void;

export declare function rmCreateHCGPConstraint(name: string, distance: float): int;

export declare function rmCreateMaxHeightConstraint(name: string, height: float): int;