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
 * @interface SendSMSCodeRequest
 */
export interface SendSMSCodeRequest {
    /**
     * 手机号
     * @type {string}
     * @memberof SendSMSCodeRequest
     */
    phone: string;
    /**
     * 用途。可选值：signup/forgetpwd
     * @type {string}
     * @memberof SendSMSCodeRequest
     */
    type: string;
}

/**
 * Check if a given object implements the SendSMSCodeRequest interface.
 */
export function instanceOfSendSMSCodeRequest(value: object): value is SendSMSCodeRequest {
    if (!('phone' in value) || value['phone'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function SendSMSCodeRequestFromJSON(json: any): SendSMSCodeRequest {
    return SendSMSCodeRequestFromJSONTyped(json, false);
}

export function SendSMSCodeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SendSMSCodeRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'phone': json['phone'],
        'type': json['type'],
    };
}

export function SendSMSCodeRequestToJSON(json: any): SendSMSCodeRequest {
    return SendSMSCodeRequestToJSONTyped(json, false);
}

export function SendSMSCodeRequestToJSONTyped(value?: SendSMSCodeRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'phone': value['phone'],
        'type': value['type'],
    };
}

