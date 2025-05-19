import React from 'react';
import { useNavigate } from 'react-router-dom';
import { articleList } from '../../public/articles/articleList';

function ArticleList() {
  const navigate = useNavigate()

  const handleNavigate = (username, slug) => {
    navigate(`/${username}/${slug}`)
  }

  return (
    <ul className='px-60 mt-10 flex flex-col'>
      {articleList.map((article, index) => (
        <li onClick={() => handleNavigate(article.username, article.slug)} key={index} className="items-center cursor-pointer hover:bg-lime-100 p-8 rounded-2xl">
          <p className="font-bold">{article.username}</p>
          <div className="flex justify-between items-center">
            <div className="flex flex-col w-150">
              <h2 className="text-3xl">{article.title}</h2>
              <p>{article.body.length > 150 ? `${article.body.slice(0, 150)}...`:article.body}</p>
            </div>
            <img className="h-26 w-26 rounded-2xl" src={article.img} alt={article.title} />
          </div>
        </li>
      ))}
    </ul>
  )
}

export default ArticleList