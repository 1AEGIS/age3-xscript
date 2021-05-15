import {int, float, double, vector, long} from "./Types";

export declare function rmCreateTradeRoute(): int;
/**
 * Add a trade route waypoint.
 * @param tradeRouteID Trade route ID.
 * @param coordX Waypoint position X coordinate.
 * @param coordZ Waypoint position Z coordinate.
 */
export declare function rmAddTradeRouteWaypoint(tradeRouteID: int, coordX: float, coordZ: float): void;
/**
 * Adds random waypoints to the specified trade route.
 */
export declare function rmAddRandomTradeRouteWaypoints(tradeRouteID: int, endX: float, endZ: float, arg3: int, arg4: int): void;
/**
 * Creates a trade route in the specified area.
 */
export declare function rmCreateTradeRouteWaypointsInArea(tradeRouteID: int, areaID: int, length: float): int;
/**
 * Adds random waypoints to the specified trade route.
 */
export declare function rmAddRandomTradeRouteWaypointsVector(tradeRouteID: int, v: vector, count: int, maxVariation: float): void;

export declare function rmBuildTradeRoute(tradeRouteID: int, type: string): boolean;
/**
 * Get the map location of a point on the trade route.
 * @param tradeRouteID Trade route ID.
 * @param position A proportion of the route (0.0 - 1.0).
 */
export declare function rmGetTradeRouteWayPoint(tradeRouteID: int, position: float): vector;