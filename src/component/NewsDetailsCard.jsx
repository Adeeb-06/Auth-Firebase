import React from 'react'
import { Link } from 'react-router'

const NewsDetailsCard = ({data}) => {
    const {title , details , image_url , category_id} = data
  return (
    <div className='mt-4'>
        <img src={image_url} alt="" className=' w-full object-cover h-[350px]  ' />

        <h1 className=' font-semibold text-2xl mt-2'>{title}</h1>
        <p>{details}</p>
        <Link className="btn btn-secondary mt-5"  to={`/category/${category_id}`} >Go Back</Link>
    </div>
  )
}

export default NewsDetailsCard