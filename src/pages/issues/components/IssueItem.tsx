import { mediaMax } from 'libs/styles/media';
import React from 'react';
import styled from 'styled-components';
import { Issue } from 'types/issue';

interface Props {
  issue: Issue;
  subscribe: (node: HTMLLIElement | null) => void;
  index: number;
}

function IssueItem({ issue, subscribe, index }: Props) {
  const { id, title, comments, body, created_at, user } = issue;

  return (
    <Container ref={subscribe}>
      <IssueTitleBlock>
        <IssueTitle>
          #{index + 1} {title}
        </IssueTitle>
        <IssueCommentCount>comment {comments}</IssueCommentCount>
      </IssueTitleBlock>
      <IssueBody>{body}</IssueBody>
      <IssueInfo>
        <UserInfo>
          <UserAvatar src={user.avatar_url} alt="user avatar" />
          <UserName>{user.login}</UserName>
        </UserInfo>
        <IssueCreateAt>{created_at.substring(10, 0)}</IssueCreateAt>
      </IssueInfo>
    </Container>
  );
}

const Container = styled.li`
  max-width: 1378px;
  height: 194px;
  margin: 45px auto 45px auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  ${mediaMax.medium} {
    width: 300px;
    height: 84px;
    border-radius: 15px;
  }
`;

const IssueTitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1250px;
`;

const IssueTitle = styled.h3``;

const IssueCommentCount = styled.span``;

const IssueBody = styled.p`
  max-width: 1060px;
  height: 32px;
  margin: 0 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 16px;

  color: ${({ theme }) => theme.palette.gray500};
`;

const IssueInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 16px 48px 0 0;
  /* max-width: 250px;
  margin-left: 1080px; */
`;

const UserInfo = styled.span`
  display: flex;
  align-items: center;
`;

const UserAvatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

const UserName = styled.span`
  margin-left: 8px;
`;

const IssueCreateAt = styled.span`
  display: flex;
  align-items: center;
  width: 96px;
  color: ${({ theme }) => theme.palette.gray500};

  margin-left: 20px;
`;

export default IssueItem;
