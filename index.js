"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const prettier = require("prettier");
let CONFIG_PATH = "config.json";
let SOURCE_PATH = "examples/source";
let OUT_PATH = "examples/out";
let IGNORE_WARNINGS = false;
let IGNORE_ERRORS = false;
let FORCE_OPEN = false;
let EXTENSIONS = ["TAD"];
let LIB_PATH = "../../lib";
const DATE = (new Date()).toLocaleDateString();
let config;
if (fs.existsSync(CONFIG_PATH))
    config = JSON.parse(fs.readFileSync(CONFIG_PATH).toString());
else
    console.log(`\x1b[1m\x1b[43m Warning \x1b[40m  -  File does not exist:\x1b[0m
    \x1b[90mconfig not found: \x1b[33m${CONFIG_PATH}\x1b[0m\n`);
if (config.sourceDir !== undefined)
    SOURCE_PATH = config.sourceDir;
if (config.outDir !== undefined)
    OUT_PATH = config.outDir;
if (config.ignoreWarnings !== undefined)
    IGNORE_WARNINGS = config.ignoreWarnings;
if (config.ignoreErrors !== undefined)
    IGNORE_ERRORS = config.ignoreErrors;
if (config.forceOpen !== undefined)
    FORCE_OPEN = config.forceOpen;
if (config.extensions !== undefined)
    EXTENSIONS = config.extensions;
if (config.libDir !== undefined)
    LIB_PATH = config.libDir;
