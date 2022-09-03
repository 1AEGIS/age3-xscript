
/**
 * -----------------------------------------------------
 * THIS SCRIPT WAS GENERATED FROM AN .XS SCRIPT
 * Original script: `lib/includes/ypKOTHInclude.ts`
 * -----------------------------------------------------
 */


import {int, float, double, vector, long, resource, xsVectorGetX, xsVectorGetY, xsVectorGetZ, xsVectorLength, xsVectorNormalize, xsVectorSet, xsVectorSetX, xsVectorSetY, xsVectorSetZ, cOriginVector} from "../../lib/Types";
import {rmAddAreaCliffEdgeAvoidClass, rmAddAreaConstraint, rmAddAreaInfluencePoint, rmAddAreaInfluenceSegment, rmAddAreaRemoveType, rmAddAreaTerrainLayer, rmAddAreaTerrainReplacement, rmAddAreaToClass, rmAreaID, rmBuildAllAreas, rmBuildArea, rmCreateArea, rmPaintAreaTerrain, rmSetAreaBaseHeight, rmSetAreaCliffEdge, rmSetAreaCliffHeight, rmSetAreaCliffPainting, rmSetAreaCliffType, rmSetAreaCoherence, rmSetAreaForestType, rmSetAreaHeightBlend, rmSetAreaLocation, rmSetAreaLocPlayer, rmSetAreaLocTeam, rmSetAreaMaxBlobDistance, rmSetAreaMaxBlobs, rmSetAreaMinBlobDistance, rmSetAreaMinBlobs, rmSetAreaSize, rmSetAreaSmoothDistance, rmSetAreaTerrainLayerVariance, rmSetAreaTerrainType, rmSetAreaWarnFailure, rmSetAreaWaterType, rmSetAreaMix, rmSetAreaElevationType, rmSetAreaElevationVariation, rmSetAreaElevationMinFrequency, rmSetAreaElevationOctaves, rmSetAreaElevationPersistence, rmSetAreaElevationNoiseBias, rmSetAreaForestDensity, rmSetAreaForestClumpiness, rmSetAreaForestUnderbrush} from "../../lib/Area";
import {rmAddConnectionArea, rmAddConnectionConstraint, rmAddConnectionEndConstraint, rmAddConnectionStartConstraint, rmAddConnectionTerrainReplacement, rmAddConnectionToClass, rmBuildConnection, rmCreateConnection, rmSetConnectionBaseHeight, rmSetConnectionBaseTerrainCost, rmSetConnectionCoherence, rmSetConnectionHeightBlend, rmSetConnectionPositionVariance, rmSetConnectionSmoothDistance, rmSetConnectionTerrainCost, rmSetConnectionType, rmSetConnectionWarnFailure, rmSetConnectionWidth} from "../../lib/Connection";
import {rmConstraintID, rmCreateAreaConstraint, rmCreateAreaDistanceConstraint, rmCreateAreaMaxDistanceConstraint, rmCreateAreaOverlapConstraint, rmCreateBoxConstraint, rmCreateClassDistanceConstraint, rmCreateCliffEdgeConstraint, rmCreateCliffEdgeDistanceConstraint, rmCreateCliffEdgeMaxDistanceConstraint, rmCreateCliffRampConstraint, rmCreateCliffRampDistanceConstraint, rmCreateCliffRampMaxDistanceConstraint, rmCreateEdgeConstraint, rmCreateEdgeDistanceConstraint, rmCreateEdgeMaxDistanceConstraint, rmCreateTerrainDistanceConstraint, rmCreateTerrainMaxDistanceConstraint, rmCreateTypeDistanceConstraint, rmCreatePieConstraint, rmCreateTradeRouteDistanceConstraint, rmSetAreaObeyWorldCircleConstraint, rmClearClosestPointConstraints, rmAddClosestPointConstraint} from "../../lib/Constraint";
import {rmAddFairLoc, rmAddFairLocConstraint, rmFairLocXFraction, rmFairLocZFraction, rmGetNumberFairLocs, rmPlaceFairLocs, rmResetFairLocs} from "../../lib/FairLoc";
import {rmAddObjectDefConstraint, rmAddObjectDefItem, rmAddObjectDefToClass, rmCreateObjectDef, rmGetNumberUnitsPlaced, rmGetUnitPlaced, rmGetUnitPlacedOfPlayer, rmPlaceObjectDefAtAreaLoc, rmPlaceObjectDefAtLoc, rmPlaceObjectDefAtRandomAreaOfClass, rmPlaceObjectDefInArea, rmPlaceObjectDefInRandomAreaOfClass, rmPlaceObjectDefPerPlayer, rmSetIgnoreForceToGaia, rmSetObjectDefMaxDistance, rmSetObjectDefMinDistance, rmCreateStartingUnitsObjectDef, rmSetObjectDefAllowOverlap, rmSetObjectDefTradeRouteID, rmPlaceObjectDefAtPoint, rmSetObjectDefCreateHerd} from "../../lib/ObjectDef";
import {rmAddPlayerResource, rmGetNumberPlayersOnTeam, rmGetPlayerCiv, rmGetPlayerCulture, rmGetPlayerName, rmGetPlayerTeam, rmMultiplyPlayerResource, rmPlacePlayer, rmPlacePlayersCircular, rmPlacePlayersLine, rmPlacePlayersSquare, rmPlayerLocXFraction, rmPlayerLocZFraction, rmSetPlacementSection, rmSetPlacementTeam, rmSetPlayerArea, rmSetPlayerLocation, rmSetPlayerPlacementArea, rmSetPlayerResource, rmSetTeamArea, rmSetTeamSpacingModifier} from "../../lib/Player";
import {rmAddTriggerCondition, rmAddTriggerEffect, rmAddUnitsToArmy, rmCreateArmy, rmCreateTrigger, rmSetTriggerActive, rmSetTriggerConditionParam, rmSetTriggerConditionParamArmy, rmSetTriggerConditionParamFloat, rmSetTriggerConditionParamInt, rmSetTriggerEffectParam, rmSetTriggerEffectParamArmy, rmSetTriggerEffectParamFloat, rmSetTriggerEffectParamInt, rmSetTriggerLoop, rmSetTriggerPriority, rmSetTriggerRunImmediately, rmSetVCFile, rmSwitchToTrigger, rmTriggerID} from "../../lib/Trigger";
import {rmAreaFractionToTiles, rmAreaTilesToFraction, rmDegreesToRadians, rmMetersToTiles, rmTilesToMeters, rmXFractionToMeters, rmXFractionToTiles, rmXMetersToFraction, rmXTilesToFraction, rmZFractionToMeters, rmZFractionToTiles, rmZMetersToFraction, rmZTilesToFraction} from "../../lib/Converter";
import {rmCreateGrouping, rmSetGroupingMinDistance, rmSetGroupingMaxDistance, rmAddGroupingConstraint, rmAddGroupingToClass, rmPlaceGroupingAtLoc} from "../../lib/Grouping";
import {rmRiverCreate, rmRiverAddWaypoint, rmRiverSetShallowRadius, rmRiverAddShallow, rmRiverSetBankNoiseParams, rmRiverBuild, rmRiverSetConnections} from "../../lib/River";
import {cMapSize, cNumberNonGaiaPlayers, cNumberPlayers, cNumberTeams, rmClassID, rmDefineClass, rmDefineConstant, rmEchoError, rmEchoInfo, rmEchoWarning, rmGetSeaLevel, rmRandFloat, rmRandInt, rmSetGaiaCiv, rmSetLightingSet, rmSetMapSize, rmSetSeaLevel, rmSetSeaType, rmSetStatusText, rmTerrainInitialize, sqrt, rmGetCivID, rmAllocateSubCivs, rmSetSubCiv, rmSetWindMagnitude, rmSetGlobalRain, rmSetMapElevationParameters, rmSetBaseTerrainMix, rmSetMapType, rmSetWorldCircleConstraint, rmGetMapXSize, rmGetNomadStart, rmGetUnitPosition, cElevTurbulence, rmFindClosestPointVector, rmFindClosestPoint, rmSetNuggetDifficulty, rmGetIsKOTH, rmAddMerc} from "../../lib/RandomMap";
import {rmCreateTradeRoute, rmAddTradeRouteWaypoint, rmAddRandomTradeRouteWaypoints, rmBuildTradeRoute, rmGetTradeRouteWayPoint} from "../TradeRoute";

 




