
export const saveUser = user => {
    return {
        type: "SAVE_USER",
        payload: user
    }
}

export const changeEmail = email => {
    return {
        type: "CHANGE_EMAIL",
        payload: email
    }
}

export const savePhone = phone => {
    return {
        type: "SAVE_PHONE",
        payload: phone
    }
}