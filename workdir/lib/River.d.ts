import {int, float, double, vector, long} from "./Types";
import {Water} from "./extensions/TAD/Terrain";


export declare function rmRiverCreate(arg0: int, riverName: Water, minWidth: int, maxWidth: int, arg4: int, arg5: int): int;

export declare function rmRiverAddWaypoint(riverID: int, arg1: number, arg2: number);

export declare function rmRiverSetShallowRadius(riverID: int, arg1: number);

export declare function rmRiverAddShallow(riverID: int, arg1: number);

export declare function rmRiverSetBankNoiseParams(riverID: int, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number);

export declare function rmRiverBuild(riverID: int);

export declare function rmRiverSetConnections(riverID: number, arg1: number, arg2: number, arg3: number, arg4: number);