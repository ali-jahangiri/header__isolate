import { useEffect } from "react";

const useRequestSenderOnTimer = (
  callback,
  timeout = 60000,
  dependency = [],
  requestOnFirstMount
) => {
  useEffect(() => {
    if(requestOnFirstMount) callback()
  } , [])
  useEffect(() => {
    let timer = setInterval(() => {
      callback();
      clearInterval(timer);
    }, timeout);
    return () => {
      clearInterval(timer);
    };
  }, dependency);
};

export default useRequestSenderOnTimer;