import React, { useState } from "react";
import "./Contact.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: { name: "", email: "", body: "" },
  });

  const [err, setErr] = useState({});

  const navigate = useNavigate();

  const onSubmitForm = (data) => {
    const post_url = "/api/messages/add";
    axios
      .post(post_url, data)
      .then((res) => {
        if (res.status == 200) {
          navigate(0);
        }
      })
      .catch((err) => {
        setErr(err.response.data);
      });
  };

  console.log(err);
  return (
    <section className="contactForm">
      <form onSubmit={handleSubmit(onSubmitForm)}>
        {err.name && (
          <span className="err_span">
            <p>{err.name}</p>
          </span>
        )}
        <div className="mb-2">
          <input
            type="name"
            className="form-control rounded-0"
            id="FormControlInput1"
            placeholder="Name"
            {...register("name")}
          />
        </div>
        {err.email && (
          <span className="err_span">
            <p>{err.email}</p>
          </span>
        )}
        <div className="mb-3">
          <input
            type="email"
            className="form-control rounded-0"
            id="FormControlInput"
            placeholder="Email adresse "
            {...register("email")}
          />
        </div>
        <div className="mb-3 ">
          <textarea
            className="form-control rounded-0"
            id="FormControlTextarea1"
            rows="3"
            placeholder="Type your message here"
            {...register("body")}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-dark">
          Contact
        </button>
      </form>
    </section>
  );
};

export default Contact;
