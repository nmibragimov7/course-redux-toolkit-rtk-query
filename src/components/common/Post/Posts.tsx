import React, {useEffect, useState} from 'react';

import {postAPI} from "../../../services/PostService";
import {IError} from "../../../models/IError";
import styles from "./Post.module.css";
import {IPost} from "../../../models/IPost";

const Posts = () => {
    // 1 вариант с использованием хука useFetchAllPostsQuery, который сразу вызывает useEffect
    // const {data: posts} = postAPI.useFetchAllPostsQuery(5);

    // 2 вариант с использованием хука useLazyFetchAllPostsQuery, который можно деструктурировать:
        // 1. action запроса
        // 2. данные, которые прилетают от запроса
    // const [fetchPosts, request] = postAPI.useLazyFetchAllPostsQuery();
    // console.log(request)

    // данные, которые прилетают от запроса можно также деструктурировать
    const [fetchPosts, {data: posts, error, isLoading}] = postAPI.useLazyFetchAllPostsQuery();
    const [createPost, {error: errorCreate, isLoading: isLoadingCreate}] = postAPI.useCreatePostMutation();
    const [deletePost] = postAPI.useDeletePostMutation();
    const [updatePost] = postAPI.useUpdatePostMutation();
    useEffect(() => {
        fetchPosts(100);
    }, []);
    const handleCreate = async () => {
        await createPost({
            title: "Title",
            body: "Author"
        } as IPost)
    }
    const handleUpdate = (post: IPost) => {
        updatePost({
            ...post,
            title: "Title test",
        });
    }
    const handleDelete = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
        event.stopPropagation();
        deletePost(id);
    }

    return (
        <div className={styles.posts_list}>
            <button onClick={handleCreate}>CREATE POST</button>
            {isLoading || isLoadingCreate && <div>Loading...</div>}
            {error && <div>{(error as IError)?.data?.message || "Неизвестная ошибка"}</div>}
            {errorCreate && <div>{(errorCreate as IError)?.data?.message || "Неизвестная ошибка"}</div>}
            {posts && posts.map(post =>
                <div key={post.id} className={styles.post} onClick={() => handleUpdate(post)}>
                    {post.id}. {post.title}
                    <button onClick={(event) => handleDelete(event, post.id)}>DELETE</button>
                </div>
            )}
        </div>
    );
};

export default Posts;
