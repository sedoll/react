import React, { useNavigate, useParams, useLocation } from 'react';
const WithRouterSample = () => {  //{ location, match, history }
  const history = useNavigate(); 
  const { match } = useParams();
  const { location } = useLocation();
  return (
    <div>
      <h4>location</h4>
      <textarea
        value={JSON.stringify(location, null, 2)}
        rows={7}
        readOnly={true}
      />
      <h4>match</h4>
      <textarea
        value={JSON.stringify(match, null, 2)}
        rows={7}
        readOnly={true}
      />
      <button onClick={() => history.push('/')}>홈으로</button>
    </div>
  );
};
export default WithRouterSample;
