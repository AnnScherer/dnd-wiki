import React, { useState } from "react";
import hintergrund from "../hintergrund.json";

export default function Hintergrund() {
  const [filterHintergrund, setFiltrHintergrund] = useState([]);
  console.log(hintergrund);

  function sortArray(x, y) {
    return x.name.localeCompare(y.name);
  }

  const onChangeHintergrund = (e) => {
    const value = e.target.value;
    const hintergrundFilter = hintergrund.filter((info) => {
      return info.name === value;
    });
    setFiltrHintergrund(hintergrundFilter);
  };

  console.log(filterHintergrund);

  return (
    <div className="container">
      <div className="völker">
        {hintergrund.length > 0 && (
          <div className="select">
            <div className="select-volk">
              <label>Hintergrund auswählen:</label>
              <select onChange={onChangeHintergrund}>
                <option>Hintergrund auswählen</option>
                {hintergrund.sort(sortArray).map((info) => {
                  return <option key={info.name}>{info.name}</option>;
                })}
              </select>
            </div>
          </div>
        )}
        {filterHintergrund.length > 0 ? (
          <>
            {filterHintergrund.map((hintergrund, i) => {
              return (
                <div className="volk" key={i}>
                  <h3 key={i}>{hintergrund.name}</h3>
                  {hintergrund.text.map((info, i) => {
                    return (
                      <p dangerouslySetInnerHTML={{ __html: info }} key={i}></p>
                    );
                  })}
                </div>
              );
            })}
          </>
        ) : (
          <div>
            {hintergrund.length > 0 && (
              <div className="volk">
                <h3>Hintergrund</h3>
                <p>
                  Jede Geschichte hat einen Anfang. Der Hintergrund deines
                  Charakters verrät, wo er herkommt, wie er ein Abenteurer wurde
                  und wo sein Platz in der Welt ist. Dein Kämpfer könnte ein
                  tapferer Ritter gewesen sein der ein verbitterter Soldat, dein
                  Magier ein Weiser oder ein Künstler. Dein Schurke hätte sich
                  bei einer Gilde verdingen oder als Narr das Publikum
                  begeistern können.
                </p>
                <p>
                  Einen Hintergrund auszusuchen, gibt dir wichtige Anhaltspunkte
                  zur Geschichte deines Charakters und sagt viel über dessen
                  Identität aus. Die wichtigste Frage, die du dir zum
                  Hintergrund stellen solltest ist: Was hat sich verändert?
                  Warum hat dein Charakter mit seinem vorherigen Leben
                  abgeschlossen, alles aufgeben und ist auf Abenteuer
                  ausgezogen? Woher hat er das Geld für seine Anfangsausrüstung
                  oder falls du einen wohlhabenden Hintergrund wählst wieso
                  verfügt er nicht über noch mehr Geld? Wie hat er die
                  Fähigkeiten seiner Klasse erlernt? Was unterscheidet ihn sonst
                  noch von anderen, die den gleichen Hintergrund haben? Die
                  Hintergrundbeispiele in diesem Kapitel enthalten sowohl
                  konkrete Vorzüge (Merkmale, Übung und Sprachen) als auch
                  Anhaltspunkte
                </p>
                <br></br>

                <b>ÜBUNG</b>
                <p>
                  Jeder Hintergrund verleiht deinem Charakter Übung in zwei
                  Fertigkeiten. Zusätzlich bist du durch die meisten
                  Hintergründe geübt im Umgang mit einem oder mehreren
                  Werkzeugen. Sollte dein Charakter dieselbe Übung aus zwei
                  Quellen erlangen, kann er als Ausgleich eine andere Übung der
                  gleichen Art wählen (Fertigkeit oder Werkzeug).
                </p>
                <br></br>

                <b>SPRACHEN</b>
                <p>
                  Manche Hintergründe gestatten es deinem Charakter, weitere
                  Sprachen zu lernen, die über jene hinausgehen, die er durch
                  seine Volkszugehörigkeit beherrscht.
                </p>
                <br></br>

                <b>AUSRÜSTUNG</b>
                <p>
                  Jeder Hintergrund stellt deinem Charakter eine
                  Anfangsausrüstung zur Verfügung. Wenn du die optionale Regel
                  aus Ausrüstung verwendest, um dir deine Anfangsausrüstung mit
                  Geld selbst zusammenzustellen, erhältst du die
                  Anfangsausrüstung deines Hintergrunds nicht.
                </p>
                <br></br>

                <b>EMPFOHLENE CHARAKTERISTIKA</b>
                <p>
                  Jeder Hintergrund enthält auf ihm basierende persönliche
                  Charakteristika. Du kannst dir diese frei aussuchen, sie
                  zufällig mit einem Würfel bestimmen oder die Vorschläge als
                  Inspiration für selbst ausgedachte Charakteristika nutzen.
                </p>
                <br></br>

                <b>EINEN HINTERGRUND ANPASSEN</b>
                <p>
                  Du möchtest vielleicht einige Eigenschaften deines
                  Hintergrunds verändern, damit er besser zum Konzept deines
                  Charakters oder der Kampagne passt, die ihr spielt. Um einen
                  Hintergrund anzupassen, kannst du ein Merkmal mit einem
                  beliebigen anderen ersetzen, dir zwei Fertigkeiten aussuchen,
                  in denen du geübt bist, und insgesamt zwei Werkzeuge und/oder
                  Sprachen wählen, mit denen du umgehen kannst oder die du
                  beherrscht. Nutze die Anfangsausrüstung deines Hintergrunds
                  oder erwirb diese mit Geld, wie es in Ausrüstung beschrieben
                  ist. (In diesem Fall erhältst du nicht noch zusätzlich die
                  Ausrüstung, die in deiner Klassenbeschreibung angegeben ist)
                  Zum Schluss wählst du noch zwei Persönlichkeitsmerkmale, ein
                  Ideal, eine Bindung und einen Makel. Wenn du kein Merkmal
                  finden kannst, das zu deinem gewünschten Hintergrund passt,
                  setze dich mit deinem SL zusammen und erschafft gemeinsam
                  eines.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
