export const getuserData = (data) => {
    console.log(data, "action========>");
    
    return {
        type: "USER_SUBMIT",
        payload: data
    }
}
export const userDelete = (data) => {
    return {
        type: "USER_DELETE",
        payload: data
    }
}
export const editUserEdit = (data) => {
    return {
        type: "USER_EDIT",
        payload: data
    }
}
