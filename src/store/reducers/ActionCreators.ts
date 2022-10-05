import axios from "axios";

import {AppDispatch} from "../store";
import {IUser} from "../../models/IUser";
import {userSlice} from "./UserSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";

// не возвращаем сам action, а возвращаем другую функцию, которая аргументом принимает dispatch
// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.userFetching());
//         const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
//         dispatch(userSlice.actions.userFetchingSuccess(response.data));
//     } catch (e) {
//         // @ts-ignore
//         dispatch(userSlice.actions.userFetchingError(e.message))
//     }
// }


// это action с помощью redux toolkit
export const fetchUsers = createAsyncThunk(
    "users/fetchAll",
    async (payload, thunkApi) => {
        try {
            const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
            return response.data;
        } catch (e) {
            console.error(e);
            return  thunkApi.rejectWithValue("Не удалось загрузить пользователей");
        }
    }
)
