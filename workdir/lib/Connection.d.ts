import {int, float, double, vector, long} from "./Types";

/**
 * Adds an area to the connection.
 */
export declare function rmAddConnectionArea(connectionID: int, areaID: int): void;
/**
 * Add specified constraint to a connection.
 */
export declare function rmAddConnectionConstraint(connectionID: int, constraintID: int): boolean;
/**
 * Add specified constraint for a connection end point.
 */
export declare function rmAddConnectionEndConstraint(connectionID: int, constraintID: int): boolean;
/**
 * Add specified constraint for a connection start point.
 */
export declare function rmAddConnectionStartConstraint(connectionID: int, constraintID: int): boolean;
/**
 * Adds a terrain replacement rule to the connection.
 */
export declare function rmAddConnectionTerrainReplacement(connectionID: int, terrainTypeName: string, newTypeName: string): void;
/**
 * Adds the connection to specified class.
 */
export declare function rmAddConnectionToClass(connectionID: int, classID: int): void;
/**
 * Builds the given connection.
 */
export declare function rmBuildConnection(connectionID: int): void;
/**
 * Creates an connection.
 */
export declare function rmCreateConnection(name: string): void
/**
 * Sets the base height of a connection.
 */
export declare function rmSetConnectionBaseHeight(connectionID: int, width: float): void;
/**
 * Sets the base terrain cost for a connection.
 */
export declare function rmSetConnectionBaseTerrainCost(connectionID: int, cost: float): void;
/**
 * Sets area coherence (0.0-1.0).
 */
export declare function rmSetConnectionCoherence(connectionID: int, width: float): void;
/**
 * Sets how smoothly connection height blends into surroundings.
 */
export declare function rmSetConnectionHeightBlend(connectionID: int, width: float): void;
/**
 * Sets the position variance of a connection.
 */
export declare function rmSetConnectionPositionVariance(connectionID: int, variance: float): void;
/**
 * Sets connection edge smoothing distance (distance is number of neighboring points to consider in each direction).
 */
export declare function rmSetConnectionSmoothDistance(connectionID: int, width: float): void;
/**
 * Sets the terrain cost for a connection.
 */
export declare function rmSetConnectionTerrainCost(connectionID: int, terrainTypeName: string, cost: float): void;
/**
 * Sets the connection type.
 * @param connectionID Connection ID.
 * @param connectionType - This command determines which players are connected. 
 * The valid values are:
 *  - cConnectAreas: This is the default that is used if you don't call rmSetConnectionType. 
 *                   You have to specify each area to be connected by calling `rmAddConnectionArea()`.
 *  - cConnectPlayers: Connect all player areas.
 *  - cConnectAllies: Connect all ally player areas.
 *  - cConnectEnemies: Connect enemy player areas.
 * @param connectAll - Set this parameter to true if you want all of the areas to get connected to all 
 * of the other areas. Set it to false to have the areas connected sequentially where the first area 
 * gets connected to the second area, the second area gets connected to the third area, etc.
 * @param connectPercentage - You can use this parameter to reduce the number of connections that are 
 * generated. For example, if you set it to 0.5, then half of the connections will get generated. 
 * The ones that are generated are randomly chosen. Some ES maps with connections connect all players 
 * when player number is small (less than 6) and uses a connection percentage on larger maps, otherwise 
 * so many connections can get placed that the barrier (like water or rock) is obscured.
 */
export declare function rmSetConnectionType(connectionID: int, connectionType: int, connectAll: boolean, connectPercentage: float): void;
/**
 * Sets whether a connection warns on failure.
 */
export declare function rmSetConnectionWarnFailure(connectionID: int, warn: boolean): void;
/**
 * Sets the width of a connection.
 */
export declare function rmSetConnectionWidth(connectionID: int, width: float, variance: float): void;