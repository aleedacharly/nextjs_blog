'use client'

import React from 'react'
import FormPost from '@/components/FormPost'
import { FormInputPost } from '@/types'
import { SubmitHandler } from 'react-hook-form'
import BackButton from '@/components/BackButton'

const CreatePage = () => {
    const handleCreatePost :SubmitHandler<FormInputPost>=(data)=> {
        console.log(data);
    }
return (
    <div>
        <BackButton/>
        <h1 className='text-2xl my-4 font-bold text-center'>Add an Example</h1>
        <FormPost submit={handleCreatePost} isEditing={false}/>
    </div>
)
}

export default CreatePage