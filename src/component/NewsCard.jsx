import React from "react";
import { Star, Eye } from "lucide-react";
import { IoIosShareAlt } from "react-icons/io";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { title, rating, total_view, author, thumbnail_url, details } = news;

  return (
    <div className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition">
      {/* Author Info */}
      <div className="flex items-center bg-base-200 justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-semibold text-sm">{author.name}</h3>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toISOString().split("T")[0]}
            </p>
          </div>
        </div>
        <button className="btn btn-ghost btn-sm text-gray-500">
          <IoIosShareAlt size={24} />
          {/* share */}
        </button>
      </div>

      {/* Title */}
      <div className="px-4 mt-3">
        <h2 className="font-semibold text-lg hover:text-secondary transition">
          {title}
        </h2>
      </div>

      {/* Thumbnail */}
      <figure className="px-4 py-3">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-xl w-full object-cover h-68"
        />
      </figure>

      {/* Details */}
      <div className="px-4 text-sm text-gray-600">
        {details.slice(0, 180)}...
        <Link to={`/news-details/${news.id}`} className="text-secondary font-medium ml-1">Read More</Link>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-base-300 mt-3">
        <div className="flex items-center gap-1 text-secondary">
          <Star className="w-4 h-4 fill-secondary text-secondary" />
          <span className="text-sm font-semibold">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-500 text-sm">
          <Eye className="w-4 h-4" />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
