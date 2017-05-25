import React from 'react';

function Result(props) {
  return (
    <div className="result">
      <strong>{props.quizResult}</strong>
    </div>
  );
}

Result.propTypes = {
  quizResult: React.PropTypes.string.isRequired,
};

export default Result;
