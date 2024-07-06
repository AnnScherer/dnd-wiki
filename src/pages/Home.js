import { useState } from "react";
import zauber from "../zauber.json";
import klassenZauber from "../klassenzauber.json";

const Home = () => {
  const [selectValue, setSelectValue] = useState({
    klasse: "",
    grad: Number,
  });
  const [filteredSpells, setFilteredSpells] = useState([]);
  const [inhaltsverzeichnis, setInhaltsverzeichnis] = useState([]);
  const [searchSpell, setSearchSpell] = useState([]);
  const [klasseFilter, setKlasseFilter] = useState([]);

  const onChangeKlasse = (event) => {
    const value = event.target.value;
    setSelectValue((selectValue) => ({ ...selectValue, klasse: value }));
    const filterGrad = klassenZauber.filter((klasse) => klasse.name === value);
    setKlasseFilter(filterGrad);
    console.log(filterGrad);
  };
  const onChangeGrad = (event) => {
    const value = event.target.value;
    setSelectValue((selectValue) => ({ ...selectValue, grad: Number(value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const spellFilter = zauber.filter((spell) => {
      return (
        spell.klassen.includes(selectValue.klasse) &&
        spell.grad === selectValue.grad
      );
    });
    setFilteredSpells(spellFilter);
    setInhaltsverzeichnis(spellFilter);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const spellFilter = zauber.filter((spell) => {
      return spell.name.includes(searchSpell);
    });
    setFilteredSpells(spellFilter);
    setInhaltsverzeichnis(spellFilter);
    setSelectValue.klasse("");
    setSelectValue.grad("");
  };

  const changeValue = (e) => {
    setSearchSpell(e.target.value);
  };

  return (
    <div>
      <div className="search">
        <form>
          <input
            onChange={changeValue}
            type="text"
            placeholder="Suchen"
            list="Zauber"
          />
          <datalist id="Zauber">
            {zauber.map((spell) => {
              return <option key={spell.name} value={spell.name} />;
            })}
          </datalist>
          <button type="submit" onClick={handleSearch}>
            Senden
          </button>
        </form>
      </div>

      <div className="select-inhaltsverzeichnis">
        <form
          className="home-form"
          onSubmit={selectValue !== "" ? handleSubmit : null}
        >
          <div className="select">
            <div className="select-klasse">
              <label>Klasse auswählen:</label>
              <select onChange={onChangeKlasse}>
                <option>Klasse auswählen</option>
                {klassenZauber.map((klasse, i) => (
                  <option key={i}>{klasse.name}</option>
                ))}
              </select>
            </div>
            <div className="select-grad">
              <label>Grad auswählen:</label>
              <select onChange={onChangeGrad}>
                <option>Grad auswählen</option>
                {klasseFilter.length > 0 &&
                  klasseFilter[0].grade.map((number, i) => (
                    <option key={i}>{number}</option>
                  ))}
              </select>
            </div>
          </div>
          <button type="submit">Suchen</button>
        </form>

        <div className="inhaltsverzeichnis">
          {inhaltsverzeichnis.length > 0 && <h2>Inhaltsverzeichnis</h2>}
          <p>{inhaltsverzeichnis.length} Zauber</p>
          <ul>
            {inhaltsverzeichnis.map((header) => {
              return (
                <a key={header.name} href={"#" + header.name}>
                  <li>{header.name}</li>
                </a>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="alle-zauber">
        {filteredSpells.length > 0 ? (
          filteredSpells.map((spell) => {
            return (
              <div id={spell.name} className="zauber" key={spell.name}>
                <h3>{spell.name}</h3>
                {spell.grad > 0 ? (
                  <p>
                    {spell.schule} des {spell.grad}. Grades
                    {spell.hasOwnProperty("ritual") && <>{spell.ritual}</>}
                  </p>
                ) : (
                  <p>Zaubertrick der {spell.schule}</p>
                )}
                <p>
                  Zeitaufwand: {spell.zeitaufwand} <br />
                  Reichweite: {spell.reichweite} <br />
                  Koponenten: {spell.komponenten} <br />
                  Wirkungsdauer: {spell.wirkungsdauer} <br />
                </p>
                <div>
                  {spell.text.map((info, i) => (
                    <p dangerouslySetInnerHTML={{ __html: info }} key={i}></p>
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          <p>Bitte erst Klasse und Grad auswählen</p>
        )}
      </div>
    </div>
  );
};

export default Home;
