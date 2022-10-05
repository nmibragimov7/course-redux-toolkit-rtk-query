import React, {useEffect, useState} from 'react';

import {postAPI} from "../../../services/PostService";
import {IError} from "../../../models/IError";
import styles from "./Post.module.css";

const Posts = () => {
    const [limit, setLimit] = useState(100);
    // 1 вариант с использованием хука useFetchAllPostsQuery, который сразу вызывает useEffect
    // const {data: posts} = postAPI.useFetchAllPostsQuery(5);
    const {data: posts, error, isLoading, refetch} = postAPI.useFetchAllPostsQuery(limit, {
        // pollingInterval: 1000 // интервальный запрос каждые n миллисекунд
    });
    useEffect(() => {
        // setTimeout(() => {
        //     setLimit(20);
        // }, 2000)
    }, []);

    // 2 вариант с использованием хука useLazyFetchAllPostsQuery, который можно деструктурировать:
        // 1. action запроса
        // 2. данные, которые прилетают от запроса
    // const [fetchPosts, request] = postAPI.useLazyFetchAllPostsQuery();
    // console.log(request)

    // данные, которые прилетают от запроса можно также деструктурировать
    // const [fetchPosts, {data: posts, error, isLoading}] = postAPI.useLazyFetchAllPostsQuery();
    // useEffect(() => {
    //     fetchPosts(limit);
    // }, []);

    return (
        <div className={styles.posts_list}>
            {/*refetch - переотправляет запрос*/}
            <button onClick={() => refetch()}>REFETCH</button>
            {isLoading && <div>Loading...</div>}
            {error && <div>{(error as IError)?.data?.message || "Неизвестная ошибка"}</div>}
            {posts && posts.map(post =>
                <div key={post.id} className={styles.post}>
                    {post.id}. {post.title}
                    <button>DELETE</button>
                </div>
            )}
        </div>
    );
};

export default Posts;
