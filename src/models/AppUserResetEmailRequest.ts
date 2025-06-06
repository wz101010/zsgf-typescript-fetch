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
 * @interface AppUserResetEmailRequest
 */
export interface AppUserResetEmailRequest {
    /**
     * 邮箱
     * @type {string}
     * @memberof AppUserResetEmailRequest
     */
    email?: string | null;
    /**
     * 邮箱验证码
     * @type {string}
     * @memberof AppUserResetEmailRequest
     */
    code: string;
}

/**
 * Check if a given object implements the AppUserResetEmailRequest interface.
 */
export function instanceOfAppUserResetEmailRequest(value: object): value is AppUserResetEmailRequest {
    if (!('code' in value) || value['code'] === undefined) return false;
    return true;
}

export function AppUserResetEmailRequestFromJSON(json: any): AppUserResetEmailRequest {
    return AppUserResetEmailRequestFromJSONTyped(json, false);
}

export function AppUserResetEmailRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppUserResetEmailRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'email': json['email'] == null ? undefined : json['email'],
        'code': json['code'],
    };
}

export function AppUserResetEmailRequestToJSON(json: any): AppUserResetEmailRequest {
    return AppUserResetEmailRequestToJSONTyped(json, false);
}

export function AppUserResetEmailRequestToJSONTyped(value?: AppUserResetEmailRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'email': value['email'],
        'code': value['code'],
    };
}

