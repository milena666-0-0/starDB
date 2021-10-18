const compose = (...funcs) => (com) => {
    return funcs.reduceRight((prevResult, f ) => 
        f(prevResult), com)
};

export default compose;