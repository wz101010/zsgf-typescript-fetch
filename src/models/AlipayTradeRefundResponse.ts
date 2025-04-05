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
import type { RefundChargeInfo } from './RefundChargeInfo';
import {
    RefundChargeInfoFromJSON,
    RefundChargeInfoFromJSONTyped,
    RefundChargeInfoToJSON,
    RefundChargeInfoToJSONTyped,
} from './RefundChargeInfo';
import type { TradeFundBill } from './TradeFundBill';
import {
    TradeFundBillFromJSON,
    TradeFundBillFromJSONTyped,
    TradeFundBillToJSON,
    TradeFundBillToJSONTyped,
} from './TradeFundBill';
import type { PresetPayToolInfo } from './PresetPayToolInfo';
import {
    PresetPayToolInfoFromJSON,
    PresetPayToolInfoFromJSONTyped,
    PresetPayToolInfoToJSON,
    PresetPayToolInfoToJSONTyped,
} from './PresetPayToolInfo';
import type { VoucherDetail } from './VoucherDetail';
import {
    VoucherDetailFromJSON,
    VoucherDetailFromJSONTyped,
    VoucherDetailToJSON,
    VoucherDetailToJSONTyped,
} from './VoucherDetail';

/**
 * 
 * @export
 * @interface AlipayTradeRefundResponse
 */
export interface AlipayTradeRefundResponse {
    /**
     * 
     * @type {string}
     * @memberof AlipayTradeRefundResponse
     */
    code?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AlipayTradeRefundResponse
     */
    msg?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AlipayTradeRefundResponse
     */
    subCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AlipayTradeRefundResponse
     */
    subMsg?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AlipayTradeRefundResponse
     */
    body?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof AlipayTradeRefundResponse
     */
    readonly isError?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AlipayTradeRefundResponse
     */
    buyerLogonId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AlipayTradeRefundResponse
     */
    buyerOpenId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AlipayTradeRefundResponse
     */
    buyerUserId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AlipayTradeRefundResponse
     */
    fundChange?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AlipayTradeRefundResponse
     */
    gmtRefundPay?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AlipayTradeRefundResponse
     */
    hasDepositBack?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AlipayTradeRefundResponse
     */
    openId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AlipayTradeRefundResponse
     */
    outTradeNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AlipayTradeRefundResponse
     */
    preAuthCancelFee?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AlipayTradeRefundResponse
     */
    presentRefundBuyerAmount?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AlipayTradeRefundResponse
     */
    presentRefundDiscountAmount?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AlipayTradeRefundResponse
     */
    presentRefundMdiscountAmount?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AlipayTradeRefundResponse
     */
    refundChargeAmount?: string | null;
    /**
     * 
     * @type {Array<RefundChargeInfo>}
     * @memberof AlipayTradeRefundResponse
     */
    refundChargeInfoList?: Array<RefundChargeInfo> | null;
    /**
     * 
     * @type {string}
     * @memberof AlipayTradeRefundResponse
     */
    refundCurrency?: string | null;
    /**
     * 
     * @type {Array<TradeFundBill>}
     * @memberof AlipayTradeRefundResponse
     */
    refundDetailItemList?: Array<TradeFundBill> | null;
    /**
     * 
     * @type {string}
     * @memberof AlipayTradeRefundResponse
     */
    refundFee?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AlipayTradeRefundResponse
     */
    refundHybAmount?: string | null;
    /**
     * 
     * @type {PresetPayToolInfo}
     * @memberof AlipayTradeRefundResponse
     */
    refundPresetPaytoolList?: PresetPayToolInfo;
    /**
     * 
     * @type {string}
     * @memberof AlipayTradeRefundResponse
     */
    refundSettlementId?: string | null;
    /**
     * 
     * @type {Array<VoucherDetail>}
     * @memberof AlipayTradeRefundResponse
     */
    refundVoucherDetailList?: Array<VoucherDetail> | null;
    /**
     * 
     * @type {string}
     * @memberof AlipayTradeRefundResponse
     */
    sendBackFee?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AlipayTradeRefundResponse
     */
    storeName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AlipayTradeRefundResponse
     */
    tradeNo?: string | null;
}

/**
 * Check if a given object implements the AlipayTradeRefundResponse interface.
 */
export function instanceOfAlipayTradeRefundResponse(value: object): value is AlipayTradeRefundResponse {
    return true;
}

export function AlipayTradeRefundResponseFromJSON(json: any): AlipayTradeRefundResponse {
    return AlipayTradeRefundResponseFromJSONTyped(json, false);
}

