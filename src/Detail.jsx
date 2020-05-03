import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import backBtn from "./assets/Group 1.svg";
import check from "./assets/check.svg";

export default function Detail(props) {
  let [currentDay, setDay] = useState("today");
  let [isTomorrow, setTomorrow] = useState(false);
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const now = new Date();
  const today = now.getDay();
  const tomorrow = today + 1;

  const dateRawToday = `${now.getDate()} ${
    months[now.getMonth()]
  } ${now.getFullYear()}`;

  const dateRawTomorrow = `${now.getDate() + 1} ${
    months[now.getMonth()]
  } ${now.getFullYear()}`;

  // Today
  const dateToday = `${props.data.classes[today].info.day}, ${dateRawToday}`;
  const schToday = props.data.classes[today].data;
  const classToday = `${schToday.length} Kelas`;

  // Tomorrow
  const dateTomorrow = `${props.data.classes[tomorrow].info.day}, ${dateRawTomorrow}`;
  const schTomorrow = props.data.classes[tomorrow].data;
  const classTomorrow = `${schTomorrow.length} Kelas`;

  let holidayToday;

  if (today === 0 || today === 6 || today === 7) {
    holidayToday = (
      <div className="no-class">
        <img src={check} alt="" />
        <h3>
          Tidak ada kelas hari ini{" "}
          <span role="img" aria-label="emoji">
            😀
          </span>
        </h3>
      </div>
    );
  }

  let holidayTomorrow;

  if (tomorrow === 0 || tomorrow === 6 || tomorrow === 7) {
    holidayTomorrow = (
      <div className="no-class">
        <img src={check} alt="" />
        <h3>
          Tidak ada kelas hari ini{" "}
          <span role="img" aria-label="emoji">
            😀
          </span>
        </h3>
      </div>
    );
  }

  const classListToday = schToday.map((index) => {
    return (
      <li key={index.id}>
        <div className="class-number">
          <p>{index.id}</p>
        </div>

        <div className="class-detail">
          <h3>{index.matkul}</h3>

          <p>{index.waktu}</p>
        </div>
      </li>
    );
  });

  const classListTomorrow = schTomorrow.map((index) => {
    return (
      <li key={index.id}>
        <div className="class-number">
          <p>{index.id}</p>
        </div>

        <div className="class-detail">
          <h3>{index.matkul}</h3>

          <p>{index.waktu}</p>
        </div>
      </li>
    );
  });

  function clickHandler(state) {
    setDay(state);

    // if (state === "today") {
    //   setDay(false);
    // } else {
    //   setDay(true);
    // }
  }

  return (
    <div>
      <nav>
        {/* <a href="#"> */}
        <img
          src={backBtn}
          alt="Back button"
          onClick={() => props.stateHandler("main")}
        />
        {/* </a> */}
        <p>Jadwal Pemadatan</p>
      </nav>
      <div className="page-wrapper-detail">
        <main>
          <section className="semester-header">
            <h2>{props.data.info.semester}</h2>
            <p>{props.data.info.class}</p>
          </section>

          <div className="day-selector">
            <p
              className={isTomorrow ? "day-main-passive" : "day-main-active"}
              onClick={() => {
                clickHandler("today");
                setTomorrow(false);
              }}
            >
              Hari Ini
            </p>
            <p
              className={
                isTomorrow ? "day-secondary-active" : "day-secondary-passive"
              }
              onClick={() => {
                clickHandler("tomorrow");
                setTomorrow(true);
              }}
            >
              Besok
            </p>
          </div>

          <CSSTransition
            in={currentDay === "today"}
            unmountOnExit
            timeout={500}
            classNames="sch-today"
          >
            <div className="today">
              <section className="semester-date">
                <div className="date-wrapper">
                  <h3>{classToday}</h3>
                  <p>{dateToday}</p>
                </div>
              </section>

              <section className="semester-class">
                {holidayToday}
                <ul>{classListToday}</ul>
              </section>
            </div>
          </CSSTransition>

          <CSSTransition
            in={currentDay === "tomorrow"}
            unmountOnExit
            timeout={500}
            classNames="sch-tomorrow"
          >
            <div className="today">
              <section className="semester-date">
                <div className="date-wrapper">
                  <h3>{classTomorrow}</h3>
                  <p>{dateTomorrow}</p>
                </div>
              </section>

              <section className="semester-class">
                {holidayTomorrow}
                <ul>{classListTomorrow}</ul>
              </section>
            </div>
          </CSSTransition>
        </main>
      </div>
    </div>
  );
}
