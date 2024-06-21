import React, { useState } from "react";
import { Button, Modal } from "semantic-ui-react";
import { api } from "../api";

const DeleteModal = ({ post, push }) => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const show = () => setOpen(true);
  const close = () => setOpen(false);

  const handleDelete = (id) => {
    api()
      .delete(`/posts/${id}`)
      .then(() => {
        setError("");
        close();
        push("/");
      })
      .catch(() => {
        setError("Yazıyı silerken hata oluştu.");
      });
  };

  return (
    <React.Fragment>
      <Button color="red" onClick={show}>
        Sil
      </Button>
      <Modal size="mini" open={open} onClose={close}>
        <Modal.Header>Yazıyı Sil</Modal.Header>
        <Modal.Content>
          <p>
            <b>{post.title}</b> başlıklı yazıyı silmek istediğinizden emin
            misiniz?
          </p>
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
            onClick={() => handleDelete(post.id)}
          />
        </Modal.Actions>
      </Modal>
    </React.Fragment>
  );
};

export default DeleteModal;
