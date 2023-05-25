import React from "react";

type methodType = "GET" | "POST" | "DELETE" | "PUT";

type RequestParams = {
  url: string;
  method: methodType;
  headers?: { [key: string]: string };
  body?: string;
}

type WithApiDataProps<T> = {
  data: T; //返回的数据类型
  [key: string]: any; //组件的其他props类型
};

/**
 * 
 * @param WrappedComponent 
 * @param requestContext 
 * @desc 就是单纯想要用用HOC，巩固一下之前学习的知识
 * @returns 
 */
export function withApiData<T>(WrappedComponent: React.FunctionComponent<{ data: T }>, requestContext: RequestParams) {


  function WithApiData(props: React.PropsWithChildren<WithApiDataProps<T>>) {
    const [data, setData] = React.useState<any>();
    const { url } = requestContext;
    React.useEffect(() => {
      (async function () {
        try {
          const res = await fetch(url, { ...requestContext });
          const data = await res.json();
          setData(data);
        } catch (err) {
          console.info(err);
        }
      })();
    }, [url]);
    const newProps = { ...props, data };

    return <WrappedComponent {...newProps} />
  }
  return WithApiData;
}