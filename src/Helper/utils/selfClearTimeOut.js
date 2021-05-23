const selfClearTimeout = (callback , timeout) => {
    let timer = setTimeout(() => {
        callback();
        clearTimeout(timer);
    } , timeout)
}

export default selfClearTimeout