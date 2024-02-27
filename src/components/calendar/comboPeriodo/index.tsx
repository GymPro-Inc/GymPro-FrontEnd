import React, { useState, useEffect } from 'react';

class HourComboBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startHour: '',
      endHour: '',
      hourOptions: [],
    };
  }

  handleStartHourChange = (event) => {
    this.setState({ startHour: event.target.value }, () => this.generateHourOptions());
  };

  handleEndHourChange = (event) => {
    this.setState({ endHour: event.target.value }, () => this.generateHourOptions());
  };

  generateHourOptions = () => {
    const { startHour, endHour } = this.state;
    const start = new Date(`2022-01-01T${startHour}`);
    const end = new Date(`2022-01-01T${endHour}`);
    const hourOptions = [];

    while (start <= end) {
      hourOptions.push(new Date(start));
      start.setTime(start.getTime() + 60 * 60 * 1000);
    }

    this.setState({ hourOptions });
  };

  render() {
    const { startHour, endHour, hourOptions } = this.state;

    return (
      <div>
        <label>Hora Inicial:</label>
        <input type="time" value={startHour} onChange={this.handleStartHourChange} />

        <label>Hora Final:</label>
        <input type="time" value={endHour} onChange={this.handleEndHourChange} />

        <select>
          {hourOptions.map((hour) => (
            <option key={hour} value={hour}>
              {hour.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' })}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default HourComboBox;
