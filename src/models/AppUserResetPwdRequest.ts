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
 * @interface AppUserResetPwdRequest
 */
export interface AppUserResetPwdRequest {
    /**
     * 
     * @type {string}
     * @memberof AppUserResetPwdRequest
     */
    phone?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppUserResetPwdRequest
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppUserResetPwdRequest
     */
    code: string;
    /**
     * 
     * @type {string}
     * @memberof AppUserResetPwdRequest
     */
    pwd: string;
}

/**
 * Check if a given object implements the AppUserResetPwdRequest interface.
 */
export function instanceOfAppUserResetPwdRequest(value: object): value is AppUserResetPwdRequest {
    if (!('code' in value) || value['code'] === undefined) return false;
    if (!('pwd' in value) || value['pwd'] === undefined) return false;
    return true;
}

export function AppUserResetPwdRequestFromJSON(json: any): AppUserResetPwdRequest {
    return AppUserResetPwdRequestFromJSONTyped(json, false);
}

export function AppUserResetPwdRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppUserResetPwdRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'phone': json['phone'] == null ? undefined : json['phone'],
        'email': json['email'] == null ? undefined : json['email'],
        'code': json['code'],
        'pwd': json['pwd'],
    };
}

export function AppUserResetPwdRequestToJSON(json: any): AppUserResetPwdRequest {
    return AppUserResetPwdRequestToJSONTyped(json, false);
}

export function AppUserResetPwdRequestToJSONTyped(value?: AppUserResetPwdRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'phone': value['phone'],
        'email': value['email'],
        'code': value['code'],
        'pwd': value['pwd'],
    };
}

