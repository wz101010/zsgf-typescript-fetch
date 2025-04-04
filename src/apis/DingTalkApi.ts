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


import * as runtime from '../runtime';
import type {
  StringApiResponse,
} from '../models/index';
import {
    StringApiResponseFromJSON,
    StringApiResponseToJSON,
} from '../models/index';

export interface DingTalkUserInfoRequest {
    appKey: string;
    code?: string;
}

/**
 * DingTalkApi - interface
 * 
 * @export
 * @interface DingTalkApiInterface
 */
export interface DingTalkApiInterface {
    /**
     * 根据钉钉用户授权码获取用户的详细资料。
     * @summary 获取用户资料
     * @param {string} appKey 
     * @param {string} [code] 钉钉用户授权码
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DingTalkApiInterface
     */
    dingTalkUserInfoRaw(requestParameters: DingTalkUserInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StringApiResponse>>;

    /**
     * 根据钉钉用户授权码获取用户的详细资料。
     * 获取用户资料
     */
    dingTalkUserInfo(requestParameters: DingTalkUserInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StringApiResponse>;

}

/**
 * 
 */
export class DingTalkApi extends runtime.BaseAPI implements DingTalkApiInterface {

    /**
     * 根据钉钉用户授权码获取用户的详细资料。
     * 获取用户资料
     */
    async dingTalkUserInfoRaw(requestParameters: DingTalkUserInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StringApiResponse>> {
        if (requestParameters['appKey'] == null) {
            throw new runtime.RequiredError(
                'appKey',
                'Required parameter "appKey" was null or undefined when calling dingTalkUserInfo().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['code'] != null) {
            queryParameters['code'] = requestParameters['code'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/DingTalk/{appKey}/UserInfo`.replace(`{${"appKey"}}`, encodeURIComponent(String(requestParameters['appKey']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StringApiResponseFromJSON(jsonValue));
    }

    /**
     * 根据钉钉用户授权码获取用户的详细资料。
     * 获取用户资料
     */
    async dingTalkUserInfo(requestParameters: DingTalkUserInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StringApiResponse> {
        const response = await this.dingTalkUserInfoRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