function XStoTypeScript(filename, isInclude = false) {
    var _a, _b, _c, _d, _e, _f;
    if (!fs.existsSync(filename) && FORCE_OPEN) {
        if (!IGNORE_WARNINGS)
            console.log(`\x1b[1m\x1b[43m Warning \x1b[40m  -  File does not exist:\x1b[0m
    \x1b[90mfile not found: \x1b[33m${filename}\x1b[0m\n`);
        let path = filename.split(/(\/|\\)/g);
        filename = OUT_PATH + '/' + path[path.length - 1];
    }
    if (!fs.existsSync(filename)) {
        if (!IGNORE_ERRORS)
            console.log(`\x1b[1m\x1b[41m FileError \x1b[40m  -  File does not exist:\x1b[0m
     \x1b[90mfile not found: \x1b[33m${filename}\x1b[0m\n`);
        return [];
    }
    const xs = fs.readFileSync(filename).toString();
    const xml_filename = filename.replace(/.xs/, ".xml");
    filename = filename.replace(".xs", isInclude ? ".ts" : ".xts");
    let functions = [];
    let xts = xs.replace(/(?:(?:void)|(?:int)|(?:float)|(?:string)|(?:bool)|(?:vector)|(?:long))\s+\w+\s*\([^\)]+\)/g, dec => {
        functions.push(/\s+(\w+)\s*\(/.exec(dec)[1]);
        return ((isInclude ? "export function " : "function ") + dec.split(' ').slice(1).join(' ') + ": " + dec.split(' ')[0].replace("bool", "boolean"));
    });
    if (isInclude) {
        filename = filename.split(/\//g).slice(0, -1).join('\/') + "\/lib\/includes\/" + filename.split(/\//g).slice(-1);
        if (fs.existsSync(filename)) {
            console.log(`\nInclude \x1b[33m${filename.replace(/.ts/, ".xs")}\x1b[0m is already converted`);
            return functions;
        }
        else {
            console.log(`\nConverting include \x1b[33m${filename.replace(/.ts/, ".xs")}\x1b[0m ...`);
        }
    }
    else {
        let path = filename.split('/');
        filename = SOURCE_PATH + '/' + path.slice(-1);
    }
    xts = xts.replace(/(?<!\n[^\n]*\/\/((?!\/\/).)*)(?<!\/\*((?!\*\/)([^$]))*)(?<=(\s+)|\n|\}|;|\(|,)((?:void)|(?:int)|(?:float)|(?:string)|(?:vector)|(?:long))\s+\w+/g, dec => "var " + dec.split(/(?<=\S)\s+(?=\S)/).reverse().join(': '));
    xts = xts.replace(/(?<!\n[^\n]*\/\/((?!\/\/).)*)(?<!\/\*((?!\*\/)([^$]))*)(?<=(\s+)|\n|\}|;|\(|,)bool\s+\w+/g, dec => "var " + dec.replace(/bool\s+/g, '') + ": boolean");
    xts = xts.replace(/(?<=function\s+\w+\s*\([^\)]*)var\s+(?=\w+\s*:\s*((?:int)|(?:float)|(?:string)|(?:bool))[^\)]*\))/g, '');
    xts = xts.replace(/(?<=function\s+\w+\s*\()\s*void\s*(?=\))/g, '');
    xts = xts.replace(/for\s*\(\s*\w+\s*=\s*[^;]*\s*;\s*<=?\s*[^\{]+\)\s*(\/\/[^\n]*)?\s*{/g, dec => {
        const variable = /for\s*\(\s*(\w+)\s*=\s*/.exec(dec)[1];
        dec = dec.replace(/(?<=for\s*\(\s*\w+\s*=\s*[^;]*\s*;\s*)<=?\s*[^\{]+(?=\)\s*(\/\/[^\n]*)?\s*{)/, cond => variable + ' ' + cond + `; ${variable}++`).replace(/for\s*\(\s*/g, "for(var ");
        return dec;
    });
    let includes = '';
    xts = xts.replace(/(?<!\n[^\n]*\/\/((?!\/\/).)*)(?<!\/\*((?!\*\/)(?:[^$]))*)include\s+"[^"]+"\s*;/g, dec => {
        let imported = [];
        try {
            imported = XStoTypeScript(`${filename.split(/\//g).slice(0, -2).join('\/')}/${/include\s+"([^"]+)"\s*;/.exec(dec)[1]}`, true);
        }
        catch (e) { }
        return dec.replace(/include\s+"/, `import {${imported.join(", ")}} from "../lib/includes/`).replace(".xs", '');
    });
    let map_info = '';
    if (!isInclude) {
        let map_data = {
            loadss: []
        };
        if (fs.existsSync(xml_filename)) {
            try {
                let map_xml = fs.readFileSync(xml_filename, 'utf8');
                (_a = map_xml.match(/(?<=<mapinfo(?:\s+\w*\s*=\s*"[^"]*")*\s+)(\w*)(?:\s*=\s*")([^"]*)(?:")/g)) === null || _a === void 0 ? void 0 : _a.forEach(attr => {
                    const attr_name = attr.split(/\s*=\s*/)[0];
                    const attr_value = attr.split(/\s*=\s*/)[1];
                    map_data[attr_name] = attr_value.slice(1, -1);
                });
                (_b = map_xml.match(/(?<=<loadss(\s+[^>]*)?>)([^<]*)(?=<\/loadss>)/g)) === null || _b === void 0 ? void 0 : _b.forEach(loadss => {
                    map_data.loadss.push(`"${loadss}"`);
                });
            }
            catch (err) {
                if (!IGNORE_WARNINGS)
                    console.log(`\x1b[1m\x1b[43m Warning \x1b[40m  -  Corrupt XML file\x1b[0m\nFailed to read \x1b[33m${xml_filename}\x1b[0m\n${err}`);
            }
        }
        else {
            if (!IGNORE_WARNINGS)
                console.log(`\x1b[1m\x1b[43m Warning \x1b[40m  -  XML file not found\x1b[0m\nFailed to load \x1b[33m${xml_filename}\x1b[0m\n`);
        }
        map_info = `
/**
 * XML map info. Don't use in the code, it will only be used
 * to generate the corresponding XML file.
 */
const mapinfo = {
    details: ${map_data.details},
    detailsText: \`${map_data.detailsText}\`,
    imagepath: "${(_d = (_c = map_data.imagepath) === null || _c === void 0 ? void 0 : _c.toString()) === null || _d === void 0 ? void 0 : _d.replace(/\\/g, '/')}",
    displayNameID: ${map_data.displayNameID},
    displayName: \`${map_data.displayName}\`,
    cannotReplace: "${map_data.cannotReplace}",
    loadDetails: ${map_data.loadDetails},
    loadDetailsText: \`${map_data.loadDetailsText}\`,
    loadBackground: "${(_f = (_e = map_data.loadBackground) === null || _e === void 0 ? void 0 : _e.toString()) === null || _f === void 0 ? void 0 : _f.replace(/\\/g, '/')}",
    loadss: [
        ${map_data.loadss.join(",\n\t\t").replace(/\\/g, '/')}
    ]
};
`.replace(/`undefined`/g, "null");
    }
    try {
        xts = prettier.format(xts, {
            semi: true,
            parser: "typescript",
            useTabs: true,
            rangeStart: 8,
            tabWidth: 4,
            printWidth: 140,
            singleQuote: true,
        }).replace(/(?<!\n[^\n]*\/\/((?!\/\/).)*)(?<!\/\*((?!\*\/)([^$]))*)\b\s*\n\s*\{/gm, " {\n");
    }
    catch (e) {
        if (!IGNORE_WARNINGS) {
            console.log(`\x1b[1m\x1b[43m Warning \x1b[40m  -  Syntax error:\x1b[0m`);
            console.log(e);
        }
    }
    let extensions = '';
    EXTENSIONS.forEach(ext => {
        try {
            extensions += `${fs.readFileSync(`./extensions/${ext}/index.xts`).toString()}\n`;
        }
        catch (e) {
            if (!IGNORE_ERRORS)
                console.log(`\x1b[1m\x1b[41m ExtensionError \x1b[40m  -  File does not exist:\x1b[0m
         \x1b[90mfile not found: \x1b[33m./extensions/${ext}/index.xts\x1b[0m\n`);
        }
    });
    xts = `
/**
 * -----------------------------------------------------
 * THIS SCRIPT WAS GENERATED FROM AN .XS SCRIPT
 * Original script: \`${filename}\`
 * Conversion date: \`${DATE}\`
 * -----------------------------------------------------
 */



import {int, float, double, vector, long, resource, meters, fraction, xsVectorGetX, xsVectorGetY, xsVectorGetZ, xsVectorLength, xsVectorNormalize, xsVectorSet, xsVectorSetX, xsVectorSetY, xsVectorSetZ, cOriginVector} from "${LIB_PATH}/Types";
import {rmAddAreaCliffEdgeAvoidClass, rmAddAreaConstraint, rmAddAreaInfluencePoint, rmAddAreaInfluenceSegment, rmAddAreaRemoveType, rmAddAreaTerrainLayer, rmAddAreaTerrainReplacement, rmAddAreaToClass, rmAreaID, rmBuildAllAreas, rmBuildArea, rmCreateArea, rmPaintAreaTerrain, rmSetAreaBaseHeight, rmSetAreaCliffEdge, rmSetAreaCliffHeight, rmSetAreaCliffPainting, rmSetAreaCliffType, rmSetAreaCoherence, rmSetAreaForestType, rmSetAreaHeightBlend, rmSetAreaLocation, rmSetAreaLocPlayer, rmSetAreaLocTeam, rmSetAreaMaxBlobDistance, rmSetAreaMaxBlobs, rmSetAreaMinBlobDistance, rmSetAreaMinBlobs, rmSetAreaSize, rmSetAreaSmoothDistance, rmSetAreaTerrainLayerVariance, rmSetAreaTerrainType, rmSetAreaWarnFailure, rmSetAreaWaterType, rmSetAreaMix, rmSetAreaElevationType, rmSetAreaElevationVariation, rmSetAreaElevationMinFrequency, rmSetAreaElevationOctaves, rmSetAreaElevationPersistence, rmSetAreaElevationNoiseBias, rmSetAreaForestDensity, rmSetAreaForestClumpiness, rmSetAreaForestUnderbrush, rmAddAreaCliffRandomWaypoints, rmAddAreaCliffWaypoint, rmSetAreaElevationEdgeFalloffDist, rmSetAreaEdgeFilling} from "${LIB_PATH}/Area";
import {rmAddConnectionArea, rmAddConnectionConstraint, rmAddConnectionEndConstraint, rmAddConnectionStartConstraint, rmAddConnectionTerrainReplacement, rmAddConnectionToClass, rmBuildConnection, rmCreateConnection, rmSetConnectionBaseHeight, rmSetConnectionBaseTerrainCost, rmSetConnectionCoherence, rmSetConnectionHeightBlend, rmSetConnectionPositionVariance, rmSetConnectionSmoothDistance, rmSetConnectionTerrainCost, rmSetConnectionType, rmSetConnectionWarnFailure, rmSetConnectionWidth} from "${LIB_PATH}/Connection";
import {rmConstraintID, rmCreateAreaConstraint, rmCreateAreaDistanceConstraint, rmCreateAreaMaxDistanceConstraint, rmCreateAreaOverlapConstraint, rmCreateBoxConstraint, rmCreateClassDistanceConstraint, rmCreateCliffEdgeConstraint, rmCreateCliffEdgeDistanceConstraint, rmCreateCliffEdgeMaxDistanceConstraint, rmCreateCliffRampConstraint, rmCreateCliffRampDistanceConstraint, rmCreateCliffRampMaxDistanceConstraint, rmCreateEdgeConstraint, rmCreateEdgeDistanceConstraint, rmCreateEdgeMaxDistanceConstraint, rmCreateTerrainDistanceConstraint, rmCreateTerrainMaxDistanceConstraint, rmCreateTypeDistanceConstraint, rmCreatePieConstraint, rmCreateTradeRouteDistanceConstraint, rmSetAreaObeyWorldCircleConstraint, rmCreateHCGPConstraint, rmClearClosestPointConstraints, rmAddClosestPointConstraint, rmCreateMaxHeightConstraint} from "${LIB_PATH}/Constraint";
import {rmAddFairLoc, rmAddFairLocConstraint, rmFairLocXFraction, rmFairLocZFraction, rmGetNumberFairLocs, rmPlaceFairLocs, rmResetFairLocs} from "${LIB_PATH}/FairLoc";
import {rmAddObjectDefConstraint, rmAddObjectDefItem, rmAddObjectDefToClass, rmCreateObjectDef, rmGetNumberUnitsPlaced, rmGetUnitPlaced, rmGetUnitPlacedOfPlayer, rmPlaceObjectDefAtAreaLoc, rmPlaceObjectDefAtLoc, rmPlaceObjectDefAtRandomAreaOfClass, rmPlaceObjectDefInArea, rmPlaceObjectDefInRandomAreaOfClass, rmPlaceObjectDefPerPlayer, rmSetIgnoreForceToGaia, rmSetObjectDefMaxDistance, rmSetObjectDefMinDistance, rmCreateStartingUnitsObjectDef, rmSetObjectDefAllowOverlap, rmSetObjectDefTradeRouteID, rmPlaceObjectDefAtPoint, rmSetObjectDefHerdAngle, rmSetObjectDefCreateHerd, rmSetObjectDefGarrisonStartingUnits, rmSetObjectDefGarrisonSecondaryUnits} from "${LIB_PATH}/ObjectDef";
import {rmAddPlayerResource, rmGetNumberPlayersOnTeam, rmGetPlayerCiv, rmGetPlayerCulture, rmGetPlayerName, rmGetPlayerTeam, rmMultiplyPlayerResource, rmPlacePlayer, rmPlacePlayersCircular, rmPlacePlayersLine, rmPlacePlayersSquare, rmPlayerLocXFraction, rmPlayerLocZFraction, rmSetPlacementSection, rmSetPlacementTeam, rmSetPlayerArea, rmSetPlayerLocation, rmSetPlayerPlacementArea, rmSetPlayerResource, rmSetTeamArea, rmSetTeamSpacingModifier} from "${LIB_PATH}/Player";
import {rmAddTriggerCondition, rmAddTriggerEffect, rmAddUnitsToArmy, rmCreateArmy, rmCreateTrigger, rmSetTriggerActive, rmSetTriggerConditionParam, rmSetTriggerConditionParamArmy, rmSetTriggerConditionParamFloat, rmSetTriggerConditionParamInt, rmSetTriggerEffectParam, rmSetTriggerEffectParamArmy, rmSetTriggerEffectParamFloat, rmSetTriggerEffectParamInt, rmSetTriggerLoop, rmSetTriggerPriority, rmSetTriggerRunImmediately, rmSetVCFile, rmSwitchToTrigger, rmTriggerID} from "${LIB_PATH}/Trigger";
import {rmAreaFractionToTiles, rmAreaTilesToFraction, rmDegreesToRadians, rmMetersToTiles, rmTilesToMeters, rmXFractionToMeters, rmXFractionToTiles, rmXMetersToFraction, rmXTilesToFraction, rmZFractionToMeters, rmZFractionToTiles, rmZMetersToFraction, rmZTilesToFraction} from "${LIB_PATH}/Converter";
import {rmCreateGrouping, rmSetGroupingMinDistance, rmSetGroupingMaxDistance, rmAddGroupingConstraint, rmAddGroupingToClass, rmPlaceGroupingAtLoc} from "${LIB_PATH}/Grouping";
import {rmRiverCreate, rmRiverAddWaypoint, rmRiverSetShallowRadius, rmRiverAddShallow, rmRiverSetBankNoiseParams, rmRiverBuild, rmRiverSetConnections} from "${LIB_PATH}/River";
import {cMapSize, cNumberNonGaiaPlayers, cNumberPlayers, cNumberTeams, rmClassID, rmDefineClass, rmDefineConstant, rmEchoError, rmEchoInfo, rmEchoWarning, rmGetSeaLevel, rmRandFloat, rmRandInt, rmSetGaiaCiv, rmSetLightingSet, rmSetMapSize, rmSetSeaLevel, rmSetSeaType, rmSetStatusText, rmTerrainInitialize, sqrt, rmGetCivID, rmAllocateSubCivs, rmSetSubCiv, rmSetWindMagnitude, rmSetGlobalRain, rmSetGlobalSnow, rmSetMapElevationParameters, rmSetBaseTerrainMix, rmSetMapType, rmSetWorldCircleConstraint, rmGetMapXSize, rmGetNomadStart, rmGetUnitPosition, cElevTurbulence, rmFindClosestPointVector, rmFindClosestPoint, rmSetNuggetDifficulty, rmGetIsKOTH, rmAddMerc, rmEnableLocalWater, rmFindCloserArea, rmIsMapType, rmGetHomeCityLevel, rmGetHighHomeCityLevel, rmGetAverageHomeCityLevel, rmGetLowHomeCityLevel, rmGetIsFFA} from "${LIB_PATH}/RandomMap";
import {rmCreateTradeRoute, rmAddTradeRouteWaypoint, rmAddRandomTradeRouteWaypoints, rmBuildTradeRoute, rmGetTradeRouteWayPoint, rmCreateTradeRouteWaypointsInArea, rmAddRandomTradeRouteWaypointsVector} from "${LIB_PATH}/TradeRoute";
${extensions.replace(/#LIB#/g, LIB_PATH)}
${map_info} 

${includes}

${xts}`;
    fs.writeFileSync(filename.replace(/\//g, '\\'), xts);
    if (!isInclude)
        console.log(`\n\x1b[1m\x1b[42m Success \x1b[0m\nConverted to \x1b[33m${filename}\x1b[0m\n`);
    else
        console.log(`Converted with the following exports:\n    ${functions.join("\n    ")}`);
    return functions;
}
function TypeScriptToXS(filename, isInclude = false) {
    if (!fs.existsSync(filename) && FORCE_OPEN) {
        let path = filename.split('/');
        filename = SOURCE_PATH + '/' + path[path.length - 1];
    }
    if (!fs.existsSync(filename)) {
        if (!IGNORE_ERRORS)
            console.log(`\x1b[1m\x1b[41m FileError \x1b[40m  -  File does not exist:\x1b[0m
     \x1b[90mfile not found: \x1b[33m${filename}\x1b[0m\n`);
        return;
    }
    const source = fs.readFileSync(filename).toString();
    let xs = prettier.format(source.replace(/((?<==\s*"[^;]*)\\(?=[^"]+"[^;]*;))|(?:(?<=\(\s*"[^;]*)\\(?=[^"]+"[^;]*\)\s*;))/g, "#FORWARDSLASH#"), {
        semi: true,
        parser: "typescript",
        rangeStart: 25,
        useTabs: true,
        tabWidth: 4,
        printWidth: 140,
        singleQuote: true,
    }).replace(/((?<==\s*"[^;]*)#FORWARDSLASH#(?=[^"]+"[^;]*;))|(?:(?<=\(\s*"[^;]*)#FORWARDSLASH#(?=[^"]+"[^;]*\)\s*;))/gm, '\\').replace(/(?<=\w|\s)===/g, "==");
    let failed = false;
    const errors = [
        {
            message: "Unsupported XS type",
            regex: /(?<!\n[^\n]*\/\/((?!\/\/).)*)(?<!\/\*((?!\*\/)([^$]))*)(?:(?:var)|(?:let)|(?:const))\s+\w+\s*:(?!\s*((?:void)|(?:int)|(?:float)|(?:string)|(?:boolean)|(?:vector)|(?:long)|(?:River)|(?:Ocean)|(?:Lake)|(?:Cliff)|(?:MapType)|(?:Water)|(?:Forest)|(?:Mix)))[^;]*;/g,
            highlight: /(?<=(?:(?:var)|(?:let)|(?:const))\s+\w+\s*:\s*)\w+/
        },
        {
            message: "Missing variable type",
            regex: /(?<!\n[^\n]*\/\/((?!\/\/).)*)(?<!\/\*((?!\*\/)([^$]))*)(?<!for\s*\(\s*)(?:(?:var)|(?:let)|(?:const))\s+\b(?!mapinfo\b)\w+\s*=(?:\s*[^;]*;)/gm,
            highlight: /(?<=(?:(?:var)|(?:let)|(?:const)))\s+\w+\s*/
        },
        {
            message: "Uninitialized variable",
            regex: /(?<!\n[^\n]*\/\/((?!\/\/).)*)(?<!\/\*((?!\*\/)([^$]))*)(?<!for\s*\(\s*)(?:(?:var)|(?:let)|(?:const))\s+\w+\s*(?:\s*[^=;]*;)/gm,
            highlight: /(?<=(?:(?:var)|(?:let)|(?:const)))\s+\w+\s*/
        },
        {
            message: "Missing return type",
            regex: /(?<!\n[^\n]*\/\/((?!\/\/).)*)(?<!\/\*((?!\*\/)([^$]))*)(?<=\s)function\s+\w+\s*\([^{]*\)(?=\s*(\/\/[^\n]*)?\s*{)/gm,
            highlight: /(?<=function)\s+\w+\s*(?=\()/
        },
        {
            message: "Wrong function declaration",
            regex: /(?<!\n[^\n]*\/\/((?!\/\/).)*)(?<!\/\*((?!\*\/)([^$]))*)(?<=\s)function\s+\w+\s*(?=\()(?!\((?:(\s*\w+\s*:\s*((?:void)|(?:int)|(?:float)|(?:string)|(?:boolean)|(?:vector)|(?:long)|(?:River)|(?:Ocean)|(?:Lake)|(?:Cliff)|(?:MapType)|(?:Water)|(?:Forest)|(?:Mix))\s*=\s*)[^,{]*)?(,(\s*\w+\s*:\s*((?:void)|(?:int)|(?:float)|(?:string)|(?:boolean)|(?:vector)|(?:long)|(?:River)|(?:Ocean)|(?:Lake)|(?:Cliff)|(?:MapType)|(?:Water)|(?:Forest)|(?:Mix))\s*=\s*)[^,{]*)*\)(\s*:\s*((?:void)|(?:int)|(?:float)|(?:string)|(?:boolean)|(?:vector)|(?:long)|(?:River)|(?:Ocean)|(?:Lake)|(?:Cliff)|(?:MapType)|(?:Water)|(?:Forest)|(?:Mix)))?\s*(\/\/[^\n]*)?\s*{)/g,
            highlight: /(?<=function)\s+\w+/
        },
    ];
    if (!IGNORE_ERRORS)
        errors.forEach((e) => __awaiter(this, void 0, void 0, function* () {
            const regex = e.regex;
            let match = regex.exec(source);
            if (match != null) {
                failed = true;
                console.log(`\x1b[1m\x1b[41m XTSSyntaxError \x1b[40m  -  ${e.message}:\x1b[0m\n`);
            }
            while (match != null) {
                let line = source.substr(0, match.index).split('\n').length;
                console.log(`${' '.repeat(Math.max(1, 4 - line.toString().length))}\x1b[1m${line}\x1b[0m | ${match[0].replace(e.highlight, t => "\x1b[31m" + t + "\x1b[0m")}
     \x1b[90mat \x1b[33m${filename + ':' + line}\x1b[0m\n`);
                match = regex.exec(source);
            }
        }));
    if (xs.search(/(?<!\n[^\n]*\/\/((?!\/\/).)*)(?<!\/\*((?!\*\/)([^$]))*)(?<=\s)function\s+main\s*\(/) === -1) {
        if (!IGNORE_ERRORS)
            console.log(`\x1b[1m\x1b[41m XTSSyntaxError \x1b[40m  -  Missing main function:\x1b[0m\n     | function\x1b[31m main\x1b[0m (): void { ... }
     \x1b[90mmissing from \x1b[33m${filename}\x1b[0m\n`);
        failed = true;
    }
    if (failed)
        return;
    xs = xs.replace(/\s*import\s*\{[^\}]*\}\s*from\s*"\.?\/?(..\/)*(?:(?:lib\/Types)|(?:lib\/Area)|(?:lib\/Connection)|(?:lib\/Constraint)|(?:lib\/FairLoc)|(?:lib\/ObjectDef)|(?:lib\/Player)|(?:lib\/Trigger)|(?:lib\/Converter)|(?:lib\/Grouping)|(?:lib\/River)|(?:lib\/RandomMap)|(?:lib\/Terrain)|(?:lib\/TradeRoute)|(?:lib\/UHC))";\s*\n*/g, '');
    xs = xs.replace(/(?:\s?\/\*\*(?:(?!\*\/)([^$]))*THIS SCRIPT WAS GENERATED FROM AN .XS SCRIPT(?:(?!\*\/)([^$]))*\*\/)\s*/g, '');
    xs = xs.replace(/\s*:\s*/g, ': ').replace(/ ?\{/g, ' {');
    xs = xs.replace(/:\s*boolean/g, ": bool");
    xs = xs.replace(/:\s*((?:River)|(?:Ocean)|(?:Lake)|(?:Cliff)|(?:MapType)|(?:Water)|(?:Forest)|(?:Mix))/g, ": string");
    xs = xs.replace(/(?<!\n[^\n]*\/\/((?!\/\/).)*)(?<!\/\*((?!\*\/)([^$]))*)\s+as\s+((?:void)|(?:int)|(?:float)|(?:string)|(?:boolean)|(?:vector)|(?:long)|(?:River)|(?:Ocean)|(?:Lake)|(?:Cliff)|(?:MapType)|(?:Water)|(?:Forest)|(?:Mix))/gm, '');
    xs = xs.replace(/(?:export\s+)?function\s+\w+\s*\([^\{]*\)\s*:\s*(?:(?:void)|(?:int)|(?:float)|(?:string)|(?:bool)|(?:vector)|(?:long))\s*(\/\/[^\n]*)?\s*{/g, dec => {
        let dec_split = dec.split(/\s+/);
        const return_type = dec_split[dec_split.length - 2];
        dec_split[dec_split.length - 3] = dec_split[dec_split.length - 3].slice(0, -2);
        dec_split = dec_split.slice(dec_split[0].startsWith("export") ? 2 : 1, -2);
        let declaration = `${return_type} ${dec_split.join(' ')}) {`;
        declaration = declaration.replace(/(?<=\([^\{]*\s*)\w+\s*:\s*(?:(?:void)|(?:int)|(?:float)|(?:string)|(?:bool)|(?:vector)|(?:long))(?=\s*=)/g, v => v.split(/\s*:\s*/).reverse().join(' '));
        return declaration.replace(/(?<=(?:(?:void)|(?:int)|(?:float)|(?:string)|(?:bool)|(?:vector)|(?:long))\s+\w+\s*)\(\s*\)(?=\s*(\/\/[^\n]*)?\s*{)/g, "(void)");
    });
    xs = xs.replace(/(?:(?:var)|(?:let)|(?:const))\s+\w+\s*:\s*(?:(?:void)|(?:int)|(?:float)|(?:string)|(?:bool)|(?:vector)|(?:long))(?=\s*=)/g, dec => dec.replace(/(?:(?:var)|(?:let)|(?:const))\s+/, '').split(/\s*:\s*/).reverse().join(' '));
    xs = xs.replace(/(?<!\n[^\n]*\/\/(?:(?!\/\/).)*)(?<!\/\*(?:(?!\*\/)([^$]))*)\s*\n?import\s*\{[^\}]*}\s*from\s*(?=(?:(?:"[^"]+")|(?:'[^']+'))\s*;)/gm, dec => "\ninclude ");
    xs = xs.replace(/(?<!\n[^\n]*\/\/(?:(?!\/\/).)*)(?<!\/\*(?:(?!\*\/)([^$]))*)(?<=include\s*")[./\\]*[/\\\w]+(?="\s*;)/g, dec => `${dec.split('/').slice(-1)[0]}.xs`);
    xs = xs.replace(/(?:(?<=for\s*\()\s*var\s*(?=[^\{]*\)\s*\{))|(?:(?<=for\s*\([^}]*)\s*;\s*\w*\s*\+\+\s*(?=\)\s*\{))/g, '');
    xs = xs.replace(/for\s*\([^{]*\)\s*\{/g, dec => {
        const index_name = /(?<=for\s*\(\s*)\w+(?=\s*=[^{]*\)\s*\{)/.exec(dec)[0];
        return dec.replace(RegExp(`(?<=for\\s*\\(\\s*${index_name}\\s*=[^;]*;\\s*)${index_name}\\s*(?=<=?[^{]*\\)\\s*\\{)`, 'g'), '');
    });
    xs = `
/**
 * -----------------------------------------------------
 * THIS SCRIPT WAS TRANSPILED FROM AN .XTS SCRIPT
 * Original script: \`${filename}\`
 * Conversion date: \`${DATE}\`
 * -----------------------------------------------------
 */
${xs}`;
    let mapinfo;
    xs = xs.replace(/(\s?\/\*\*(?:(?!\*\/)([^$]))*\*\/)\s*const\s+mapinfo\s*=\s*\{(?:(?!\};)([^$]))*\};/g, m => {
        try {
            eval(m.replace(/(\s?\/\*\*(?:(?!\*\/)([^$]))*\*\/)\s*const\s+(?=mapinfo\s*=)/, '').replace(/\\n/g, '\\\\n'));
        }
        catch (e) {
            if (!IGNORE_WARNINGS)
                console.log(`\x1b[1m\x1b[43m Warning \x1b[40m  -  Failed to parse map info:\x1b[0m
     \x1b[90mfrom \x1b[33m${filename}\x1b[0m\n`);
        }
        return '';
    });
    if (mapinfo == undefined) {
        if (!IGNORE_WARNINGS)
            console.log(`\x1b[1m\x1b[43m Warning \x1b[40m  -  Missing map info declaration:\x1b[0m\n     | const\x1b[31m mapinfo\x1b[0m = { ... };
     \x1b[90mmissing from \x1b[33m${filename}\x1b[0m\n`);
    }
    else {
        let attributes = [];
        for (const attr in mapinfo)
            if (Object.prototype.hasOwnProperty.call(mapinfo, attr)
                && attr !== "loadss"
                && mapinfo[attr] !== undefined
                && mapinfo[attr] !== null)
                attributes.push(`${attr} = "${mapinfo[attr].toString()}"`);
        let xml = `<?xml version = "1.0" encoding = "UTF-8"?>

<!-- THIS XML WAS GENERATED FROM AN .XTS SCRIPT                  -->
<!-- Original script: \`${filename + '\`' + ' '.repeat(Math.max(1, 40 - filename.length))} -->
<!-- Conversion date: \`${DATE + '\`' + ' '.repeat(Math.max(1, 40 - DATE.length))} -->

<mapinfo
  ${attributes.join("\n  ").replace(/\//g, '\\')}\n>
    <loadss>${mapinfo.loadss.join("</loadss>\n    <loadss>").replace(/\//g, '\\').replace(/\<\\loadss\>/g, "</loadss>")}</loadss>
</mapinfo>`;
        fs.writeFileSync(filename.replace(/\//g, '\\').replace(/\.x?ts/, ".xml"), xml);
    }
    filename = filename.replace(/\.x?ts/, ".xs");
    if (!isInclude) {
        let path = filename.split(/(\/|\\)/g);
        filename = OUT_PATH + '/' + path[path.length - 1];
    }
    fs.writeFileSync(filename.replace(/\//g, '\\'), xs.replace(/'/g, '"'));
    console.log(`\x1b[1m\x1b[42m Success \x1b[0m\nTranspiled to \x1b[33m${filename}\x1b[0m`);
    if (mapinfo != undefined)
        console.log(`XML map info written to: \x1b[33m${filename.replace(/\//g, '\\').replace(/\.xs/, ".xml")}\x1b[0m`);
    console.log('');
}
process.argv.slice(2).forEach(file => {
    file = file.replace(/\\/g, '/').replace(/"|'/g, '');
    if (file.endsWith(".xs"))
        XStoTypeScript(file);
    else if (file.endsWith(".xts") || file.endsWith(".ts"))
        TypeScriptToXS(file);
    else
        console.log(`\x1b[1m\x1b[41m FileError \x1b[40m  -  Unsupported file extension:\x1b[0m
        \x1b[90mcan't convert \x1b[33m${file}\x1b[0m\n`);
});
