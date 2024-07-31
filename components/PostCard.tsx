import React, { FC } from 'react'
import Link from 'next/link'
import { Tag } from '@prisma/client'

interface PostCardProps {
    post :{
        id :string
        title:string
        content:string;
        tag:Tag
    }
}

const PostCard : FC <PostCardProps> = ({post}) => {
    const {id,title, content,tag }= post;
return (
    <div className="card w-full bg-base-100 shadow-xl border">
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{content}</p>
            <div className="card-actions justify-end">
            <span className="badge badge-info">{tag.name}</span>
                <Link href={'/example/${id}'} className='hover:underline'>Read more...</Link>
            </div>
        </div>
    </div>
)
}

export default PostCard