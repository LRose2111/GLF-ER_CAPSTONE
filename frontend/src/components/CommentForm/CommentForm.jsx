import React, { useState } from "react";
import "./CommentForm.css";



const CommentForm = (props) => {

    const [comment, setComment] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault(); 
      props.postComment(comment);
      setComment('');
  }
  
    return (  
    <div className="comm-form-contain">
      <div className="comment-form-question">What do you think about this Hunting Area?</div>
      <form className="comm-form" onSubmit={handleSubmit}>
        <div>
            <label className = 'comment-label' htmlFor="Comment">Review:{" "}</label>
            <input type= "text" id = 'Comment' className="comm-input" value = {comment} onChange ={(event) => setComment(event.target.value)} />
        </div>
        <div className="comm-but-contain">
            <button type = 'submit' className="comm-button">Post</button>
        </div>
      </form>
    </div>
    );
}
 
export default CommentForm;