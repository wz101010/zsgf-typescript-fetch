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
  JObjectApiResult,
} from '../models/index';
import {
    JObjectApiResultFromJSON,
    JObjectApiResultToJSON,
} from '../models/index';

export interface TenantFileCreateFolderRequest {
    path?: string;
}

export interface TenantFileDeleteRequest {
    path?: string;
}

export interface TenantFileRenameRequest {
    sourceName?: string;
    destName?: string;
}

export interface TenantFileUploadRequest {
    path?: string;
    file?: Blob;
}

export interface TenantFilesRequest {
    path?: string;
}

/**
 * TenantFileApi - interface
 * 
 * @export
 * @interface TenantFileApiInterface
 */
export interface TenantFileApiInterface {
    /**
     * 
     * @summary 创建文件夹
     * @param {string} [path] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TenantFileApiInterface
     */
    tenantFileCreateFolderRaw(requestParameters: TenantFileCreateFolderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JObjectApiResult>>;

    /**
     * 创建文件夹
     */
    tenantFileCreateFolder(requestParameters: TenantFileCreateFolderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JObjectApiResult>;

    /**
     * 
     * @summary 删除文件
     * @param {string} [path] 文件路径
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TenantFileApiInterface
     */
    tenantFileDeleteRaw(requestParameters: TenantFileDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JObjectApiResult>>;

    /**
     * 删除文件
     */
    tenantFileDelete(requestParameters: TenantFileDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JObjectApiResult>;

    /**
     * 
     * @summary 重命名文件
     * @param {string} [sourceName] 
     * @param {string} [destName] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TenantFileApiInterface
     */
    tenantFileRenameRaw(requestParameters: TenantFileRenameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JObjectApiResult>>;

    /**
     * 重命名文件
     */
    tenantFileRename(requestParameters: TenantFileRenameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JObjectApiResult>;

    /**
     * 
     * @summary 上传文件
     * @param {string} [path] 上传的路径
     * @param {Blob} [file] 上传的文件
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TenantFileApiInterface
     */
    tenantFileUploadRaw(requestParameters: TenantFileUploadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JObjectApiResult>>;

    /**
     * 上传文件
     */
    tenantFileUpload(requestParameters: TenantFileUploadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JObjectApiResult>;

    /**
     * 
     * @summary 文件列表
     * @param {string} [path] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TenantFileApiInterface
     */
    tenantFilesRaw(requestParameters: TenantFilesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JObjectApiResult>>;

    /**
     * 文件列表
     */
    tenantFiles(requestParameters: TenantFilesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JObjectApiResult>;

}

/**
 * 
 */
export class TenantFileApi extends runtime.BaseAPI implements TenantFileApiInterface {

    /**
     * 创建文件夹
     */
    async tenantFileCreateFolderRaw(requestParameters: TenantFileCreateFolderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JObjectApiResult>> {
        const queryParameters: any = {};

        if (requestParameters['path'] != null) {
            queryParameters['path'] = requestParameters['path'];
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
            path: `/TenantFile/CreateFolder`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JObjectApiResultFromJSON(jsonValue));
    }

    /**
     * 创建文件夹
     */
    async tenantFileCreateFolder(requestParameters: TenantFileCreateFolderRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JObjectApiResult> {
        const response = await this.tenantFileCreateFolderRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 删除文件
     */
    async tenantFileDeleteRaw(requestParameters: TenantFileDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JObjectApiResult>> {
        const queryParameters: any = {};

        if (requestParameters['path'] != null) {
            queryParameters['path'] = requestParameters['path'];
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
            path: `/TenantFile`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JObjectApiResultFromJSON(jsonValue));
    }

    /**
     * 删除文件
     */
    async tenantFileDelete(requestParameters: TenantFileDeleteRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JObjectApiResult> {
        const response = await this.tenantFileDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 重命名文件
     */
    async tenantFileRenameRaw(requestParameters: TenantFileRenameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JObjectApiResult>> {
        const queryParameters: any = {};

        if (requestParameters['sourceName'] != null) {
            queryParameters['sourceName'] = requestParameters['sourceName'];
        }

        if (requestParameters['destName'] != null) {
            queryParameters['destName'] = requestParameters['destName'];
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
            path: `/TenantFile/Rename`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JObjectApiResultFromJSON(jsonValue));
    }

    /**
     * 重命名文件
     */
    async tenantFileRename(requestParameters: TenantFileRenameRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JObjectApiResult> {
        const response = await this.tenantFileRenameRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 上传文件
     */
    async tenantFileUploadRaw(requestParameters: TenantFileUploadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JObjectApiResult>> {
        const queryParameters: any = {};

        if (requestParameters['path'] != null) {
            queryParameters['path'] = requestParameters['path'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters['file'] != null) {
            formParams.append('file', requestParameters['file'] as any);
        }

        const response = await this.request({
            path: `/TenantFile`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JObjectApiResultFromJSON(jsonValue));
    }

    /**
     * 上传文件
     */
    async tenantFileUpload(requestParameters: TenantFileUploadRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JObjectApiResult> {
        const response = await this.tenantFileUploadRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 文件列表
     */
    async tenantFilesRaw(requestParameters: TenantFilesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JObjectApiResult>> {
        const queryParameters: any = {};

        if (requestParameters['path'] != null) {
            queryParameters['path'] = requestParameters['path'];
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
            path: `/TenantFile`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JObjectApiResultFromJSON(jsonValue));
    }

    /**
     * 文件列表
     */
    async tenantFiles(requestParameters: TenantFilesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JObjectApiResult> {
        const response = await this.tenantFilesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
