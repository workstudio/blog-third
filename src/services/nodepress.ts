/**
 * @file NodePress API service
 * @module service.nodepress
 * @author Surmon <https://github.com/surmon-china>
 */

import axios, { AxiosInstance, Method as AxiosMethod } from 'axios'
import { BAD_REQUEST } from '/@/constants/error'
import API_CONFIG from '/@/config/api.config'
import { isClient } from '/@/app/environment'

export enum NodePressResponseStatus {
  Error = 'error',
  Success = 'success'
}

export type NodePressResult<T = any> = {
  status: NodePressResponseStatus.Success
  message: string
  result: T
}

const nodepress = axios.create({
  baseURL: API_CONFIG.NODEPRESS,
  withCredentials: true
})

nodepress.interceptors.response.use(
  (response) => {
    if (response.headers?.['content-type']?.includes('json')) {
      if (response.data.status !== NodePressResponseStatus.Success) {// && response.data.code !== 200) {
        return Promise.reject(response.data)
      }
    }

    return response.data
  },
  (error) => {
    const errorJSON = error.toJSON()
    const errorInfo = {
      ...errorJSON,
      config: error.config,
      code: errorJSON.status || error.response?.status || BAD_REQUEST,
      message: error.response?.data?.error || error.response?.statusText || errorJSON.message
    }

    const serverErrorInfo = {
      axiosName: errorJSON.name,
      axiosMessage: errorJSON.message,
      npError: errorInfo.message,
      npMessage: error.response?.data?.message || '',
      status: errorInfo.code,
      method: errorJSON.config.method,
      baseURL: errorJSON.config.baseURL,
      url: errorJSON.config.url,
      params: errorJSON.config.params,
      data: errorJSON.config.data,
      headers: errorJSON.config.headers
    }

    console.debug('axios error:', isClient ? error : serverErrorInfo)

    return Promise.reject(errorInfo)
  }
)

type Method = Exclude<Lowercase<AxiosMethod>, 'unlink' | 'purge' | 'link'> | 'request'
const overwrite = (method: Method) => {
  return <T = any>(
    ...args: Parameters<AxiosInstance[typeof method]>
  ): Promise<NodePressResult<T>> => {
    return (nodepress[method] as any)(...args)
  }
}

export default {
  $: nodepress,
  request: overwrite('request'),
  head: overwrite('head'),
  get: overwrite('get'),
  post: overwrite('post'),
  put: overwrite('put'),
  patch: overwrite('patch'),
  delete: overwrite('delete'),
  options: overwrite('options')
}
