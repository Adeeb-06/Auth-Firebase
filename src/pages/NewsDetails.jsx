import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import Header from "../component/Header";
import RightAside from "../component/homeLayout/RightAside";
import NewsDetailsCard from "../component/NewsDetailsCard";

const NewsDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [news , setNews] = useState()

  useEffect(()=>{
    const newsDetails = data.find((n) => n.id == id)
    setNews(newsDetails)
  },[data , id])

  console.log(news)
  return (
    <div>
      <header className="py-3">
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5 py-4 ">
      <section className=" col-span-9">
        <h1 className="text-xl font-bold text-primary">
          News Details
        </h1>
       {news && <NewsDetailsCard data={news} />}
      </section>
      <aside className="col-span-3">
        <RightAside/>
      </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
