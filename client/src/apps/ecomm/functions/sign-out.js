export const signOut = (props) => {
  localStorage.removeItem('ecommToken');
  localStorage.removeItem('state');
  props.removeUser();
}