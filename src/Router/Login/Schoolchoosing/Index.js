import "./Index.css";

const Schoolchoosing = () => {
  return (
    <div>
      <div className="Arrow">백</div>
      <div className="schoolchoosing">
        <div className="firstbox">재학중이신 학교를 선택해주세요.</div>

        <div className="secondbox">학교입력</div>
        <input
          className="schoolsearchinG"
          placeholder="예)마산용마고등학교"
        ></input>
      </div>
    </div>
  );
};

export default Schoolchoosing;
