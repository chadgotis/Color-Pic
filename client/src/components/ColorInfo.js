import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input } from 'semantic-ui-react';

class ColorInfo extends Component {
  render(){
    return (
      <div className="color-info">
       <h5>Hex</h5>
       <input
         className="hex-info-input"
         value={this.props.hexColor}
       />
       <p className="info-text">R</p>
       <p className="info-text">G</p>
       <p className="info-text">B</p>
       <div>
         <input
           className="info-input"
           value={this.props.R}
         />
         <input
           className="info-input"
           value={this.props.G}
         />
         <input
           className="info-input"
           value={this.props.B}
         />
       </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    hexColor: state.colorInfo.hexColor,
    R: state.colorInfo.R,
    G: state.colorInfo.G,
    B: state.colorInfo.B,
  };
};

export default connect(mapStateToProps, { })(ColorInfo);