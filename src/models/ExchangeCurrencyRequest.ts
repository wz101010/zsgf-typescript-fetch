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
 * @interface ExchangeCurrencyRequest
 */
export interface ExchangeCurrencyRequest {
    /**
     * 源虚拟币代码
     * @type {string}
     * @memberof ExchangeCurrencyRequest
     */
    fromCurrency: string;
    /**
     * 目标虚拟币代码
     * @type {string}
     * @memberof ExchangeCurrencyRequest
     */
    currency: string;
    /**
     * 兑换额
     * @type {number}
     * @memberof ExchangeCurrencyRequest
     */
    balance: number;
    /**
     * 备注
     * @type {string}
     * @memberof ExchangeCurrencyRequest
     */
    remark?: string | null;
    /**
     * 描述
     * @type {string}
     * @memberof ExchangeCurrencyRequest
     */
    description?: string | null;
    /**
     * 标签
     * @type {string}
     * @memberof ExchangeCurrencyRequest
     */
    tags?: string | null;
}

/**
 * Check if a given object implements the ExchangeCurrencyRequest interface.
 */
export function instanceOfExchangeCurrencyRequest(value: object): value is ExchangeCurrencyRequest {
    if (!('fromCurrency' in value) || value['fromCurrency'] === undefined) return false;
    if (!('currency' in value) || value['currency'] === undefined) return false;
    if (!('balance' in value) || value['balance'] === undefined) return false;
    return true;
}

export function ExchangeCurrencyRequestFromJSON(json: any): ExchangeCurrencyRequest {
    return ExchangeCurrencyRequestFromJSONTyped(json, false);
}

export function ExchangeCurrencyRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExchangeCurrencyRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'fromCurrency': json['fromCurrency'],
        'currency': json['currency'],
        'balance': json['balance'],
        'remark': json['remark'] == null ? undefined : json['remark'],
        'description': json['description'] == null ? undefined : json['description'],
        'tags': json['tags'] == null ? undefined : json['tags'],
    };
}

export function ExchangeCurrencyRequestToJSON(json: any): ExchangeCurrencyRequest {
    return ExchangeCurrencyRequestToJSONTyped(json, false);
}

export function ExchangeCurrencyRequestToJSONTyped(value?: ExchangeCurrencyRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'fromCurrency': value['fromCurrency'],
        'currency': value['currency'],
        'balance': value['balance'],
        'remark': value['remark'],
        'description': value['description'],
        'tags': value['tags'],
    };
}

