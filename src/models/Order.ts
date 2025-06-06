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
 * 订单实体，用于记录用户的订单信息。
 * @export
 * @interface Order
 */
export interface Order {
    /**
     * 订单的唯一标识符。
     * @type {number}
     * @memberof Order
     */
    id?: number;
    /**
     * 创建订单的用户ID。
     * @type {number}
     * @memberof Order
     */
    userID?: number;
    /**
     * 订单的支付类型，例如 '信用卡', '支付宝', '微信支付' 等。
     * @type {string}
     * @memberof Order
     */
    payType?: string | null;
    /**
     * 订单的总金额。
     * @type {number}
     * @memberof Order
     */
    amount?: number;
    /**
     * 订单的唯一编号，通常由系统生成。
     * @type {string}
     * @memberof Order
     */
    orderNo?: string | null;
    /**
     * 与订单关联的交易编号，通常由支付平台提供。
     * @type {string}
     * @memberof Order
     */
    tradeNo?: string | null;
    /**
     * 订单的当前状态，例如 '待支付', '已完成', '已取消' 等。
     * @type {string}
     * @memberof Order
     */
    status?: string | null;
    /**
     * 订单中商品的类型分类。
     * @type {string}
     * @memberof Order
     */
    productType?: string | null;
    /**
     * 订单中商品的唯一标识符。
     * @type {string}
     * @memberof Order
     */
    productID?: string | null;
    /**
     * 订单中商品的名称。
     * @type {string}
     * @memberof Order
     */
    productName?: string | null;
    /**
     * 指示订单是否允许进行退款操作。
     * @type {boolean}
     * @memberof Order
     */
    allowRefund?: boolean;
    /**
     * 订单允许进行退款操作的截止时间。
     * @type {Date}
     * @memberof Order
     */
    allowRefundUntil?: Date;
    /**
     * 用于分类或标记订单的标签。
     * @type {string}
     * @memberof Order
     */
    tags?: string | null;
    /**
     * 订单的额外备注信息。
     * @type {string}
     * @memberof Order
     */
    remark?: string | null;
    /**
     * 订单的详细描述信息。
     * @type {string}
     * @memberof Order
     */
    description?: string | null;
    /**
     * 订单完成支付的时间。
     * @type {Date}
     * @memberof Order
     */
    orderPayTime?: Date;
    /**
     * 订单的过期时间，超过该时间订单将自动取消。
     * @type {Date}
     * @memberof Order
     */
    expireTime?: Date;
    /**
     * 订单的创建时间，默认为当前时间。
     * @type {Date}
     * @memberof Order
     */
    createDate?: Date;
    /**
     * 订单的最后更新时间，默认为当前时间。
     * @type {Date}
     * @memberof Order
     */
    lastUpdate?: Date;
}

/**
 * Check if a given object implements the Order interface.
 */
export function instanceOfOrder(value: object): value is Order {
    return true;
}

export function OrderFromJSON(json: any): Order {
    return OrderFromJSONTyped(json, false);
}

export function OrderFromJSONTyped(json: any, ignoreDiscriminator: boolean): Order {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'userID': json['userID'] == null ? undefined : json['userID'],
        'payType': json['payType'] == null ? undefined : json['payType'],
        'amount': json['amount'] == null ? undefined : json['amount'],
        'orderNo': json['orderNo'] == null ? undefined : json['orderNo'],
        'tradeNo': json['tradeNo'] == null ? undefined : json['tradeNo'],
        'status': json['status'] == null ? undefined : json['status'],
        'productType': json['productType'] == null ? undefined : json['productType'],
        'productID': json['productID'] == null ? undefined : json['productID'],
        'productName': json['productName'] == null ? undefined : json['productName'],
        'allowRefund': json['allowRefund'] == null ? undefined : json['allowRefund'],
        'allowRefundUntil': json['allowRefundUntil'] == null ? undefined : (new Date(json['allowRefundUntil'])),
        'tags': json['tags'] == null ? undefined : json['tags'],
        'remark': json['remark'] == null ? undefined : json['remark'],
        'description': json['description'] == null ? undefined : json['description'],
        'orderPayTime': json['orderPayTime'] == null ? undefined : (new Date(json['orderPayTime'])),
        'expireTime': json['expireTime'] == null ? undefined : (new Date(json['expireTime'])),
        'createDate': json['createDate'] == null ? undefined : (new Date(json['createDate'])),
        'lastUpdate': json['lastUpdate'] == null ? undefined : (new Date(json['lastUpdate'])),
    };
}

export function OrderToJSON(json: any): Order {
    return OrderToJSONTyped(json, false);
}

export function OrderToJSONTyped(value?: Order | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'userID': value['userID'],
        'payType': value['payType'],
        'amount': value['amount'],
        'orderNo': value['orderNo'],
        'tradeNo': value['tradeNo'],
        'status': value['status'],
        'productType': value['productType'],
        'productID': value['productID'],
        'productName': value['productName'],
        'allowRefund': value['allowRefund'],
        'allowRefundUntil': value['allowRefundUntil'] == null ? undefined : ((value['allowRefundUntil']).toISOString()),
        'tags': value['tags'],
        'remark': value['remark'],
        'description': value['description'],
        'orderPayTime': value['orderPayTime'] == null ? undefined : ((value['orderPayTime']).toISOString()),
        'expireTime': value['expireTime'] == null ? undefined : ((value['expireTime']).toISOString()),
        'createDate': value['createDate'] == null ? undefined : ((value['createDate']).toISOString()),
        'lastUpdate': value['lastUpdate'] == null ? undefined : ((value['lastUpdate']).toISOString()),
    };
}

