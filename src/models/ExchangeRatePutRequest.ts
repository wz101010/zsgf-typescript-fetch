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
 * @interface ExchangeRatePutRequest
 */
export interface ExchangeRatePutRequest {
    /**
     * 
     * @type {string}
     * @memberof ExchangeRatePutRequest
     */
    toCurrencyCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ExchangeRatePutRequest
     */
    exchangeRate?: number;
    /**
     * 
     * @type {string}
     * @memberof ExchangeRatePutRequest
     */
    description?: string | null;
}

/**
 * Check if a given object implements the ExchangeRatePutRequest interface.
 */
export function instanceOfExchangeRatePutRequest(value: object): value is ExchangeRatePutRequest {
    return true;
}

export function ExchangeRatePutRequestFromJSON(json: any): ExchangeRatePutRequest {
    return ExchangeRatePutRequestFromJSONTyped(json, false);
}

export function ExchangeRatePutRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExchangeRatePutRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'toCurrencyCode': json['toCurrencyCode'] == null ? undefined : json['toCurrencyCode'],
        'exchangeRate': json['exchangeRate'] == null ? undefined : json['exchangeRate'],
        'description': json['description'] == null ? undefined : json['description'],
    };
}

export function ExchangeRatePutRequestToJSON(json: any): ExchangeRatePutRequest {
    return ExchangeRatePutRequestToJSONTyped(json, false);
}

export function ExchangeRatePutRequestToJSONTyped(value?: ExchangeRatePutRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'toCurrencyCode': value['toCurrencyCode'],
        'exchangeRate': value['exchangeRate'],
        'description': value['description'],
    };
}

