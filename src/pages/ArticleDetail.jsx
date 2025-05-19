import React from 'react';
import { useParams } from 'react-router-dom';
import { articleList } from '../../public/articles/articleList';



function ArticleDetail() {
  const { username, slug } = useParams();
  const article = articleList.find(
    (item) => item.username === username && item.slug === slug
  )


  return (
    <>
      <div className="px-60 mt-10 flex flex-col items-start gap-4 justify-center">
        <h1 className="text-4xl font-bold">{article.title}</h1>
        <p className="font-bold">{article.username}</p>
        <img src={article.img} alt={article.title} className="h-64 w-64 rounded-2xl" />
        <p>{article.body}</p>
      </div>
    </>
  )
}

export default ArticleDetail