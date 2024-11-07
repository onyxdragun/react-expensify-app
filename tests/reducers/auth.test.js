import authReducer from "../../src/reducers/auth";

test('Should set UID for login', () => {
  const action = {
    type: 'LOGIN',
    uid: 'abc123'
  }
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

test('Should clear UID for logout', () => {
  const action = {
    type: 'LOGOUT'
  }
  const state = authReducer({uid: 'abc123'}, action);
  expect(state).toEqual({});
});