// KingsHill placements

export function ypKingsHillPlacer(xLoc: float = 0.0, yLoc: float = 0.0, walkDistance: float = 0.0, extraConstraint: int = 0): void
{

  var kingsHillAvoidImpassableLand: int = rmCreateTerrainDistanceConstraint("kings hill avoids impassable land", "Land", false, 4.0);
  var kingsHillAvoidAll: int = rmCreateTypeDistanceConstraint("kings hill avoids all", "all", 4.0);
  var kingsHillAvoidTradeRouteSocket: int = rmCreateTypeDistanceConstraint("kings hill avoids trade route socket", "socketTradeRoute", 4.0);
  var kingsHillEdgeConstraint: int = rmCreatePieConstraint("kings hill edge of map", 0.5, 0.5, rmXFractionToMeters(0.0), rmXFractionToMeters(0.48), rmDegreesToRadians(0), rmDegreesToRadians(360));
  var kingsHillAvoidsTC: int = rmCreateTypeDistanceConstraint("kings hill avoids TCs", "Towncenter", 45.0);
  var kingsHillAvoidsCW: int = rmCreateTypeDistanceConstraint("kings hill avoids CWs", "CoveredWagon", 45.0);
  var kingsHillAvoidTradeRoute: int = rmCreateTradeRouteDistanceConstraint("kings hill avoids trade route", 6.0);
  var kingsHillAvoidFlag: int = rmCreateTypeDistanceConstraint("avoid flag", "HomeCityWaterSpawnFlag", 4.0);

  var kingsHillID: int = rmCreateObjectDef("KingsHill");
  rmAddObjectDefItem(kingsHillID, "ypKingsHill", 1, 0);

  // Assign generic constraints to the Hill
  rmSetObjectDefMinDistance(kingsHillID, 0.0);
  rmSetObjectDefMaxDistance(kingsHillID, rmXFractionToMeters(walkDistance));
  rmAddObjectDefConstraint(kingsHillID, kingsHillAvoidImpassableLand);
  rmAddObjectDefConstraint(kingsHillID, kingsHillAvoidAll);
  rmAddObjectDefConstraint(kingsHillID, kingsHillAvoidTradeRouteSocket);
  rmAddObjectDefConstraint(kingsHillID, kingsHillEdgeConstraint);
  rmAddObjectDefConstraint(kingsHillID, kingsHillAvoidsTC);
  rmAddObjectDefConstraint(kingsHillID, kingsHillAvoidsCW);
  rmAddObjectDefConstraint(kingsHillID, kingsHillAvoidTradeRoute);
  rmAddObjectDefConstraint(kingsHillID, kingsHillAvoidFlag);

  // Assign any extra constraints passed in by the script. Allows a little extra flexibility for map specific constraints (avoiding cliffs, canyons, etc)
  if (extraConstraint > 0)
  {
    rmAddObjectDefConstraint(kingsHillID, extraConstraint);
  }

  rmPlaceObjectDefAtLoc(kingsHillID, 0, xLoc, yLoc, 1);

} // end ypKingsHillPlacer

export function ypKingsHillLandfill(xLoc: float = 0.0, yLoc: float = 0.0, fillSize: float = 0.0, fillHeight: float = 0.0, fillMix: string = "", extraConstraint: int = 0): void
{

  var fill: int = rmCreateArea("hill placer");
  rmSetAreaLocation(fill, xLoc, yLoc);
  rmSetAreaMix(fill, fillMix);
  rmSetAreaSize(fill, fillSize, fillSize);
  rmSetAreaCoherence(fill, 0.9);

  rmSetAreaBaseHeight(fill, fillHeight);
  rmSetAreaSmoothDistance(fill, 5);

  if (extraConstraint > 0)
    rmAddAreaConstraint(fill, extraConstraint);

  rmSetAreaWarnFailure(fill, false);
  rmBuildArea(fill);
} // end ypKingsHillLandfill