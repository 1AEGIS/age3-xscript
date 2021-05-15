import {int, float, double, vector, long} from "./Types";


export declare function rmCreateGrouping(arg0: string, arg1: string): int;

export declare function rmSetGroupingMinDistance(tupiVillageID: int, arg1: int): void;

export declare function rmSetGroupingMaxDistance(tupiVillageID: int, arg1: int): void;

export declare function rmAddGroupingConstraint(tupiVillageID: int, longAvoidImpassableLand: int): void;

export declare function rmAddGroupingToClass(tupiVillageID: int, arg1: int): void;

export declare function rmPlaceGroupingAtLoc(tupiVillageID: int, arg1: int, arg2: int, arg3: int, amount?: int): boolean;