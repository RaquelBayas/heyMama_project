function zodErrorMap (zodError) {
    const mappedErrors = {}
  
    zodError.issues.forEach(issue => {
      mappedErrors[issue.path[0]] = issue.message;
    });
  
    return mappedErrors;
  }
  
  export {zodErrorMap};