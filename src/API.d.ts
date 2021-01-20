declare namespace API {
  /** 接口格式规范，T 为请求成功返回的数据类型 */
  export interface ResponseBody<T = unknown> {
    /** response data */
    data?: T;
    /** 请求是否成功 */
    success?: boolean;
    /** 错误码 */
    errorCode?: string;
    /** 错误信息，可能不全 */
    errorMessage?: string;
  }

  /** 对 named function 的签名 */
  export type WithChildren<T = {}> = T & {
    children?: React.ReactNode | Element;
  };
}
