import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
export default function Addtodos(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submitTodo = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Enter the title and desc");
    } else {
      props.addTodos(title, desc);
      setDesc("");
      setTitle("");
    }
  };
  return (
    <div>
      <Form onSubmit={submitTodo}>
        <div className="my-2">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Enter Title"
          />
        </div>
        <div className="my-2">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            placeholder="Description"
          />
        </div>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
