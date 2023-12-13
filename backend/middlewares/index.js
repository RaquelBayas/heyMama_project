
const validateForumId = (req,res,next,value) => {
    if (isNaN(value)) {
        return next('route');
    }
    next();
}

export {validateForumId};

