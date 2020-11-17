import React from 'react';
import WeekTwoTrophyLogic from '../../trophies/WeekTwoTrophy/WeekTwoTrophyLogic';
import '../../TrophiesStyles.less';

import { connect } from 'react-redux';

const RenderWeekTwoTrophy = props => {
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
          <p className="trophy_title">Week 2</p>
          <WeekTwoTrophyLogic className="trophy" value={writing_count * 20} />
        </div>

        <div className="progress-bar">
          <progress
            className="progress-bar"
            id="reflect-progress-bar"
            max="120"
            value={writing_count * 20}
          ></progress>
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

export default connect(mapStateToProps, {})(RenderWeekTwoTrophy);
