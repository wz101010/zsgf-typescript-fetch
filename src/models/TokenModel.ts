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
 * @interface TokenModel
 */
export interface TokenModel {
    /**
     * 
     * @type {string}
     * @memberof TokenModel
     */
    accessToken?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TokenModel
     */
    tokenType?: string | null;
    /**
     * 
     * @type {number}
     * @memberof TokenModel
     */
    expiresIn?: number;
}

/**
 * Check if a given object implements the TokenModel interface.
 */
export function instanceOfTokenModel(value: object): value is TokenModel {
    return true;
}

export function TokenModelFromJSON(json: any): TokenModel {
    return TokenModelFromJSONTyped(json, false);
}

export function TokenModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): TokenModel {
    if (json == null) {
        return json;
    }
    return {
        
        'accessToken': json['access_token'] == null ? undefined : json['access_token'],
        'tokenType': json['token_type'] == null ? undefined : json['token_type'],
        'expiresIn': json['expires_in'] == null ? undefined : json['expires_in'],
    };
}

export function TokenModelToJSON(json: any): TokenModel {
    return TokenModelToJSONTyped(json, false);
}

export function TokenModelToJSONTyped(value?: TokenModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'access_token': value['accessToken'],
        'token_type': value['tokenType'],
        'expires_in': value['expiresIn'],
    };
}

