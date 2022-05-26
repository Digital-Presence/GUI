import produce from 'immer'
import createReducer from './reducerUtills'

const intioanalState = {
    user: {},
}
const users = {
   
    editUserDetails(state, action) {
        state.user = action.payload
    }

}
export default produce((state, action) => createReducer(state, action, users), intioanalState);
