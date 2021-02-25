import React from "react";
import line from "./assets/Line 5.svg";

export default function Main(props) {
  return (
    <div>
      <div className="page-wrapper-main">
        <header>
          <div className="header-wrapper">
            <h1>
              Jadwal
              <br />
              Kuliah
            </h1>
            <p>AN FISIP UNS</p>
          </div>
        </header>

        <main>
          <section>
            <div className="semester-wrapper">
              <div className="semester-title">
                <h3>Semester 2</h3>
              </div>

              <div className="class-flex class-short">
                <div
                  className="semester-class"
                  onClick={() => props.clickHandler("sem2a")}
                >
                  <h3>A</h3>
                </div>

                <img src={line} alt="" />

                <div
                  className="semester-class end"
                  onClick={() => props.clickHandler("sem2b")}
                >
                  <h3>B</h3>
                </div>
              </div>
            </div>

            <div className="semester-wrapper">
              <div className="semester-title">
                <h3>Semester 4</h3>
              </div>

              <div className="class-flex">
                <div
                  className="semester-class"
                  onClick={() => props.clickHandler("sem4a")}
                >
                  <h3>A</h3>
                </div>
                <img src={line} alt="" />
                <div
                  className="semester-class"
                  onClick={() => props.clickHandler("sem4b")}
                >
                  <h3>B</h3>
                </div>
                <img src={line} alt="" />
                <div
                  className="semester-class end"
                  onClick={() => props.clickHandler("sem4c")}
                >
                  <h3>C</h3>
                </div>
              </div>
            </div>

            <div className="semester-wrapper">
              <div className="semester-title">
                <h3>Semester 6</h3>
              </div>

              <div className="class-flex class-short">
                <div
                  className="semester-class"
                  onClick={() => props.clickHandler("sem6a")}
                >
                  <h3>A</h3>
                </div>
                <img src={line} alt="" />
                <div
                  className="semester-class end"
                  onClick={() => props.clickHandler("sem6b")}
                >
                  <h3>B</h3>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <footer>
        <p>rahardityaXabiyurh</p>
      </footer>
    </div>
  );
}
