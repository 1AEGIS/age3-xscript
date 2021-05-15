import {int, float, double, vector, long, resource} from "./Types";

/**
 * Add a condition from the trigger(2)\typetest.xml file to the random map.
 */
export declare function rmAddTriggerCondition(conditionType: string): void;
/**
 * Add an effect from the trigger(2)\typetest.xml file to the random map.
 */
export declare function rmAddTriggerEffect(effectType: string): void;
/**
 * Add the given units to the armyID.
 */
export declare function rmAddUnitsToArmy(playerID: int, armyID: int, objectDefID: int): void;
/**
 * Create an army for the given player ID.
 */
export declare function rmCreateArmy(playerID: int, armyName: string): void;
/**
 * Create a trigger to add to this random map.
 */
export declare function rmCreateTrigger(triggerName: string): void;
/**
 * Sets the current trigger active.
 */
export declare function rmSetTriggerActive(active: boolean): void;
/**
 * Adds a parameter to the current condition.
 */
export declare function rmSetTriggerConditionParam(paramName: string, value: string, add?: boolean): void;
/**
 * Adds an army parameter to the current condition.
 */
export declare function rmSetTriggerConditionParamArmy(paramName: string, playerID: int, armyID: int, add?: boolean): void;
/**
 * Adds a float parameter to the current condition.
 */
export declare function rmSetTriggerConditionParamFloat(paramName: string, value: float, add?: boolean): void;
/**
 * Adds an integer parameter to the current condition.
 */
export declare function rmSetTriggerConditionParamInt(paramName: string, value: int, add?: boolean): void;
/**
 * Adds a parameter to the current effect.
 */
export declare function rmSetTriggerEffectParam(paramName: string, value: string, add?: boolean): void;
/**
 * Adds an army parameter to the current effect.
 */
export declare function rmSetTriggerEffectParamArmy(paramName: string, playerID: int, armyID: int, add?: boolean): void;
/**
 * Adds a float parameter to the current effect.
 */
export declare function rmSetTriggerEffectParamFloat(paramName: string, value: float, add?: boolean): void;
/**
 * Adds an integer parameter to the current effect.
 */
export declare function rmSetTriggerEffectParamInt(paramName: string, value: int, add?: boolean): void;
/**
 * Sets the current trigger looping.
 */
export declare function rmSetTriggerLoop(loop: boolean): void;
/**
 * Sets the current trigger's priority.
 */
export declare function rmSetTriggerPriority(priority: int): void;
/**
 * Sets the current trigger to "run immediately"
 */
export declare function rmSetTriggerRunImmediately(runImmediately: boolean): void;
/**
 * Assigns a specific victory condition file to this RMS.
 */
export declare function rmSetVCFile(filename: string): void;
/**
 * Sets the given trigger as current.
 */
export declare function rmSwitchToTrigger(triggerID: int): void;
/**
 * Returns the ID for the trigger with as name `triggerName`
 */
export declare function rmTriggerID(triggerName: string): int;