export function AlipayTradeRefundResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlipayTradeRefundResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'] == null ? undefined : json['code'],
        'msg': json['msg'] == null ? undefined : json['msg'],
        'subCode': json['subCode'] == null ? undefined : json['subCode'],
        'subMsg': json['subMsg'] == null ? undefined : json['subMsg'],
        'body': json['body'] == null ? undefined : json['body'],
        'isError': json['isError'] == null ? undefined : json['isError'],
        'buyerLogonId': json['buyerLogonId'] == null ? undefined : json['buyerLogonId'],
        'buyerOpenId': json['buyerOpenId'] == null ? undefined : json['buyerOpenId'],
        'buyerUserId': json['buyerUserId'] == null ? undefined : json['buyerUserId'],
        'fundChange': json['fundChange'] == null ? undefined : json['fundChange'],
        'gmtRefundPay': json['gmtRefundPay'] == null ? undefined : json['gmtRefundPay'],
        'hasDepositBack': json['hasDepositBack'] == null ? undefined : json['hasDepositBack'],
        'openId': json['openId'] == null ? undefined : json['openId'],
        'outTradeNo': json['outTradeNo'] == null ? undefined : json['outTradeNo'],
        'preAuthCancelFee': json['preAuthCancelFee'] == null ? undefined : json['preAuthCancelFee'],
        'presentRefundBuyerAmount': json['presentRefundBuyerAmount'] == null ? undefined : json['presentRefundBuyerAmount'],
        'presentRefundDiscountAmount': json['presentRefundDiscountAmount'] == null ? undefined : json['presentRefundDiscountAmount'],
        'presentRefundMdiscountAmount': json['presentRefundMdiscountAmount'] == null ? undefined : json['presentRefundMdiscountAmount'],
        'refundChargeAmount': json['refundChargeAmount'] == null ? undefined : json['refundChargeAmount'],
        'refundChargeInfoList': json['refundChargeInfoList'] == null ? undefined : ((json['refundChargeInfoList'] as Array<any>).map(RefundChargeInfoFromJSON)),
        'refundCurrency': json['refundCurrency'] == null ? undefined : json['refundCurrency'],
        'refundDetailItemList': json['refundDetailItemList'] == null ? undefined : ((json['refundDetailItemList'] as Array<any>).map(TradeFundBillFromJSON)),
        'refundFee': json['refundFee'] == null ? undefined : json['refundFee'],
        'refundHybAmount': json['refundHybAmount'] == null ? undefined : json['refundHybAmount'],
        'refundPresetPaytoolList': json['refundPresetPaytoolList'] == null ? undefined : PresetPayToolInfoFromJSON(json['refundPresetPaytoolList']),
        'refundSettlementId': json['refundSettlementId'] == null ? undefined : json['refundSettlementId'],
        'refundVoucherDetailList': json['refundVoucherDetailList'] == null ? undefined : ((json['refundVoucherDetailList'] as Array<any>).map(VoucherDetailFromJSON)),
        'sendBackFee': json['sendBackFee'] == null ? undefined : json['sendBackFee'],
        'storeName': json['storeName'] == null ? undefined : json['storeName'],
        'tradeNo': json['tradeNo'] == null ? undefined : json['tradeNo'],
    };
}

export function AlipayTradeRefundResponseToJSON(json: any): AlipayTradeRefundResponse {
    return AlipayTradeRefundResponseToJSONTyped(json, false);
}

export function AlipayTradeRefundResponseToJSONTyped(value?: Omit<AlipayTradeRefundResponse, 'isError'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'code': value['code'],
        'msg': value['msg'],
        'subCode': value['subCode'],
        'subMsg': value['subMsg'],
        'body': value['body'],
        'buyerLogonId': value['buyerLogonId'],
        'buyerOpenId': value['buyerOpenId'],
        'buyerUserId': value['buyerUserId'],
        'fundChange': value['fundChange'],
        'gmtRefundPay': value['gmtRefundPay'],
        'hasDepositBack': value['hasDepositBack'],
        'openId': value['openId'],
        'outTradeNo': value['outTradeNo'],
        'preAuthCancelFee': value['preAuthCancelFee'],
        'presentRefundBuyerAmount': value['presentRefundBuyerAmount'],
        'presentRefundDiscountAmount': value['presentRefundDiscountAmount'],
        'presentRefundMdiscountAmount': value['presentRefundMdiscountAmount'],
        'refundChargeAmount': value['refundChargeAmount'],
        'refundChargeInfoList': value['refundChargeInfoList'] == null ? undefined : ((value['refundChargeInfoList'] as Array<any>).map(RefundChargeInfoToJSON)),
        'refundCurrency': value['refundCurrency'],
        'refundDetailItemList': value['refundDetailItemList'] == null ? undefined : ((value['refundDetailItemList'] as Array<any>).map(TradeFundBillToJSON)),
        'refundFee': value['refundFee'],
        'refundHybAmount': value['refundHybAmount'],
        'refundPresetPaytoolList': PresetPayToolInfoToJSON(value['refundPresetPaytoolList']),
        'refundSettlementId': value['refundSettlementId'],
        'refundVoucherDetailList': value['refundVoucherDetailList'] == null ? undefined : ((value['refundVoucherDetailList'] as Array<any>).map(VoucherDetailToJSON)),
        'sendBackFee': value['sendBackFee'],
        'storeName': value['storeName'],
        'tradeNo': value['tradeNo'],
    };
}

