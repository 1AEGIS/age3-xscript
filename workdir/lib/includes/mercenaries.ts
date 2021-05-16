
/**
 * -----------------------------------------------------
 * THIS SCRIPT WAS GENERATED FROM AN .XS SCRIPT
 * Original script: `workdir/lib/includes/mercenaries.ts`
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

 



/*
 * Chooses which Mercenaries appear on the map
 */
export function chooseMercs(): void {

	/*	if(rmIsMapType("water"))
	{
		if (rmRandFloat(0,1) < 0.5)
			rmAddMerc("Galleon", 1, 0, 2, 1);
	} */
	//maximum = 4500 resources Inc = 200

	// HOLY ROMAN EMPIRE
	if (rmRandFloat(0, 1) < 0.33)
	{
		rmAddMerc("MercJaeger", 0, 0, 12, 0.9);
		if (rmRandFloat(0, 1) < 0.5)
			rmAddMerc("MercBlackRider", 0, 0, 12, 0.3);
		if (rmRandFloat(0, 1) < 0.5)
			rmAddMerc("MercLandsknecht", 0, 0, 12, 0.6);
	}
	else if (rmRandFloat(0, 1) < 0.5)
	{
		rmAddMerc("MercBlackRider", 0, 0, 12, 0.3);
		if (rmRandFloat(0, 1) < 0.5)
			rmAddMerc("MercJaeger", 0, 0, 12, 0.9);
		if (rmRandFloat(0, 1) < 0.5)
			rmAddMerc("MercLandsknecht", 0, 0, 12, 0.6);
	}
	else {

		rmAddMerc("MercLandsknecht", 0, 0, 12, 0.6);
		if (rmRandFloat(0, 1) < 0.5)
			rmAddMerc("MercBlackRider", 0, 0, 12, 0.3);
		if (rmRandFloat(0, 1) < 0.5)
			rmAddMerc("MercJaeger", 0, 0, 12, 0.9);
	}

	// HIGHLAND
	if (rmRandFloat(0, 1) < 0.33)
	{
		rmAddMerc("MercHighlander", 0, 0, 0, 0);
		if (rmRandFloat(0, 1) < 0.5)
			rmAddMerc("MercHackapell", 0, 0, 0, 0);
		if (rmRandFloat(0, 1) < 0.5)
			rmAddMerc("MercSwissPikeman", 0, 0, 0, 0);
	}
	else if (rmRandFloat(0, 1) < 0.5)
	{
		rmAddMerc("MercHackapell", 0, 0, 0, 0);
		if (rmRandFloat(0, 1) < 0.5)
			rmAddMerc("MercHighlander", 0, 0, 0, 0);
		if (rmRandFloat(0, 1) < 0.5)
			rmAddMerc("MercSwissPikeman", 0, 0, 0, 0);
	}
	else {

		rmAddMerc("MercSwissPikeman", 0, 0, 0, 0);
		if (rmRandFloat(0, 1) < 0.5)
			rmAddMerc("MercHackapell", 0, 0, 0, 0);
		if (rmRandFloat(0, 1) < 0.5)
			rmAddMerc("MercHighlander", 0, 0, 0, 0);
	}

	// MEDITERRANEAN
	if (rmRandFloat(0, 1) < 0.33)
	{
		rmAddMerc("MercBarbaryCorsair", 0, 0, 0, 0);
		if (rmRandFloat(0, 1) < 0.5)
			rmAddMerc("MercMameluke", 0, 0, 0, 0);
		if (rmRandFloat(0, 1) < 0.5)
			rmAddMerc("MercStradiot", 0, 0, 0, 0);
	}
	else if (rmRandFloat(0, 1) < 0.5)
	{
		rmAddMerc("MercMameluke", 0, 0, 0, 0);
		if (rmRandFloat(0, 1) < 0.5)
			rmAddMerc("MercBarbaryCorsair", 0, 0, 0, 0);
		if (rmRandFloat(0, 1) < 0.5)
			rmAddMerc("MercStradiot", 0, 0, 0, 0);
	}
	else {

		rmAddMerc("MercStradiot", 0, 0, 0, 0);
		if (rmRandFloat(0, 1) < 0.5)
			rmAddMerc("MercMameluke", 0, 0, 0, 0);
		if (rmRandFloat(0, 1) < 0.5)
			rmAddMerc("MercBarbaryCorsair", 0, 0, 0, 0);
	}

	// ASIAN
	if (rmRandFloat(0, 1) < 0.5)
	{
		rmAddMerc("MercRonin", 0, 0, 0, 0);
		if (rmRandFloat(0, 1) < 0.5)
			rmAddMerc("MercManchu", 0, 0, 0, 0);
	}
	else {

		rmAddMerc("MercManchu", 0, 0, 0, 0);
		if (rmRandFloat(0, 1) < 0.5)
			rmAddMerc("MercRonin", 0, 0, 0, 0);
	}

	// PRIVATEERS
	rmAddMerc("Privateer", 0, 0, 0, 0);
}
