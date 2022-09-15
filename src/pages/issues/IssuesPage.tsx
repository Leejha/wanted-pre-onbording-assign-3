import { issuesContext } from 'App';
import { useInfiniteScroll } from 'hooks/useInfiniteScroll';
import { mediaMax } from 'libs/styles/media';
import React, { Fragment, useContext } from 'react';
import styled from 'styled-components';
import IssueItem from './components/IssueItem';

function IssuesPage() {
  const issues = useContext(issuesContext);
  const subscribe = useInfiniteScroll(() => console.log('Dd'), {
    rootMargin: '400px',
  });

  return (
    <IssueList>
      {issues.map((issue, index) => {
        return (
          <Fragment key={index}>
            {index === 4 && (
              <Container>
                <LogoImage src="https://younuk.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fbf0a0656-3146-4e9b-8739-7bca3d0d2cb4%2F%25E1%2584%2584%25E1%2585%25B5%25E1%2586%25BC%25E1%2584%2589%25E1%2585%25B3%25E1%2584%2591%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A9%25E1%2584%258B%25E1%2585%25AE_%25E1%2584%2585%25E1%2585%25A9%25E1%2584%2580%25E1%2585%25A9_%25E1%2584%2580%25E1%2585%25B5%25E1%2584%2587%25E1%2585%25A9%25E1%2586%25AB%25E1%2584%2592%25E1%2585%25A7%25E1%2586%25BC.png?table=block&id=23d7e96e-0dbc-4ba3-9e41-c0f22a5ba926&spaceId=72b256b1-ae08-4e70-bb6c-f9c3cad5a793&width=2000&userId=&cache=v2" />
              </Container>
            )}
            <IssueItem issue={issue} index={index} subscribe={subscribe} />
          </Fragment>
        );
      })}
    </IssueList>
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

const IssueList = styled.ol`
  ${mediaMax.medium} {
    ${({ theme }) => theme.textStyle.regular[1216]};
  }
`;

const LogoImage = styled.img`
  width: 30px;
  height: 30px;
`;

export default IssuesPage;
