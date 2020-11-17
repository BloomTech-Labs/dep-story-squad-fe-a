import React from 'react';
import WeekThreeTrophyLogic from '../../trophies/WeekThreeTrophy/WeekThreeTrophyLogic';
import '../../TrophiesStyles.less';

import { connect } from 'react-redux';

const RenderWeekThreeTrophy = props => {
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
          <p className="trophy_title">Week 3</p>
          <WeekThreeTrophyLogic
            className="trophy"
            value={reading_count + writing_count + drawing_count}
          />
        </div>

        <div className="progress-bar">
          <progress
            className="progress-bar"
            id="reflect-progress-bar"
            max="9"
            value={reading_count + writing_count + drawing_count}
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

export default connect(mapStateToProps, {})(RenderWeekThreeTrophy);
