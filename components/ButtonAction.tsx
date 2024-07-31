import React from 'react'
import Link from 'next/link'
import { Pencil, Trash2 } from 'lucide-react'

const ButtonAction = () => {
  return (
    <div>
        <Link href ='\edit\1'className=' btn mr-2'>
            <Pencil /> Edit
            </Link>
        <button className='btn btn-error'>
            <Trash2 />Delete
        </button>
    </div>
  )
}

export default ButtonAction