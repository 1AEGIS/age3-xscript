
/**
 * -----------------------------------------------------
 * THIS SCRIPT WAS GENERATED FROM AN .XS SCRIPT
 * Original script: `workdir/lib/includes/ypAsianInclude.ts`
 * Conversion date: `16.05.2021`
 * -----------------------------------------------------
 */



import {int, float, double, vector, long, resource, meters, fraction, xsVectorGetX, xsVectorGetY, xsVectorGetZ, xsVectorLength, xsVectorNormalize, xsVectorSet, xsVectorSetX, xsVectorSetY, xsVectorSetZ, cOriginVector} from "../lib/Types";
import {rmAddAreaCliffEdgeAvoidClass, rmAddAreaConstraint, rmAddAreaInfluencePoint, rmAddAreaInfluenceSegment, rmAddAreaRemoveType, rmAddAreaTerrainLayer, rmAddAreaTerrainReplacement, rmAddAreaToClass, rmAreaID, rmBuildAllAreas, rmBuildArea, rmCreateArea, rmPaintAreaTerrain, rmSetAreaBaseHeight, rmSetAreaCliffEdge, rmSetAreaCliffHeight, rmSetAreaCliffPainting, rmSetAreaCliffType, rmSetAreaCoherence, rmSetAreaForestType, rmSetAreaHeightBlend, rmSetAreaLocation, rmSetAreaLocPlayer, rmSetAreaLocTeam, rmSetAreaMaxBlobDistance, rmSetAreaMaxBlobs, rmSetAreaMinBlobDistance, rmSetAreaMinBlobs, rmSetAreaSize, rmSetAreaSmoothDistance, rmSetAreaTerrainLayerVariance, rmSetAreaTerrainType, rmSetAreaWarnFailure, rmSetAreaWaterType, rmSetAreaMix, rmSetAreaElevationType, rmSetAreaElevationVariation, rmSetAreaElevationMinFrequency, rmSetAreaElevationOctaves, rmSetAreaElevationPersistence, rmSetAreaElevationNoiseBias, rmSetAreaForestDensity, rmSetAreaForestClumpiness, rmSetAreaForestUnderbrush, rmAddAreaCliffRandomWaypoints, rmAddAreaCliffWaypoint, rmSetAreaElevationEdgeFalloffDist, rmSetAreaEdgeFilling} from "../lib/Area";
import {rmAddConnectionArea, rmAddConnectionConstraint, rmAddConnectionEndConstraint, rmAddConnectionStartConstraint, rmAddConnectionTerrainReplacement, rmAddConnectionToClass, rmBuildConnection, rmCreateConnection, rmSetConnectionBaseHeight, rmSetConnectionBaseTerrainCost, rmSetConnectionCoherence, rmSetConnectionHeightBlend, rmSetConnectionPositionVariance, rmSetConnectionSmoothDistance, rmSetConnectionTerrainCost, rmSetConnectionType, rmSetConnectionWarnFailure, rmSetConnectionWidth} from "../lib/Connection";
import {rmConstraintID, rmCreateAreaConstraint, rmCreateAreaDistanceConstraint, rmCreateAreaMaxDistanceConstraint, rmCreateAreaOverlapConstraint, rmCreateBoxConstraint, rmCreateClassDistanceConstraint, rmCreateCliffEdgeConstraint, rmCreateCliffEdgeDistanceConstraint, rmCreateCliffEdgeMaxDistanceConstraint, rmCreateCliffRampConstraint, rmCreateCliffRampDistanceConstraint, rmCreateCliffRampMaxDistanceConstraint, rmCreateEdgeConstraint, rmCreateEdgeDistanceConstraint, rmCreateEdgeMaxDistanceConstraint, rmCreateTerrainDistanceConstraint, rmCreateTerrainMaxDistanceConstraint, rmCreateTypeDistanceConstraint, rmCreatePieConstraint, rmCreateTradeRouteDistanceConstraint, rmSetAreaObeyWorldCircleConstraint, rmCreateHCGPConstraint, rmClearClosestPointConstraints, rmAddClosestPointConstraint, rmCreateMaxHeightConstraint} from "../lib/Constraint";
import {rmAddFairLoc, rmAddFairLocConstraint, rmFairLocXFraction, rmFairLocZFraction, rmGetNumberFairLocs, rmPlaceFairLocs, rmResetFairLocs} from "../lib/FairLoc";
import {rmAddObjectDefConstraint, rmAddObjectDefItem, rmAddObjectDefToClass, rmCreateObjectDef, rmGetNumberUnitsPlaced, rmGetUnitPlaced, rmGetUnitPlacedOfPlayer, rmPlaceObjectDefAtAreaLoc, rmPlaceObjectDefAtLoc, rmPlaceObjectDefAtRandomAreaOfClass, rmPlaceObjectDefInArea, rmPlaceObjectDefInRandomAreaOfClass, rmPlaceObjectDefPerPlayer, rmSetIgnoreForceToGaia, rmSetObjectDefMaxDistance, rmSetObjectDefMinDistance, rmCreateStartingUnitsObjectDef, rmSetObjectDefAllowOverlap, rmSetObjectDefTradeRouteID, rmPlaceObjectDefAtPoint, rmSetObjectDefHerdAngle, rmSetObjectDefCreateHerd, rmSetObjectDefGarrisonStartingUnits, rmSetObjectDefGarrisonSecondaryUnits} from "../lib/ObjectDef";
import {rmAddPlayerResource, rmGetNumberPlayersOnTeam, rmGetPlayerCiv, rmGetPlayerCulture, rmGetPlayerName, rmGetPlayerTeam, rmMultiplyPlayerResource, rmPlacePlayer, rmPlacePlayersCircular, rmPlacePlayersLine, rmPlacePlayersSquare, rmPlayerLocXFraction, rmPlayerLocZFraction, rmSetPlacementSection, rmSetPlacementTeam, rmSetPlayerArea, rmSetPlayerLocation, rmSetPlayerPlacementArea, rmSetPlayerResource, rmSetTeamArea, rmSetTeamSpacingModifier} from "../lib/Player";
import {rmAddTriggerCondition, rmAddTriggerEffect, rmAddUnitsToArmy, rmCreateArmy, rmCreateTrigger, rmSetTriggerActive, rmSetTriggerConditionParam, rmSetTriggerConditionParamArmy, rmSetTriggerConditionParamFloat, rmSetTriggerConditionParamInt, rmSetTriggerEffectParam, rmSetTriggerEffectParamArmy, rmSetTriggerEffectParamFloat, rmSetTriggerEffectParamInt, rmSetTriggerLoop, rmSetTriggerPriority, rmSetTriggerRunImmediately, rmSetVCFile, rmSwitchToTrigger, rmTriggerID} from "../lib/Trigger";
import {rmAreaFractionToTiles, rmAreaTilesToFraction, rmDegreesToRadians, rmMetersToTiles, rmTilesToMeters, rmXFractionToMeters, rmXFractionToTiles, rmXMetersToFraction, rmXTilesToFraction, rmZFractionToMeters, rmZFractionToTiles, rmZMetersToFraction, rmZTilesToFraction} from "../lib/Converter";
import {rmCreateGrouping, rmSetGroupingMinDistance, rmSetGroupingMaxDistance, rmAddGroupingConstraint, rmAddGroupingToClass, rmPlaceGroupingAtLoc} from "../lib/Grouping";
import {rmRiverCreate, rmRiverAddWaypoint, rmRiverSetShallowRadius, rmRiverAddShallow, rmRiverSetBankNoiseParams, rmRiverBuild, rmRiverSetConnections} from "../lib/River";
import {cMapSize, cNumberNonGaiaPlayers, cNumberPlayers, cNumberTeams, rmClassID, rmDefineClass, rmDefineConstant, rmEchoError, rmEchoInfo, rmEchoWarning, rmGetSeaLevel, rmRandFloat, rmRandInt, rmSetGaiaCiv, rmSetLightingSet, rmSetMapSize, rmSetSeaLevel, rmSetSeaType, rmSetStatusText, rmTerrainInitialize, sqrt, rmGetCivID, rmAllocateSubCivs, rmSetSubCiv, rmSetWindMagnitude, rmSetGlobalRain, rmSetGlobalSnow, rmSetMapElevationParameters, rmSetBaseTerrainMix, rmSetMapType, rmSetWorldCircleConstraint, rmGetMapXSize, rmGetNomadStart, rmGetUnitPosition, cElevTurbulence, rmFindClosestPointVector, rmFindClosestPoint, rmSetNuggetDifficulty, rmGetIsKOTH, rmAddMerc, rmEnableLocalWater, rmFindCloserArea, rmIsMapType, rmGetHomeCityLevel, rmGetHighHomeCityLevel, rmGetAverageHomeCityLevel, rmGetLowHomeCityLevel, rmGetIsFFA} from "../lib/RandomMap";
import {rmCreateTradeRoute, rmAddTradeRouteWaypoint, rmAddRandomTradeRouteWaypoints, rmBuildTradeRoute, rmGetTradeRouteWayPoint, rmCreateTradeRouteWaypointsInArea, rmAddRandomTradeRouteWaypointsVector} from "../lib/TradeRoute";
import {River, Ocean, Lake, Cliff, MapType, Water, Mix, Forest} from "../lib/Terrain";
import {rmIsObserverMode, rmIsSummerVariant, rmIsWinterVariant, rmIsSpecialEventVariant, rmIsUnexpectedEventsVariant, rmGetMapVariant, trCreateDefendPlan2, activateAprilFoolsTextures, deactivateAprilFoolsTextures, rmActivateRandomEvents, setFastPlaybackFactor, saveUnresponsiveGame, uiToggleUnitPathSimple, uiShowUnitPathSimple, uiHideUnitPathSimple, uiToggleUnitPathRough, uiShowUnitPathRough, uiHideUnitPathRough, uiToggleUnitGatherPointPath, uiShowUnitGatherPointPath, uiHideUnitGatherPointPath, trClearObserverOwnedObjects, setSquadModeByIndex, bUnitGetNumberTargeters, kbUnitGetNumberWorkersIfSeeable, kbUnitIsInventoryFull, kbUnitGetCurrentInventory, kbUnitGetInventoryCapacity} from "../lib/UHC";

 




