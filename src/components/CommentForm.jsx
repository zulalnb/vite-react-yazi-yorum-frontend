import React, { useState } from "react";

const INITIAL_COMMENT = {
  display_name: "",
  body: "",
};

const CommentForm = (props) => {
  const [comment, setComment] = useState(INITIAL_COMMENT);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setComment({ ...comment, [name]: value });
  };

  return (
    <React.Fragment>
      <h3>Yorum Yaz:</h3>
      <form
        className="ui form"
        onSubmit={(e) => {
          props.handleSubmit(e, comment, "submit");
          setComment(INITIAL_COMMENT);
        }}
      >
        <div className="ui mini icon input">
          <input
            name="display_name"
            type="text"
            placeholder="Adınız"
            onChange={handleOnChange}
            value={comment.display_name}
          />
        </div>
        <textarea
          name="body"
          placeholder="Yorumunuz"
          rows="3"
          onChange={handleOnChange}
          value={comment.body}
        ></textarea>
        <button className="ui blue button" type="submit">
          Yorum Gönder
        </button>
      </form>
    </React.Fragment>
  );
};

export default CommentForm;
