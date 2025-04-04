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
import type { GeoLocationModel } from './GeoLocationModel';
import {
    GeoLocationModelFromJSON,
    GeoLocationModelFromJSONTyped,
    GeoLocationModelToJSON,
    GeoLocationModelToJSONTyped,
} from './GeoLocationModel';

/**
 * 
 * @export
 * @interface GeoLocationModelApiResponse
 */
export interface GeoLocationModelApiResponse {
    /**
     * 状态码
     * @type {number}
     * @memberof GeoLocationModelApiResponse
     */
    code?: number;
    /**
     * 
     * @type {GeoLocationModel}
     * @memberof GeoLocationModelApiResponse
     */
    data?: GeoLocationModel;
    /**
     * 错误信息
     * @type {string}
     * @memberof GeoLocationModelApiResponse
     */
    error?: string | null;
}

/**
 * Check if a given object implements the GeoLocationModelApiResponse interface.
 */
export function instanceOfGeoLocationModelApiResponse(value: object): value is GeoLocationModelApiResponse {
    return true;
}

export function GeoLocationModelApiResponseFromJSON(json: any): GeoLocationModelApiResponse {
    return GeoLocationModelApiResponseFromJSONTyped(json, false);
}

export function GeoLocationModelApiResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GeoLocationModelApiResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'] == null ? undefined : json['code'],
        'data': json['data'] == null ? undefined : GeoLocationModelFromJSON(json['data']),
        'error': json['error'] == null ? undefined : json['error'],
    };
}

export function GeoLocationModelApiResponseToJSON(json: any): GeoLocationModelApiResponse {
    return GeoLocationModelApiResponseToJSONTyped(json, false);
}

export function GeoLocationModelApiResponseToJSONTyped(value?: GeoLocationModelApiResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'code': value['code'],
        'data': GeoLocationModelToJSON(value['data']),
        'error': value['error'],
    };
}

