import talente from "../talente.json";
import React, { useState } from "react";

export default function Talente() {
  const [filterTalente, setfilterTalente] = useState([]);

  function sortArray(x, y) {
    return x.name.localeCompare(y.name);
  }

  const onChangeTalente = (e) => {
    const value = e.target.value;
    const talenteFilter = talente.filter((info) => {
      return info.name === value;
    });
    setfilterTalente(talenteFilter);
  };

  return (
    <div className="container">
      <div className="völker">
        <div className="select">
          <div className="select-volk">
            <label>Talent auswählen:</label>
            <select onChange={onChangeTalente}>
              <option></option>
              {talente.sort(sortArray).map((info) => {
                return <option key={info.name}>{info.name}</option>;
              })}
            </select>
          </div>
        </div>
        {filterTalente.length > 0 && (
          <>
            {filterTalente.map((talente, i) => {
              return (
                <div className="volk" key={i}>
                  <h3 key={i}>{talente.name}</h3>

                  {talente.hasOwnProperty("voraussetzung") && (
                    <>
                      <p>Voraussetzung: {talente.voraussetzung}</p>
                      <br></br>
                    </>
                  )}

                  {talente.text.map((info, i) => {
                    return (
                      <p dangerouslySetInnerHTML={{ __html: info }} key={i}></p>
                    );
                  })}
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}
