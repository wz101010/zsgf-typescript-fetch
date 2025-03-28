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
 * @interface Tenant
 */
export interface Tenant {
    /**
     * 
     * @type {number}
     * @memberof Tenant
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Tenant
     */
    name?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Tenant
     */
    ownerId?: number;
    /**
     * 
     * @type {string}
     * @memberof Tenant
     */
    theme?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Tenant
     */
    claimsIssuer?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Tenant
     */
    ownerHost?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Tenant
     */
    logoUri?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Tenant
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Tenant
     */
    webHookUri?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof Tenant
     */
    show?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof Tenant
     */
    createDate?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Tenant
     */
    lastUpdate?: Date;
}

/**
 * Check if a given object implements the Tenant interface.
 */
export function instanceOfTenant(value: object): value is Tenant {
    return true;
}

export function TenantFromJSON(json: any): Tenant {
    return TenantFromJSONTyped(json, false);
}

export function TenantFromJSONTyped(json: any, ignoreDiscriminator: boolean): Tenant {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'ownerId': json['ownerId'] == null ? undefined : json['ownerId'],
        'theme': json['theme'] == null ? undefined : json['theme'],
        'claimsIssuer': json['claimsIssuer'] == null ? undefined : json['claimsIssuer'],
        'ownerHost': json['ownerHost'] == null ? undefined : json['ownerHost'],
        'logoUri': json['logoUri'] == null ? undefined : json['logoUri'],
        'description': json['description'] == null ? undefined : json['description'],
        'webHookUri': json['webHookUri'] == null ? undefined : json['webHookUri'],
        'show': json['show'] == null ? undefined : json['show'],
        'createDate': json['createDate'] == null ? undefined : (new Date(json['createDate'])),
        'lastUpdate': json['lastUpdate'] == null ? undefined : (new Date(json['lastUpdate'])),
    };
}

export function TenantToJSON(json: any): Tenant {
    return TenantToJSONTyped(json, false);
}

export function TenantToJSONTyped(value?: Tenant | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'ownerId': value['ownerId'],
        'theme': value['theme'],
        'claimsIssuer': value['claimsIssuer'],
        'ownerHost': value['ownerHost'],
        'logoUri': value['logoUri'],
        'description': value['description'],
        'webHookUri': value['webHookUri'],
        'show': value['show'],
        'createDate': value['createDate'] == null ? undefined : ((value['createDate']).toISOString()),
        'lastUpdate': value['lastUpdate'] == null ? undefined : ((value['lastUpdate']).toISOString()),
    };
}

