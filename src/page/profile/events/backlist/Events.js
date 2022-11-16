import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadingNews from "../LoadingNews";
import Pagination from "../Pagination";

export default function Events() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(10);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      await axios
        .get("http://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          setNews(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchNews();
  }, []);

  // getCurrentPosts

  // 10
  // 5
  const indexOfLastNews = currentPage * newsPerPage;

  // 9
  // 0
  const indexOfFirshtNews = indexOfLastNews - newsPerPage;

  // เก็บค่าข้อมูล 10 ตัว
  // เก็บข้อมูล 5 ชุด
  // คำนวน จำนวน page
  const currentNews = news.slice(indexOfFirshtNews, indexOfLastNews);

  //change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3"></h1>
      <LoadingNews news={currentNews} loading={loading} />
      <Pagination
        newsPerPage={newsPerPage}
        totalNews={news.length}
        paginate={paginate}
      />
    </div>
  );
}
