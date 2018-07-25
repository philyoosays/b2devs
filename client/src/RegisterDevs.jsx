import React from 'react';

import './RegisterDevs.css';

export default class RegisterDevs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      headshot: '',
      resume: '',
      status: '',
      seeking: '',
      website: '',
      github: '',
      linkedin: '',
      dev_type: '',
      tech: '',
      rate: ''
    }

    // this.moveInputLabel = this.moveInputLabel.bind(this);
  }

  moveInputLabel(e) {
    let style = e.target.style;
    let input = e.target.className;
    style.fontSize = '14px';
    style.top = '10px';
    style.color = 'white';
    style.right = '85px';
    setTimeout(() => {
      document.querySelector(`input.${input}`).select()
    }, 200)
  }

  moveInputLabelFromInput(e) {
    let input = e.target.className.split(' ')[0];
    let style = document.querySelector(`span.${input}`).style;
    style.fontSize = '14px';
    style.top = '0px';
    style.color = 'white';
    style.right = '85px';
  }

  render() {

    return(
      <section className="regdevcontainer">
        <div className="regdevbox">
          <h1>You know the deal...</h1>
          <h2>First we need your info.</h2>
          <section className="regdevinputs">
            <div className="regdevinputleft">
              <span className="fname" onClick={(e) => {this.moveInputLabel(e)}}>First Name</span>
              <input
                type="text"
                className="fname regdevinputfield"
                onClick={(e) => {this.moveInputLabelFromInput(e)}}
                onChange={text => this.setState({ fname: text })}
              />
              <span className="lname" onClick={(e) => {this.moveInputLabel(e)}}>Last Name</span>
              <input
                type="text"
                className="lname regdevinputfield"
                onClick={(e) => {this.moveInputLabelFromInput(e)}}
                onChange={text => this.setState({ lname: text })}
              />
              <span className="lname" onClick={(e) => {this.moveInputLabel(e)}}>Email</span>
              <input
                type="text"
                className="lname regdevinputfield"
                onClick={(e) => {this.moveInputLabelFromInput(e)}}
                onChange={text => this.setState({ lname: text })}
              />

            </div>
            <div className="regdevinputright">

            </div>
          </section>
        </div>
      </section>
    )
  }
}
