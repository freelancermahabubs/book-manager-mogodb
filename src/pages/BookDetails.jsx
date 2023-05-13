import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const [detailsData, setDetailsData] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/book/${id}`)
      .then((res) => res.json())
      .then((data) => setDetailsData(data));
  }, [id]);

  return (
    <div class="card">
      <div class="card-header">{detailsData?.bookName}</div>
      <div class="card-body">
        <h5 class="card-title">{detailsData?.authorName}</h5>
        <p class="card-text">{detailsData.metaTextDescription}</p>
        {/* <a href="#" class="btn btn-primary">
          Go somewhere
        </a> */}
        <iframe
          title="pdf file viewer"
          width="100%"
          height="600px"
          src={detailsData?.bookPdfUrl}
        />
      </div>
    </div>
  );
};

export default BookDetails;
