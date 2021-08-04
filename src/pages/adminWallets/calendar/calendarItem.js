import React from "react";
import DateRangePicker from "react-daterange-picker";
import Moment from "moment";
import { extendMoment } from "moment-range";

// import DatePicker, { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";

import "./react-calendar.css";
// registerLocale("ru", ru);
const moment = extendMoment(Moment);
const stateDefinitions = {
  available: {
    color: "transparent",
    label: "Available"
  },
  unavailable: {
    // selectable: false,
    color: "transparent",
    label: "Unavailable"
  }
};

export default class CalendarItem extends React.Component {
  state = {
    dates: null,
    value: "",
    states: "",
    setYear: new Date().getFullYear(),
    setMonth: new Date().getMonth() -1,
    date: new Date(),
    start: "",
    end: "",
    showNewMonth: true
  };
  dateRangePickerSelect = (range, states, dates, start, end, value) => {
    this.setState({ dates });
    this.setState({
      value: range,
      states: states
    });
    let selectedStartDate = this.state.value.start.format("DD/MMM/YYYY");
    let selectedEndDate = this.state.value.end.format("DD/MMM/YYYY");

    this.setState({
      start: selectedStartDate,
      end: selectedEndDate
    });
  };
  displaySelectedDates = () => {
    return (
      <div className="text-center">
        <div className="d-inline-block text-bold color-blue">
          <p>
            Selected Start Date: <input value={this.state.start} readOnly />{" "}
          </p>
        </div>
        <div className="d-inline-block text-bold color-blue">
          <p>
            Selected End Date: <input value={this.state.end} readOnly />{" "}
          </p>
        </div>
      </div>
    );
  };
  componentDidUpdate(_props, _state) {
    if (this.state.setMonth !== _state.setMonth) {
      this.setState({ showNewMonth: false }, () =>
        this.setState({ showNewMonth: true })
      );
    }
  }
  smallCalenderChange = (date) => {
    this.setState({ date });
    let newD = new Date(date);
    this.setState({
      setMonth: newD.getMonth(),
      setYear: newD.getFullYear()
    });
  };

  render() {
    let initialYear = this.state.setYear;
    let initialMonths = this.state.setMonth;

    let noOfMonths = 2;

    new Date().setDate(new Date().getDate() - 1);

    new Date().setDate(new Date().getDate() - 1);

    return (
      <div>
        {/*<div>{this.displaySelectedDates()}</div>*/}
        {this.state.showNewMonth && (
          <DateRangePicker
            selectionType="range"
            stateDefinitions={stateDefinitions}
            defaultState="available"
            value={this.state.value}
            onSelect={this.dateRangePickerSelect}
            numberOfCalendars={noOfMonths}
            initialMonth={initialMonths}
            initialYear={initialYear}
            firstOfWeek={1}
          />
        )}
      </div>
    );
  }
}
