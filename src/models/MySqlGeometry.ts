/* tslint:disable */
/* eslint-disable */
/**
 * 全部  API 文档
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface MySqlGeometry
 */
export interface MySqlGeometry {
    /**
     * 
     * @type {number}
     * @memberof MySqlGeometry
     */
    readonly xCoordinate?: number | null;
    /**
     * 
     * @type {number}
     * @memberof MySqlGeometry
     */
    readonly yCoordinate?: number | null;
    /**
     * 
     * @type {number}
     * @memberof MySqlGeometry
     */
    readonly srid?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof MySqlGeometry
     */
    isNull?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MySqlGeometry
     */
    readonly value?: string | null;
}

/**
 * Check if a given object implements the MySqlGeometry interface.
 */
export function instanceOfMySqlGeometry(value: object): value is MySqlGeometry {
    return true;
}

export function MySqlGeometryFromJSON(json: any): MySqlGeometry {
    return MySqlGeometryFromJSONTyped(json, false);
}

export function MySqlGeometryFromJSONTyped(json: any, ignoreDiscriminator: boolean): MySqlGeometry {
    if (json == null) {
        return json;
    }
    return {
        
        'xCoordinate': json['xCoordinate'] == null ? undefined : json['xCoordinate'],
        'yCoordinate': json['yCoordinate'] == null ? undefined : json['yCoordinate'],
        'srid': json['srid'] == null ? undefined : json['srid'],
        'isNull': json['isNull'] == null ? undefined : json['isNull'],
        'value': json['value'] == null ? undefined : json['value'],
    };
}

export function MySqlGeometryToJSON(json: any): MySqlGeometry {
    return MySqlGeometryToJSONTyped(json, false);
}

export function MySqlGeometryToJSONTyped(value?: Omit<MySqlGeometry, 'xCoordinate'|'yCoordinate'|'srid'|'value'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'isNull': value['isNull'],
    };
}

