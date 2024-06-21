import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import DeleteCommentModal from "./DeleteCommentModal";

const CommentList = (props) => {
  const [selectedComment, setSelectedComment] = useState(null);
  const [updatedComment, setUpdatedComment] = useState(null);

  return (
    <React.Fragment>
      <h3>Yorumlar</h3>
      <div className="ui relaxed list">
        {props.comments.map((comment) => {
          if (selectedComment === comment.id) {
            return (
              <form
                key={comment.id}
                className="ui form"
                onSubmit={(e) => {
                  props.handleSubmit(
                    e,
                    { id: comment.id, body: updatedComment },
                    "update"
                  );
                  setSelectedComment(null);
                }}
              >
                <div className="ui mini icon input">
                  <input
                    name="display_name"
                    type="text"
                    placeholder="Adınız"
                    value={comment.display_name}
                    disabled
                  />
                </div>
                <textarea
                  name="body"
                  placeholder="Yorumunuz"
                  rows="3"
                  value={updatedComment}
                  onChange={(e) => setUpdatedComment(e.target.value)}
                ></textarea>
                <Button className="ui blue button" size="mini">
                  Gönder
                </Button>
                <Button size="mini" onClick={() => setSelectedComment(null)}>
                  İptal
                </Button>
              </form>
            );
          } else {
            return (
              <div className="item" key={comment.id}>
                <div className="content">
                  <span className="header">{comment.display_name}</span>
                  <div className="description">{comment.body}</div>
                </div>
                <Button
                  className="ui blue button"
                  size="mini"
                  onClick={() => {
                    setSelectedComment(comment.id);
                    setUpdatedComment(comment.body);
                  }}
                >
                  Düzenle
                </Button>
                <DeleteCommentModal
                  comment={comment}
                  comments={props.comments}
                  setComments={props.setComments}
                />
              </div>
            );
          }
        })}
      </div>
    </React.Fragment>
  );
};

export default CommentList;
