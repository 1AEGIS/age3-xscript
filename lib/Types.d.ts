export type int = number;
export type float = number;
export type double = number;
export type long = number;

export type resource = "food"|"wood"|"gold"|"favor";

export interface vector {
    x: float,
    y: float,
    z: float,
    equals: () => boolean,
    getClass: () => string,
    hashCode: () => string,
    notify: () => void,
    notifyAll: () => void,
    toString: () => string,
    wait: () => void
}

export type meters = float|int;
export type fraction = float;


/**
 * Returns the x component of the given vector.
 */
export declare function xsVectorGetX(v: vector): float;

/**
 * Returns the y component of the given vector.
 */
export declare function xsVectorGetY(v: vector): float;

/**
 * Returns the z component of the given vector.
 */
export declare function xsVectorGetZ(v: vector): float;

/**
 * Returns the length of the given vector.
 */
export declare function xsVectorLength(v: vector): float;

/**
 * Returns the normalized version of the given vector.
 */
export declare function xsVectorNormalize(v: vector): vector;

/**
 * Set the 3 components into a vector, returns the new vector.
 */
export declare function xsVectorSet(x: float, y: float, z: float): vector;

/**
 * Set the x component of the given vector, returns the new vector.
 */
export declare function xsVectorSetX(v: vector, x: float): float;

/**
 * Set the y component of the given vector, returns the new vector.
 */
export declare function xsVectorSetY(v: vector, y: float): float;

/**
 * Set the z component of the given vector, returns the new vector.
 */
export declare function xsVectorSetZ(v: vector, z: float): float;



export declare const cOriginVector: vector;