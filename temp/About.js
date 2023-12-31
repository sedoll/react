import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true // 이 설정을 통하여 문자열 맨 앞의 ? 를 생략합니다.
  });
  const showDetail = query.detail === 'true'; // 쿼리의 파싱 결과값은 문자열입니다.
  return (
    <div>
      <h1>소개</h1>
      <hr />
      <p>이 프로젝트는 리액트 라우터 실습 예제입니다.</p>
      {showDetail && <p>detail 값을 true 로 설정하셨습니다.!</p>}
    </div>
  );
};

export default About;