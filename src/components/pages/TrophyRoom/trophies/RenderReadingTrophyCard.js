import React from 'react';
//import { Header } from '../../../common/';
import ReadingTrophyLogic from '../trophies/ReadingTrophyLogic';
import '../TrophyCard.less';

import { connect } from 'react-redux';

const RenderReadingTrophyCard = props => {
  const {
    days_count,
    writing_count,
    reading_count,
    drawing_count,
  } = props.student.records;
  console.log(days_count, writing_count, reading_count, drawing_count);

  return (
    <>
      <div className="trophy_main_container">
        <div className="reading_trophy">
          <p className="trophy_title">Week 1</p>
          <ReadingTrophyLogic className="trophy" value={100} />
        </div>

        <div className="progress-bar">
          <progress
            className="progress-bar"
            id="reflect-progress-bar"
            max="100"
            value={100}
          >
            u
          </progress>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  console.log('State in Trophy Room:', state);
  return {
    student: state.childReducer,
    student_id: state.childReducer.student_id,
  };
};

export default connect(mapStateToProps, {})(RenderReadingTrophyCard);
