'use client'
import FormPost from '@/components/FormPost';
import { FormInputPost } from '@/types';
import React from 'react'
import { SubmitHandler } from 'react-hook-form';

const EditPostPage= () => {
    const handleEditPost :SubmitHandler<FormInputPost>=(data)=> {
        console.log(data);
    }
return (
    <div>
        <h1 className='text-2xl my-4 font-bold text-center'>Edit Post</h1>
        <FormPost submit={handleEditPost} isEditing/>
    </div>
    );
}

export default EditPostPage
