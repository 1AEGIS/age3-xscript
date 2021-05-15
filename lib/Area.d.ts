import {int, float, double, vector, long} from "./Types";
import {Water, Cliff, Forest, Mix} from "./Terrain";

/**
 * Adds a class for an area's cliff edge to avoid.
 */
export declare function rmAddAreaCliffEdgeAvoidClass(areaID: int, avoidID: int, minDist: float): void

/**
 * Add specified constraint to an area.
 */
export declare function rmAddAreaConstraint(areaID: int, constraintID: int): boolean

/**
 * Adds an area influence point.
 */
export declare function rmAddAreaInfluencePoint(areaID: int, xFraction: float, zFraction: float): void

/**
 * Adds an area influence segment. You may want an area to grow towards specific 
 * points or lines. A circular area placed at the center of the map with an influence 
 * point of 1, 1 will produce a peninsula that protrudes towards 12 o’clock. Influence 
 * points and segments can be useful in getting areas, such as rivers, to extend 
 * beyond the edge of the map.
 */
export declare function rmAddAreaInfluenceSegment(areaID: int, xFraction1: float, zFraction1: float, xFraction2: float, zFraction2: float): void

/**
 * Add an unit type that the specified area removes. Sometimes you may want an area 
 * to clean itself of objects, such as removing trees from ice. This will only work 
 * if the objects are already placed before the area, which is the reverse of how 
 * most ES maps are generated. You can reference specific units or abstract types, 
 * such as "unit" and "building."
 */
export declare function rmAddAreaRemoveType(areaID: int, typeName: string): void 

/**
 * Adds a terrain layer to an area. Terrain layers allow you to place a border of one 
 * or more textures around an area. For example, you can have grassDirt50 and 
 * grassDirt75 around an area of grass. You can specify multiple layers for an area, 
 * as long as the minDistance for one starts where the maxDistance for another leaves 
 * off. Because different textures overlap one another you may need to experiment 
 * with distances to get a good effect. 
 * 
 * Here is an example: 
 * ```c
 * rmSetAreaTerrainType(areaID, "GrassA"); 
 * rmAddAreaTerrainLayer(areaID, "SnowGrass75", 13, 20); 
 * rmAddAreaTerrainLayer(areaID, "SnowGrass50", 6, 13); 
 * rmAddAreaTerrainLayer(areaID, "SnowGrass25", 0, 6);
 * ```
 */
export declare function rmAddAreaTerrainLayer(areaID: int, terrain: string, minDist: float, maxDist: float): void

/**
 * Adds a terrain replacement rule to the area. If you place an area with no terrain 
 * specified, it will use the terrain of the parent area (including the base map). 
 * However, specifying terrain replacement will paint an area only when another 
 * texture is present. This command is most useful with connections, where you want 
 * to replace water with land where a connection goes across a river, or replace rock 
 * with snow for mountain passes.
 */
export declare function rmAddAreaTerrainReplacement(areaID: int, terrainTypeName: string, newTypeName: string): void

/**
 * Add given area to specified class.
 */
export declare function rmAddAreaToClass(areaID: int, classID: int): boolean

/**
 * Gets the area ID for given area name.
 * @returns Area ID.
 */
export declare function rmAreaID(name: string): int

/**
 * Simultaneously builds all unbuilt areas. This does not include connections.
 * 
 * See also:
 * [rmBuildArea(int)]{@link rmBuildArea}
 */
export declare function rmBuildAllAreas(): boolean 

/**
 * Builds the specified area. Actually builds the area. Choosing when to use this 
 * command can have a big effect on your map. For example, if you place each player 
 * area one by one, the first few will have enough room to build, but if after 11 
 * areas, area 12 still needs to be placed, it might have run out of space because 
 * the others were to greedy. To avoid this, build all player area's at the same 
 * time, so that the script can try to find a fair balance between all areas.
 * 
 * See also:
 * [rmBuildAllAreas()]{@link rmBuildAllAreas}
 */
