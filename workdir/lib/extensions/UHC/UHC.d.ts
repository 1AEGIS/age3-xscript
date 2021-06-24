import {int, float, double, vector, long} from "../../Types";


export declare function rmIsObserverMode(): boolean;

export declare function rmIsSummerVariant(): boolean;

export declare function rmIsWinterVariant(): boolean;

export declare function rmIsSpecialEventVariant(): boolean;

export declare function rmIsUnexpectedEventsVariant(): boolean;

export declare function rmGetMapVariant(): 1|2|3|4;

export declare function trCreateDefendPlan2(playerID: int, planName: string, unitCount: int, defendX: float, defendY: float, defendZ: float, engageRange: float, evaluationFrequency: int, gatherDistance: float): void;

export declare function activateAprilFoolsTextures(): void;

export declare function deactivateAprilFoolsTextures(): void;

export declare function rmActivateRandomEvents(): void;


export declare function setFastPlaybackFactor(factor: int): void;

export declare function saveUnresponsiveGame(): void;

export declare function uiToggleUnitPathSimple(): void;

export declare function uiShowUnitPathSimple(): void;

export declare function uiHideUnitPathSimple(): void;

export declare function uiToggleUnitPathRough(): void;

export declare function uiShowUnitPathRough(): void;

export declare function uiHideUnitPathRough(): void;

export declare function uiToggleUnitGatherPointPath(): void;

export declare function uiShowUnitGatherPointPath(): void;

export declare function uiHideUnitGatherPointPath(): void;

export declare function trClearObserverOwnedObjects(): void;

export declare function setSquadModeByIndex(index: int): void;

export declare function bUnitGetNumberTargeters(unitID: int, playerID: int): void;

export declare function kbUnitGetNumberWorkersIfSeeable(unitID: int) : void;

export declare function kbUnitIsInventoryFull(unitID: int): void;

export declare function kbUnitGetCurrentInventory(unitID: int, resourceID: int): void;

export declare function kbUnitGetInventoryCapacity(unitID: int, resourceID: int): void;