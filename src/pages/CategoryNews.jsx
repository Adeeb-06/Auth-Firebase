
import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router'
import NewsCard from '../component/NewsCard'

const CategoryNews = () => {
  const {id} = useParams()
  const data = useLoaderData()
  const [categoryNews, setCategoryNews] = useState([])

  useEffect(() => {
    if(id == "0") {
      setCategoryNews(data)
      return
    } else if(id == "1") {
      setCategoryNews(data.filter(item => item.others.is_today_pick == true))
      return
    } else{
      const filterdNews = data.filter(item => item.category_id == id)
      // console.log(filterdNews)
      setCategoryNews(filterdNews)
    }
      
   
  }, [data , id])
  return (
   <div>
    <h2 className='font-bold mb-5 '>
      Total <span className="text-secondary">{categoryNews.length}</span> News
    </h2>
    <div className='grid grid-cols-1 gap-3 mt-5 px-5 '>
      {categoryNews.map((news)=>(
        <NewsCard news={news} key={news.id}/>
      ))}
    </div>
   </div>
  )
}

export default CategoryNews