import "../CSS/MainNav.css";
export default function MainNav() {
  return (
    <>
      <nav className="mainNav">
        <div className="left">
          <div className="items deep-inner-button">
            <div className="title">
              <p>
                All Category{" "}
                <i
                  className="bi bi-caret-down-fill"
                  style={{ fontSize: "1rem" }}
                ></i>
              </p>
            </div>
            <div className="Menulist">
              <p>Herbal Powder</p>
              <p>Karela powder</p>
            </div>
          </div>
        </div>

        <div className="mid">
          <div className="home deep-inner-button">
            <p>Home</p>
          </div>

          <div className="dp deep-inner-button">
            <div className="title">
              <p>
                 Powder{" "}
                <i
                  className="bi bi-caret-down-fill"
                  style={{ fontSize: "1rem" }}
                ></i>
              </p>
            </div>
            <div className="Menulist">
              <p>Herbal Powder</p>
              <p>Karela powder</p>
            </div>
          </div>

          <div className="pack deep-inner-button">
            <div className="title">
              <p>
                 Packtes{" "}
                <i
                  className="bi bi-caret-down-fill"
                  style={{ fontSize: "1rem" }}
                ></i>
              </p>
            </div>
            <div className="Menulist">
              <p>Herbal Powder</p>
              <p>Karela powder</p>
            </div>
          </div>
          <div className="use deep-inner-button">
            <p>Instructions</p>
          </div>
          <div className="review deep-inner-button">
            <p>Reviews</p>
          </div>
        </div>

        <div className="right">
            <div className="mail deep-inner-button">
                    <i className="bi bi-envelope"></i>
                <p>Contact</p>
            </div>
            <div className="call deep-inner-button">
              <i className="bi bi-telephone"></i>
              <p>Call </p>
            </div>
        </div>
      </nav>
    </>
  );
}
