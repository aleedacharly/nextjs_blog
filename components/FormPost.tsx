'use client';

import {SubmitHandler,useForm} from 'react-hook-form';
import { FC } from 'react';
import { FormInputPost } from '../types/index';
interface FormPostProps{
  submit :SubmitHandler<FormInputPost>;
  isEditing : boolean;
}

const FormPost : FC<FormPostProps>=({ submit,isEditing })=>{
  const {register,handleSubmit}=useForm<FormInputPost>();

  return (
    <form onSubmit={handleSubmit(submit)} className='flex flex-col items-center justify-center gap-5 mt-10'>
        <input
          type="text"
          {...register('title',{required:true})}
          placeholder="Title"
          className="input input-bordered input-info w-full max-w-lg"
        />

        <textarea
        {...register('content',{required:true})}
        className="textarea textarea-info w-full max-w-lg"
        placeholder="Description"
        ></textarea>

        <input
          type="text"
          {...register('giturl',{required:true})}
          placeholder="Enter Git Url "
          className="input input-bordered input-info w-full max-w-lg"
        />
        <button type='submit' className='btn btn-primary w-full max-w-lg'>
          {isEditing ? 'Update':'Create'}
        </button>
    </form>
  )
}

export default FormPost