import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getForm } from "../../redux/actions";

const Complete = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const formDb = useSelector((state) => state.formDb);
  
  useEffect(() => {
    dispatch(getForm(id));
  }, []);

  return (
    <div class="card text-bg-dark p-3">
      <div>
        <h3>Tu información</h3>
      </div>
      <br />
      {formDb.length?formDb.map((e, index) => {
        if(e.name!=="terms_and_conditions"){return( <div key={index} class="m-1">
          <input class="form-control" type="text" placeholder={e.value} aria-label="Disabled input example" disabled></input>
        </div>)};
      }):<div class="d-flex spinner-border mx-auto" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>}
    < br />
      <h4>Gracias</h4>
    </div>
  );
};

export default Complete;
