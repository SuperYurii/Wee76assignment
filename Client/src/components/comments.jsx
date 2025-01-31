import { useEffect, useState } from "react";

export default function Comments() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await fetch("http://localhost:8080/clients");
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    getComments();
  }, []);

  return (
    <div>
      <h2>Comments</h2>
      {comments.map((comment, index) => (
        <div key={index}>
          <p>{comment.client_name}</p>
          <p>{comment.comment}</p>
        </div>
      ))}
    </div>
  );
}
