import React from 'react';

function Question(props) {
  return (
    <div className="question" dangerouslySetInnerHTML={{__html: decodeURI(props.content)}}></div>
  );
}

Question.propTypes = {
  content: React.PropTypes.string.isRequired
};

export default Question;
