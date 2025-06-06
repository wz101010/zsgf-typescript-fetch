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
 * 货币实体，用于表示和管理不同类型的货币信息。
 * @export
 * @interface Currency
 */
export interface Currency {
    /**
     * 货币的唯一标识符。
     * @type {number}
     * @memberof Currency
     */
    id?: number;
    /**
     * 货币的名称，例如 '人民币', '美元' 等。
     * @type {string}
     * @memberof Currency
     */
    name?: string | null;
    /**
     * 货币的ISO标准代码，例如 'CNY', 'USD' 等。
     * @type {string}
     * @memberof Currency
     */
    code?: string | null;
    /**
     * 货币的符号，例如 '$', '€', '¥' 等。
     * @type {string}
     * @memberof Currency
     */
    symbol?: string | null;
    /**
     * 发行该货币的机构或国家名称。
     * @type {string}
     * @memberof Currency
     */
    issuer?: string | null;
    /**
     * 货币的类型，例如 '法定货币', '加密货币' 等。
     * @type {string}
     * @memberof Currency
     */
    currencyType?: string | null;
    /**
     * 用于分类或标记货币的标签。
     * @type {string}
     * @memberof Currency
     */
    tags?: string | null;
    /**
     * 指示货币当前是否可用。
     * @type {boolean}
     * @memberof Currency
     */
    status?: boolean;
    /**
     * 指示该货币是否允许进行虚拟充值。
     * @type {boolean}
     * @memberof Currency
     */
    enableVirtualRecharge?: boolean;
    /**
     * 指示该货币是否允许进行虚拟消费。
     * @type {boolean}
     * @memberof Currency
     */
    enableVirtualConsume?: boolean;
    /**
     * 货币的详细描述信息。
     * @type {string}
     * @memberof Currency
     */
    description?: string | null;
    /**
     * 该货币与法定货币的兑换比率。
     * @type {number}
     * @memberof Currency
     */
    fiatExchangeRate?: number;
    /**
     * 每日通过法定货币充值的最大限额。
     * @type {number}
     * @memberof Currency
     */
    fiatDailyRechargeLimit?: number;
    /**
     * 货币的总供应量，0 表示无限制。
     * @type {number}
     * @memberof Currency
     */
    totalSupply?: number;
    /**
     * 货币记录的创建日期，默认为当前时间。
     * @type {Date}
     * @memberof Currency
     */
    createDate?: Date;
    /**
     * 货币记录的最后更新日期，默认为当前时间。
     * @type {Date}
     * @memberof Currency
     */
    lastUpdate?: Date;
}

/**
 * Check if a given object implements the Currency interface.
 */
export function instanceOfCurrency(value: object): value is Currency {
    return true;
}

export function CurrencyFromJSON(json: any): Currency {
    return CurrencyFromJSONTyped(json, false);
}

export function CurrencyFromJSONTyped(json: any, ignoreDiscriminator: boolean): Currency {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'code': json['code'] == null ? undefined : json['code'],
        'symbol': json['symbol'] == null ? undefined : json['symbol'],
        'issuer': json['issuer'] == null ? undefined : json['issuer'],
        'currencyType': json['currencyType'] == null ? undefined : json['currencyType'],
        'tags': json['tags'] == null ? undefined : json['tags'],
        'status': json['status'] == null ? undefined : json['status'],
        'enableVirtualRecharge': json['enableVirtualRecharge'] == null ? undefined : json['enableVirtualRecharge'],
        'enableVirtualConsume': json['enableVirtualConsume'] == null ? undefined : json['enableVirtualConsume'],
        'description': json['description'] == null ? undefined : json['description'],
        'fiatExchangeRate': json['fiatExchangeRate'] == null ? undefined : json['fiatExchangeRate'],
        'fiatDailyRechargeLimit': json['fiatDailyRechargeLimit'] == null ? undefined : json['fiatDailyRechargeLimit'],
        'totalSupply': json['totalSupply'] == null ? undefined : json['totalSupply'],
        'createDate': json['createDate'] == null ? undefined : (new Date(json['createDate'])),
        'lastUpdate': json['lastUpdate'] == null ? undefined : (new Date(json['lastUpdate'])),
    };
}

export function CurrencyToJSON(json: any): Currency {
    return CurrencyToJSONTyped(json, false);
}

export function CurrencyToJSONTyped(value?: Currency | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'code': value['code'],
        'symbol': value['symbol'],
        'issuer': value['issuer'],
        'currencyType': value['currencyType'],
        'tags': value['tags'],
        'status': value['status'],
        'enableVirtualRecharge': value['enableVirtualRecharge'],
        'enableVirtualConsume': value['enableVirtualConsume'],
        'description': value['description'],
        'fiatExchangeRate': value['fiatExchangeRate'],
        'fiatDailyRechargeLimit': value['fiatDailyRechargeLimit'],
        'totalSupply': value['totalSupply'],
        'createDate': value['createDate'] == null ? undefined : ((value['createDate']).toISOString()),
        'lastUpdate': value['lastUpdate'] == null ? undefined : ((value['lastUpdate']).toISOString()),
    };
}