export declare function rmBuildArea(areaID: int): boolean 

/**
 * Creates an area and returns the areaID.
 * 
 * @returns New area ID.
 */
export declare function rmCreateArea(name: string, parentAreaID?: int): int

/**
 * Paints the terrain for a specified area.
 */
export declare function rmPaintAreaTerrain(areaID: int): void 

/**
 * Sets the base height for an area.
 */
export declare function rmSetAreaBaseHeight(areaID: int, height: float): void

/**
 * Set cliff edge parameters for an area. Determines whether there should be pathable 
 * ramps or not connecting the top of the cliff to the surrounding area.
 * @param areaID Area ID.
 * @param count Number of cliff edges to create. The count times the size should not 
 * be more than 1.0. Defaults to 1.
 * @param size This specifies how much of the area's outline should be turned into 
 * cliff edges. It should be between 0.0 and 1.0. Set to 1.0 to make the whole area 
 * surrounded. Defaults to 0.5.
 * @param variance The variance to use for the size. Defaults to 0.0.
 * @param spacing Spacing modifier. This should be between 0.0 and 1.0. The smaller 
 * this is, the closer together the cliff edges will be. Defaults to 1.0.
 */
export declare function rmSetAreaCliffEdge(areaID: int, count: int, size: float, variance: float, spacing: float, mapEdge: int): void

/**
 * Set an area's cliff height.
 * @param areaID Area ID.
 * @param val Make positive for raised cliffs and negative for lowered cliffs. 
 * Defaults to 4.0.
 * @param variance The variance to use for the height.
 */
export declare function rmSetAreaCliffHeight(areaID: int, val: float, variance: float, ramp: float): void

/**
 * Set cliff painting options for an area. Determines how a cliff is painted with 
 * impassable and passable textures.
 * @param areaID Area ID.
 * @param paintGround Specifies if the ground should be painted or just left whatever 
 * it already is. Defaults true.
 * @param paintOutsideEdge Specifies if the cliff sides should be painted. Defaults 
 * true.
 * @param paintSide Specifies if the outside cliff edge should be painted. This is 
 * the area between the cliff side and the ground. Defaults true.
 * @param minSideHeight Specifies the minimum height that a cliff tile must be sloped 
 * before treating it as a cliff side. Set to 0 to have the minimum amount of cliff 
 * sides painted. Defaults to 1.5.
 */
export declare function rmSetAreaCliffPainting(
    areaID: int, 
    paintGround: boolean, 
    paintOutsideEdge: boolean, 
    paintSide: boolean, 
    minSideHeight: float, 
    paintInsideEdge: boolean
): void

/**
 * Sets the cliff type for an area.
 */
export declare function rmSetAreaCliffType(areaID: int, cliffName: Cliff): void

/**
 * Sets area coherence (0-1).
 */
export declare function rmSetAreaCoherence(areaID: int, coherence: float): void

/**
 * Sets the forest type for an area.
 */
export declare function rmSetAreaForestType(areaID: int, forestName: Forest): void

/**
 * Sets how smoothly area height blends into surroundings. Corresponds to the smooth 
 * tool in the Scenario Editor. Usually a *heightBlend* of 0 will leave geometric-looking 
 * jagged edges. A *heightBlend* of 1 will smooth smaller areas. A *heightBlend* of 2 will 
 * smooth larger areas or areas of disproportionate heights. Anything above 2 may 
 * flatten an area completely.
 * @param areaID Area ID.
 * @param heightBlend Area blend smoothness.
 */
export declare function rmSetAreaHeightBlend(
    areaID: int, 
    heightBlend: int
): void

/**
 * Set the area location.
 */
export declare function rmSetAreaLocation(areaID: int, xFraction: float, zFraction: float): void

/**
 * Set the area location to player's location.
 */
export declare function rmSetAreaLocPlayer(areaID: int,  playerID: int): void

/**
 * Set the area location to team's location.
 */
export declare function rmSetAreaLocTeam(areaID: int, teamID: int): void

