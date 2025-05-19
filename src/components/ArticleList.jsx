import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { articleList } from '../../public/articles/articleList';

function ArticleList() {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('query') || ''
  const page = parseInt(searchParams.get('page') || '1', 10)
  const [inputValue, setInputValue] = useState('')
  const articlesPerPage = 5

  const handleNavigate = (param1, param2) => {
    navigate(`/${param1}/${param2}`)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    const trimmedInput = inputValue.trim()
    setSearchParams(trimmedInput ? { query: trimmedInput, page: '1' } : { page: '1' })
  }

  const filteredArticles = articleList.filter((article) =>
    query ? article.title.toLowerCase().includes(query.toLowerCase()) : true
  )

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage)
  const startIndex = (page - 1) * articlesPerPage
  const currentArticles = filteredArticles.slice(startIndex, startIndex + articlesPerPage)

  const goToPage = (newPage) => {
    setSearchParams({ ...(query && { query }), page: newPage.toString() })
  }

  return (
    <div className="px-60 mt-10">
      <form onSubmit={handleSearch} className="mb-8">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Cari artikel..."
          className="w-full p-2 border border-black outline-none rounded-2xl focus:border-red-300"
        />
        <button type="submit" hidden>Submit</button>
      </form>
      {query && filteredArticles.length > 0 ? (
        <div className="mb-4 text-gray-600">
          Hasil pencarian untuk <span className="font-bold">'{query}'</span>
        </div>
      ) : query ? (
        <div className="mb-4 text-gray-600">Tidak ada hasil pencarian</div>
      ) : null}
      {filteredArticles.length > 0 && (
        <>
          <ul className="flex flex-col">
            {currentArticles.map((article, index) => (
              <li
                onClick={() => handleNavigate(article.username, article.slug)}
                key={index}
                className="items-center cursor-pointer hover:bg-lime-100 p-8 rounded-2xl"
              >
                <p className="font-bold">{article.username}</p>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col w-150">
                    <h2 className="text-3xl">{article.title}</h2>
                    <p>
                      {article.body.length > 150
                        ? `${article.body.slice(0, 150)}...`
                        : article.body}
                    </p>
                  </div>
                  <img
                    className="h-26 w-26 rounded-2xl"
                    src={article.img}
                    alt={article.title}
                  />
                </div>
              </li>
            ))}
          </ul>
          {totalPages > 1 && (
            <div className="flex justify-center mt-8 gap-2">
              <button
                onClick={() => goToPage(page - 1)}
                disabled={page === 1}
                className="px-4 py-2 border cursor-pointer rounded disabled:opacity-50"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => goToPage(p)}
                  className={`px-4 py-2 border cursor-pointer rounded ${page === p ? 'bg-lime-200' : ''}`}
                >
                  {p}
                </button>
              ))}
              <button
                onClick={() => goToPage(page + 1)}
                disabled={page === totalPages}
                className="px-4 py-2 border cursor-pointer rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default ArticleList;