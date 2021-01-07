import styled from "@emotion/styled";
import { useState } from "react";
import { CurrentUserT } from "../typesTS/CurrentUserT";

// import styled from "@emotion/styled/macro";

export default function CurrentUser() {
  // styles
  const Container = styled.div`
    width: 208px;

    display: flex;
    justify-content: space-between;
    height: 43px;
    margin-left: auto;
    margin-right: 32px;
    vertical-align: middle;
    text-align: center;

    font-family: "Jost", sans-serif;
    font-size: 11px;
  `;

  const NotificationImage = styled.img`
    height: 18px;
    margin-top: 12px;
  `;
  const VerticalLine = styled.div`
    width: 1px; /* Line width */
    background-color: rgba(0, 0, 0, 0.1); /* Line color */
    height: 41px; /* Override in-line if you want specific height. */
  `;

  const UserAvatar = styled.img`
    width: 43px;
    height: 43px;

    border-radius: 50%;
  `;
  const UserName = styled.span`
    margin-top: 15px;
  `;
  // functionality
  // user
  const [currentUser] = useState<CurrentUserT>({
    userName: "Alexander Gerasimuk",
    userPicAdress: "/userAvatar.jpg",
  });
  return (
    <Container>
      <NotificationImage src="notification.png"></NotificationImage>
      <VerticalLine></VerticalLine>

      <UserName>{currentUser.userName}</UserName>
      <UserAvatar src={currentUser.userPicAdress}></UserAvatar>
    </Container>
  );
}
