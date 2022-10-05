import React, {useEffect} from 'react';

// import {userSlice} from "./store/reducers/UserSlice";
// import {useAppDispatch, useAppSelector} from "./hooks/redux";
// import {fetchUsers} from "./store/reducers/ActionCreators";
import Posts from "./components/common/Post/Posts";
import Posts2 from "./components/common/Post/Posts2";
import './App.css';

function App() {
    // const {count} = useAppSelector(state => state.userReducer);
    // const {increment, decrement} = userSlice.actions;

    // const dispatch = useAppDispatch();
    // const {users, isLoading, error} = useAppSelector(state => state.userReducer);
    // useEffect(() => {
    //     dispatch(fetchUsers());
    // }, [])

    return (
        <div className="App">
            {/*<h1>{count}</h1>*/}
            {/*<button onClick={() => dispatch(decrement(10))}>decrement</button>*/}
            {/*<button onClick={() => dispatch(increment(10))}>increment</button>*/}

            {/*{isLoading && <div>Loading...</div>}*/}
            {/*{error && <div>{error}</div>}*/}
            {/*{!isLoading && users.map(user => <div key={user.id}>*/}
            {/*    <p>{user.name}</p>*/}
            {/*    <p>{user.email}</p>*/}
            {/*</div>)}*/}

            <Posts/>
            <Posts2/>
        </div>
    );
}

export default App;
