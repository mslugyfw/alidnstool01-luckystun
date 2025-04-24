'use strict';
// This file is auto-generated, don't edit it
// 依赖的模块可通过下载工程中的模块依赖文件或右上角的获取 SDK 依赖信息查看
const OpenApi = require('@alicloud/openapi-client');
const Console = require('@alicloud/tea-console');
const OpenApiUtil = require('@alicloud/openapi-util');
const Util = require('@alicloud/tea-util');
const Credential = require('@alicloud/credentials');
const Tea = require('@alicloud/tea-typescript');

class Client {

  /**
   * 使用凭据初始化账号Client
   * @return Client
   * @throws Exception
   */
  static createClient() {
    // 工程代码建议使用更安全的无AK方式，凭据配置方式请参见：https://help.aliyun.com/document_detail/378664.html。
    // 使用AK 初始化Credentials Client。
    const credentialsConfig = new Credential.Config({
      // 凭证类型。
      type: 'access_key',


      //***按需求修改***
      // 设置为AccessKey ID值。
      accessKeyId: 'XXXXXXXXXXXXX',
      // 设置为AccessKey Secret值。
      accessKeySecret: 'XXXXXXXXXXXXX',



    });
    const credential = new Credential.default(credentialsConfig);


    let config = new OpenApi.Config({
      credential: credential,
    });
    // Endpoint 请参考 https://api.aliyun.com/product/Alidns
    config.endpoint = `alidns.cn-hangzhou.aliyuncs.com`;
    return new OpenApi.default(config);
  }

  /**
   * API 相关
   * @param path string Path parameters
   * @return OpenApi.Params
   */
  static createApiInfo() {
    let params = new OpenApi.Params({
      // 接口名称
      action: 'UpdateDomainRecord',
      // 接口版本
      version: '2015-01-09',
      // 接口协议
      protocol: 'HTTPS',
      // 接口 HTTP 方法
      method: 'POST',
      authType: 'AK',
      style: 'RPC',
      // 接口 PATH
      pathname: `/`,
      // 接口请求体内容格式
      reqBodyType: 'json',
      // 接口响应体内容格式
      bodyType: 'json',
    });
    return params;
  }

  static async main(args) {
    if (args.length < 1) {
        Console.default.log('Usage: node client.js <port>');
        return;
    }

    let port = args[0];
    let client = Client.createClient();
    let params = Client.createApiInfo();
    // query params
    let queries = {};


    //***按需求修改***
    queries['RecordId'] = '191000000000';
    queries['RR'] = 's2';
    queries['Type'] = 'REDIRECT_URL';
    queries['Value'] = `https://s1.YOUDOTCOM.cc:${port}`;

    // runtime options
    let runtime = new Util.RuntimeOptions({});
    let request = new OpenApi.OpenApiRequest({
        query: OpenApiUtil.default.query(queries),
    });
    // 复制代码运行请自行打印 API 的返回值
    // 返回值实际为 Map 类型，可从 Map 中获得三类数据：响应体 body、响应头 headers、HTTP 返回的状态码 statusCode。
    let resp = await client.callApi(params, request, runtime);
    Console.default.log(Util.default.toJSONString(resp));
  }

}

exports.Client = Client;
Client.main(process.argv.slice(2));