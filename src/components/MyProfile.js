import React, {Component} from 'react';
import './myProfile.less';
import 'bootstrap/dist/css/bootstrap.css'
class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      gender: 'Male',
      des: '',
      check: false,
    };
  }


  handleSubmit = (event) => {
    event.preventDefault();
    console.log(`name:${this.state.name}, gender:${this.state.gender}, des:${this.state.des},check:${this.state.check}`);
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  }

  handleGenderChange = (event) => {
    this.setState({
      gender: event.target.value,
    });
  }

  handleDesChange = (event) => {
    this.setState({
      des: event.target.value,
    });
  }

  handleCheckChange = (event) => {
    this.setState({
      check: event.target.value,
    });
  }
  render() {
    return (
      <div className='myprofile'>
        <h1>My Profile</h1>
      <form>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input 
            type='text' 
            id='name' 
            value={this.state.name}
            className='form-control myname'
            onChange={this.handleNameChange} />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Example select</label>
          <select 
            className="form-control myselect" 
            id="gender"
            value={this.state.gender}
            onChange={this.handleGenderChange}>
            <option value='Male'>Male</option>
            <option value='FeMale'>Female</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea 
            className="form-control mytextarea" 
            id="description" 
            rows="5" 
            value={this.state.des}
            onChange={this.handleDesChange}
            placeholder="Description about yourself" />
        </div>
        <div className="form-check">
          <input 
            className="form-check-input" 
            type="checkbox" 
            checked={this.state.check}
            onChange={this.handleCheckChange} 
            id="check" />
          <label 
            className="form-check-label" 
            htmlFor="check">
              I hava read the terms of conduct
          </label>
        </div>
        <div>
          <input 
            className="btn btn-primary mysubmit" 
            type="submit"
            value="Submit"
            disabled={!(this.state.name && this.state.gender && this.state.des  && this.state.check)}
            onClick={this.handleSubmit} />
        </div>
      </form>
      </div>
    );
  }
}

export default MyProfile;