// Some functions to ease inclusion of Asians into the new and existing RMs

export function ypIsAsian(pID: int = 0): boolean {


  //~ if (rmGetPlayerCiv(pID) ==  rmGetCivID("Japanese") || rmGetPlayerCiv(pID) ==  rmGetCivID("Chinese") || rmGetPlayerCiv(pID) ==  rmGetCivID("Indians"))
  //~ return(true);

  if (rmGetPlayerCiv(pID) == rmGetCivID("Japanese"))
    return (true);

  return (false);
} // end ypIsAsian

export function ypTCChooser(pID: int = 0): string {


  var playerTCType: string = "";

  if (ypIsAsian(pID))
    playerTCType = "YPTownCenterAsian";

  else
    playerTCType = "Towncenter";

  return (playerTCType);

} // end ypTCChooser

export function ypMonasteryBuilder(pID: int = 0, berryWagon: int = 0): int {


  // Have to declare separate constraints each time this function is called to avoid duplicate constraints (and then having to declare them in each separate RM file).
  // Would have liked to initialize them once in a separate function, but the script compiler doesn't like that.

  var objectType: string = "ypConsulate";
  var objectType2: string = "ypBerryWagon1";

  var monasteryAvoidImpassableLand: int = rmCreateTerrainDistanceConstraint("monastery avoids impassable land" + pID, "Land", false, 4.0);
  var monasteryAvoidAll: int = rmCreateTypeDistanceConstraint("monastery avoids all" + pID, "all", 4.0);
  var monasteryAvoidTradeRouteSocket: int = rmCreateTypeDistanceConstraint("monastery avoids trade route socket" + pID, "socketTradeRoute", 8.0);
  var monasteryAvoidsMonastery: int = rmCreateTypeDistanceConstraint("monastery avoids same" + pID, objectType, 8.0);
  var monasteryEdgeConstraint: int = rmCreatePieConstraint("monastery edge of map" + pID, 0.5, 0.5, rmXFractionToMeters(0.0), rmXFractionToMeters(0.47), rmDegreesToRadians(0), rmDegreesToRadians(360));
  var monasteryAvoidsTC: int = rmCreateTypeDistanceConstraint("Monastery avoids TCs a bit" + pID, "Towncenter", 7.0);
  var monasteryAvoidTradeRoute: int = rmCreateTradeRouteDistanceConstraint("Monastery avoids trade route" + pID, 6.0);
  var monasteryAvoidResource: int = rmCreateTypeDistanceConstraint("monastery avoid resource" + pID, "resource", 5.0);

  var monID: int = rmCreateObjectDef("Monastery" + pID);
  //~ rmAddObjectDefItem(monID, objectType, 1, 3.0);
  if (berryWagon == 1)
    rmAddObjectDefItem(monID, objectType2, 1, 6.0);
  //~ rmAddObjectDefItem(monID, "ypMonastery", 1, 0);
  rmSetObjectDefMinDistance(monID, 12);
  rmSetObjectDefMaxDistance(monID, 19);
  rmAddObjectDefConstraint(monID, monasteryAvoidAll);
  rmAddObjectDefConstraint(monID, monasteryAvoidTradeRouteSocket);
  rmAddObjectDefConstraint(monID, monasteryAvoidImpassableLand);
  rmAddObjectDefConstraint(monID, monasteryAvoidsMonastery);
  rmAddObjectDefConstraint(monID, monasteryEdgeConstraint);
  rmAddObjectDefConstraint(monID, monasteryAvoidsTC);
  rmAddObjectDefConstraint(monID, monasteryAvoidTradeRoute);
  rmAddObjectDefConstraint(monID, monasteryAvoidResource);

  return (monID);

} // end ypMonasteryBuilder

