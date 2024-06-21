import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Modal } from "semantic-ui-react";
import { api } from "../api";

const DeleteCommentModal = (props) => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const show = () => setOpen(true);
  const close = () => setOpen(false);

  const { id } = useParams();

  const handleDelete = (comment) => {
    api()
      .delete(`/posts/${id}/comments/${comment.id}`)
      .then(() => {
        props.setComments(
          props.comments.filter((commentItem) => commentItem.id !== comment.id)
        );
        setError("");
        close();
      })
      .catch(() => {
        setError("Yorumu silerken hata oluştu.");
      });
  };

  return (
    <React.Fragment>
      <Button color="red" size="mini" onClick={show}>
        Sil
      </Button>
      <Modal size="mini" open={open} onClose={close}>
        <Modal.Header>Yazıyı Sil</Modal.Header>
        <Modal.Content>
          <p>Yorumunuzu silmek istediğinizden emin misiniz?</p>
          {error && <p>{error}</p>}
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={close}>
            İptal Et
          </Button>
          <Button
            positive
            icon="delete"
            labelPosition="right"
            content="Evet, Sil!"
            onClick={() => handleDelete(props.comment)}
          />
        </Modal.Actions>
      </Modal>
    </React.Fragment>
  );
};

export default DeleteCommentModal;
