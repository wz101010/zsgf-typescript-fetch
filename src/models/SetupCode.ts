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
 * @interface SetupCode
 */
export interface SetupCode {
    /**
     * 
     * @type {string}
     * @memberof SetupCode
     */
    readonly account?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SetupCode
     */
    readonly manualEntryKey?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SetupCode
     */
    readonly qrCodeSetupImageUrl?: string | null;
}

/**
 * Check if a given object implements the SetupCode interface.
 */
export function instanceOfSetupCode(value: object): value is SetupCode {
    return true;
}

export function SetupCodeFromJSON(json: any): SetupCode {
    return SetupCodeFromJSONTyped(json, false);
}

export function SetupCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetupCode {
    if (json == null) {
        return json;
    }
    return {
        
        'account': json['account'] == null ? undefined : json['account'],
        'manualEntryKey': json['manualEntryKey'] == null ? undefined : json['manualEntryKey'],
        'qrCodeSetupImageUrl': json['qrCodeSetupImageUrl'] == null ? undefined : json['qrCodeSetupImageUrl'],
    };
}

export function SetupCodeToJSON(json: any): SetupCode {
    return SetupCodeToJSONTyped(json, false);
}

export function SetupCodeToJSONTyped(value?: Omit<SetupCode, 'account'|'manualEntryKey'|'qrCodeSetupImageUrl'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

