//////////////////////////////////////////////////////////////////////////////
PENDING BACKEND:
a = (users) => console.log(receiveAllUsers(users));
fetchAllUsers().then(a)


b = user => console.log(receiveSingleUser(user));
fetchSingleUser(1).then(b);


testuser = {
email: 'test@email.com',
f_name: 'firstname',
l_name: 'lastname',
password: 'password'
}
c1 = user => console.log(receiveSingleUser(user));
createUser(testuser).then(c1);



testuser = {
  id: 4,
f_name: 'updated'
}
d = user => console.log(receiveSingleUser(user));
updateUser(testuser).then(d);

PENDING BACKEND:
e = user => console.log(removeUser(user));
deleteUser(4).then(e);



////////////////////////////////////////////////////////////////////
PENDING BACKEND:
store.getState();
a = users => store.dispatch(receiveAllUsers(users));
fetchAllUsers().then(a);
store.getState();



store.getState();
b = user => store.dispatch(receiveSingleUser(user));
fetchSingleUser(1).then(b);
store.getState();



testuser = {
email: 'wooo@email.com',
f_name: 'wooooo',
l_name: 'lastname',
password: 'password'
}
store.getState();
c = user => store.dispatch(receiveSingleUser(user));
createUser(testuser).then(c);
store.getState();



testuserupdate = {
  id: 6,
  f_name: 'updated'
}
store.getState();
const d = user => store.dispatch(receiveSingleUser(user));
updateUser(testuserupdate).then(d);
store.getState();

PENDING BACKEND:
store.getState();
const e = user => store.dispatch(removeUser(user));
deleteUser(5).then(e);
store.getState();


//////////////////////////////
PENDING BACKEND:

initialState = store.getState();
selectAllUsers(initialState);

store.dispatch(requestAllUsers());

populatedState = store.getState();
selectAllUsers(populatedState);
