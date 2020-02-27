export const changeName = name => {
  return {
    type: "CHANGE_NAME",
    payload: name
  }
}

export const handleName = e => {
  return {
    type: "HANDLE_NAME",
    payload: e.target.value
  }
}

export function changeNameAutomatically(name) {
  return {
    type: "CHANGE_NAME_AUTOMATICALLY",
    payload: name
  }
}