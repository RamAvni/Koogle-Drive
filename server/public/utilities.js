function firstChecks(name, password){
    let dataCheck = false
    if (typeof(name)==="string" && name.length>0 && password.length>0){
        dataCheck =true
    }
    return dataCheck
}

export {firstChecks}