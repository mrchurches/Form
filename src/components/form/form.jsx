import React, { useState } from "react";
import json from "../../db.json";
import { postForm } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./form.module.css";
import validator from "./validator";

const Form = () => {
  const dispatch = useDispatch();
  let form = useSelector((state) => state.form);
  const [error, setError] = useState({});
  const [input, setInput] = useState({
    full_name: "",
    email: "",
    birth_date: "",
    country_of_origin: null,
  });

  function handleChange(e) {
    // if (e.target.name === "terms_and_conditions") {
    //   setInput({ ...input, [e.target.name]: e.target.checked });
    //   console.log(e.target.checked)
    // } else {
    //   setInput({ ...input, [e.target.name]: e.target.value });
    //   setError(validator(input));
    // }
    // console.log(e.target.name)
    setInput({ ...input, [e.target.name]: e.target.value });
    setError(validator({ ...input, [e.target.name]: e.target.value }));
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    setError(validator(input));
    dispatch(postForm(input));
    setInput({
      full_name: "",
      email: "",
      birth_date: "",
      country_of_origin: "",
      terms_and_conditions: false,
    });
  };

  return (
    <div class={`card text-bg-dark p-3`}>
      <div>
        <h1>Form</h1>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        {json.items.map((e, index) => {
          return (
            <div
              key={index}
              class={e.type === "checkbox" ? "d-flex flex-row m-2" : "m-2"}
            >
              {e.type === "checkbox" && (
                <span class={styles.label} for={e.label}>
                  {e.label}
                </span>
              )}

              {e.type !== "select" ? (
                e.type !== "submit" ? (
                  <>
                    <input
                      class={
                        e.type === "email" || e.type === "text"
                          ? "form-control"
                          : e.type === "checkbox"
                          ? "form-check-input"
                          : ""
                      }
                      onChange={(e) => handleChange(e)}
                      type={e.type}
                      name={e.name}
                      value={input[e.name]}
                      placeholder={e.label}
                      required={e.required}
                    />
                    <div class="text-danger">{error[e.name]}</div>
                  </>
                ) : (
                  <input
                    class="btn btn-primary"
                    value={e.label}
                    type={e.type}
                    disabled={
                      (error.full_name ||
                        error.email ||
                        error.birth_date ||
                        error.country_of_origin ||
                        form[0] === "forms") &&
                      true
                    }
                  />
                )
              ) : (
                <>
                  <select
                    name={e.name}
                    class="form-select"
                    value={input.country_of_origin}
                    required={e.required}
                    onChange={(e) => handleChange(e)}
                  >
                    <option value="">{e.label}</option>
                    {e.options.map((j, index) => {
                      return (
                        <option key={index} value={j.value}>
                          {j.label}
                        </option>
                      );
                    })}
                  </select>
                  {error.country_of_origin && (
                    <div class="text-danger">Debe seleccionar un país.</div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </form>
      {form[0] === "forms" && (
        <div>
          <h5>Enviado correctamente!</h5>
          <Link to={`/${form[1]}`}>
            <button class="btn btn-primary">Siguiente</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Form;
