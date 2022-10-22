import "./Index.css";
// import MaterialIcon, {colorPalette} from 'material-icons-react';

const Navigation = ({ color }) => {
  return (
    <div className="navigation">
      <div className="box">
        <span className="material-symbols-outlined" id="color_selected">
          menu_book
        </span>
        <p id="color_selected">클래스</p>
      </div>

      <div className="box">
        <span className="material-symbols-outlined">calendar_month</span>
        <p>과제</p>
      </div>

      <div className="box">
        <span className="material-symbols-outlined">add</span>
        <p>만들기</p>
      </div>

      <div className="box">
        <span className="material-symbols-outlined">Link</span>
        <p>합류하기</p>
      </div>

      <div className="box">
        <span className="material-symbols-outlined">person</span>
        <p>MY</p>
      </div>
    </div>
  );
};

export default Navigation;