export function ypRicePaddyBuilder(pID: int = 0): int {


  // Have to declare separate constraints each time this function is called to avoid duplicate constraints (and then having to declare them in each separate RM file).
  // Would have liked to initialize them once in a separate function, but the script compiler doesn't like that.

  var ricePaddyAvoidImpassableLand: int = rmCreateTerrainDistanceConstraint("rice paddy avoids impassable land" + pID, "Land", false, 4.0);
  var ricePaddyAvoidAll: int = rmCreateTypeDistanceConstraint("rice paddy avoids all" + pID, "all", 4.0);
  var ricePaddyAvoidTradeRouteSocket: int = rmCreateTypeDistanceConstraint("rice paddy avoids trade route socket" + pID, "socketTradeRoute", 8.0);
  var ricePaddyAvoidsMonastery: int = rmCreateTypeDistanceConstraint("rice paddy avoids monastery" + pID, "ypMonastery", 8.0);
  var ricePaddyAvoidsRicePaddy: int = rmCreateTypeDistanceConstraint("rice paddy avoids same" + pID, "ypRicePaddy", 8.0);
  var ricePaddyEdgeConstraint: int = rmCreatePieConstraint("rice paddy edge of map" + pID, 0.5, 0.5, rmXFractionToMeters(0.0), rmXFractionToMeters(0.47), rmDegreesToRadians(0), rmDegreesToRadians(360));
  var ricePaddyAvoidsTC: int = rmCreateTypeDistanceConstraint("Rice Paddy avoids TCs a bit" + pID, "Towncenter", 7.0);
  var ricePaddyAvoidTradeRoute: int = rmCreateTradeRouteDistanceConstraint("Rice Paddy avoids trade route" + pID, 6.0);
  var ricePaddyAvoidResource: int = rmCreateTypeDistanceConstraint("rice paddy avoid resource" + pID, "resource", 5.0);

  var rpID: int = rmCreateObjectDef("RicePaddy" + pID);
  rmAddObjectDefItem(rpID, "ypRicePaddy", 1, 0);
  rmSetObjectDefMinDistance(rpID, 9);
  rmSetObjectDefMaxDistance(rpID, 16);
  rmAddObjectDefConstraint(rpID, ricePaddyAvoidAll);
  rmAddObjectDefConstraint(rpID, ricePaddyAvoidTradeRouteSocket);
  rmAddObjectDefConstraint(rpID, ricePaddyAvoidImpassableLand);
  rmAddObjectDefConstraint(rpID, ricePaddyAvoidsMonastery);
  rmAddObjectDefConstraint(rpID, ricePaddyAvoidsRicePaddy);
  rmAddObjectDefConstraint(rpID, ricePaddyEdgeConstraint);
  rmAddObjectDefConstraint(rpID, ricePaddyAvoidsTC);
  rmAddObjectDefConstraint(rpID, ricePaddyAvoidTradeRoute);
  rmAddObjectDefConstraint(rpID, ricePaddyAvoidResource);

  return (rpID);

} // end ypRicePaddyBuilder
