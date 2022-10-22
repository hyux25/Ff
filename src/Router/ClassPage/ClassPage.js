import React from "react";
import "./ClassPage.css";
import { useParams } from "react-router-dom";
import Header from "components/Header/Header";

const ClassPage = () => {
  const { classId } = useParams();

  const roomList = [
    {
      id: 3092,
      title: "국어하유정쌤수업너무재밋다",
      hostId: "nada",
      hostNickname: "하유정",
      hostProfileImgUrl: "/ddddd"
    },
    {
      id: 3333,
      title: "신진호쌤과함깨하는즐겁고행복한획통시간~~^^",
      hostId: "nada",
      hostNickname: "신진호",
      hostProfileImgUrl: "/ddddd"
    },
    {
      id: 30333392,
      title: "이세상의 모든 현상을 설명한다, 윤지수의 물리학",
      hostId: "nada",
      hostNickname: "윤지수",
      hostProfileImgUrl: "/ddddd"
    },
    {
      id: 3092,
      title: "미적분으로 인생을 배우다",
      hostId: "nada",
      hostNickname: "최진석",
      hostProfileImgUrl: "/ddddd"
    },
    {
      id: 3033392,
      title:
        "가깝고도 먼나라 일본의 모국어 일본어를 배워보는 시간을 가져보아요",
      hostId: "nada",
      hostNickname: "심유랑",
      hostProfileImgUrl: "/ddddd"
    }
  ];

  const RoomList = ({ room }) => {
    function randomValueFromArray(array) {
      const random = Math.floor(Math.random() * array.length);
      return array[random];
    }

    const bgColorSet = [
      "#B7A8CD",
      "#BEB7D4",
      "#AFB8E5",
      "#D8ABC3",
      "#DBB5D1",
      "#B5B1D7",
      "#D7A6BF",
      "#DAB4D2",
      "#BFB9E2",
      "#CDB7D9",
      "#BEBFE7",
      "#D4D5EC",
      "#D7D8F0",
      "#E1D1E2",
      "#E5C7DB",
      "#D7D8F0",
      "#DCDCF2"
    ];
    let bg = randomValueFromArray(bgColorSet);

    return (
      <div className="room-card" style={{ backgroundColor: bg }}>
        <div class="title">{room.title}</div>
        <div className="profile">
          <img src="https://millingtontownship.com/wp-content/uploads/2021/01/default.jpg" />
          <p className="nickname">{room.hostNickname}</p>
        </div>
      </div>
    );
  };

  const Room = () => {
    return (
      <div>
        {roomList.map((room) => (
          <RoomList key={room.id} room={room} />
        ))}
      </div>
    );
  };

  return (
    <div>
      <Header title="반 페이지 예시 페이지" />
      <div className="class_info">
        <p className="title">마산용마고등학교 2학년 4반 클래스 페이지</p>
        <p className="nickname">신진호</p>
      </div>
      <div className="class-feed">
        <Room />
      </div>
    </div>
  );
};

export default ClassPage;
