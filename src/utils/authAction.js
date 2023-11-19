import { app } from "@/Firebase/Firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(app)

// authActions.js (or wherever your action creators reside)
export const createUserByEmailPassword = (email, password) => {
    return async (dispatch) => {
        dispatch({ type: 'CREATE_USER_REQUEST' })
        await createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                dispatch({
                    type: 'CREATE_USER_SUCCESS',
                    payload: { user: result.user },
                })
            })
            .catch(error => {
                dispatch({
                    type: 'CREATE_USER_FAILURE',
                    payload: { error: error.message },
                })
            })
    }
    // return async (dispatch) => {
    //     try {
    //         dispatch({ type: 'CREATE_USER_REQUEST' }); // Start the request

    //         const result = await createUserWithEmailAndPassword(auth, email, password);

    //         const serializableUser = {
    //             uid: result.user.uid,
    //             email: result.user.email,
    //             // Add other necessary serializable user properties here
    //         };

    //         dispatch({
    //             type: 'CREATE_USER_SUCCESS',
    //             payload: { user: serializableUser },
    //         }); // Dispatch success action with the serializable user

    //     } catch (error) {
    //         let serializableError = { message: 'An error occurred during sign up' };

    //         if (error.code === 'auth/email-already-in-use') {
    //             serializableError = { message: 'This email already exists. Please sign in' };
    //         }
    //         // Handle other Firebase error codes if needed

    //         dispatch({
    //             type: 'CREATE_USER_FAILURE',
    //             payload: { error: serializableError },
    //         }); // Dispatch failure action with the transformed serializable error
    //     }
    // };
};