/**
 * Sets maximum blob distance.
 */
export declare function rmSetAreaMaxBlobDistance(areaID: int, dist: float): void

/**
 * Sets maximum number of area blobs. An area can be placed with multiple blobs. 
 * Blobs are placed independently, using the minimum and maximum distances below. 
 * Areas made with a single blob will be circular. Areas made with multiple blobs 
 * can be come long and sinuous.
 */
export declare function rmSetAreaMaxBlobs(areaID: int, blobs: int): void

/**
 * Sets minimum blob distance. An area can be placed with multiple blobs. 
 * Blobs are placed independently, using the minimum and maximum distances below. 
 * Areas made with a single blob will be circular. Areas made with multiple blobs 
 * can be come long and sinuous.
 */
export declare function rmSetAreaMinBlobDistance(areaID: int, dist: float): void

/**
 * Sets minimum number of area blobs.
 */
export declare function rmSetAreaMinBlobs(areaID: int, blobs: int): void


/**
 * Set the area size to a min/max fraction of the map.
 */
export declare function rmSetAreaSize(areaID: int, minFraction: float, maxFraction?: float): void


/**
 * Sets area edge smoothing distance (distance is number of neighbouring points to 
 * consider in each direction).
 */
export declare function rmSetAreaSmoothDistance(areaID: int,  smoothDistance: int): void

/**
 * Specifies if the area should vary the terrain layer edges. Usually, variance 
 * in terrain layers looks better, but sometimes you might want to turn it off. 
 * @param variance Defaults to true.
 */
export declare function rmSetAreaTerrainLayerVariance(areaID: int,  variance: boolean): void

/**
 * Sets the terrain type for an area. Even if your area does not place special 
 * terrain, it can be helpful to temporarily paint the area with a distinct texture, 
 * such as "Black" or "SnowA", to see where and if it is actually getting placed.
 */
export declare function rmSetAreaTerrainType(areaID: int, terrainTypeName: string): void

/**
 * Sets whether the area build process will warn if it fails. It is very easy to 
 * over-constrain areas to the point where there is no room for them. This can cause 
 * two problems: the map may take a long time to generate, or if you are in debug 
 * mode, the debugger will pop up and generation will stop. Sometimes you want to 
 * catch these errors, but when you are done with your map it is a good idea to set 
 * SetAreaWarnFailure to false.
 */
export declare function rmSetAreaWarnFailure(areaID: int,  warn: boolean): void

/**
 * Sets the water type for an area.
 */
export declare function rmSetAreaWaterType(areaID: int,  waterName: Water): void 

/**
 * Adds random waypoints to the specified cliff valley area.
 */
export declare function rmAddAreaCliffRandomWaypoints(areaID: int, endXFraction: float, endZFraction: float, count: int, maxVariation: float): void;

/**
 * Adds the given waypoint to the specified cliff area (for valleys).
 */
export declare function rmAddAreaCliffWaypoint(areaID: int, xFraction: float, zFraction: float): void;






export declare function rmSetAreaMix(areaID: int, mixName: Mix): void;

export declare function rmSetAreaElevationType(areaID: int, elevation: long): void;

export declare function rmSetAreaElevationVariation(areaID: int, variation: float): void;

export declare function rmSetAreaElevationEdgeFalloffDist(areaID: int, distance: float): void;

export declare function rmSetAreaEdgeFilling(areaID: int, filling: float): void;

export declare function rmSetAreaElevationMinFrequency(areaID: int, minFrequency: float): void;

export declare function rmSetAreaElevationOctaves(areaID: int, octaves: long): void;

export declare function rmSetAreaElevationPersistence(areaID: int, persistence: float): void;

export declare function rmSetAreaElevationNoiseBias(areaID: int, bias: float): void;

export declare function rmSetAreaForestDensity(forestID: int, density: float): void;

export declare function rmSetAreaForestClumpiness(forestID: int, clumpiness: float): void;

export declare function rmSetAreaForestUnderbrush(forestID: int, underbrush: float): void;