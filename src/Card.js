import React from 'react';
import Modal from 'react-responsive-modal';
import './Modal.css'

class Card extends React.Component {
	
 constructor(props) {
    super(props);
      this.state = {
	  open: false
      }
    }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
  	const { open } = this.state;
  	const {imageUrl,desc,price,size} = this.props;
  	return(
<div className="card dib br3 pa3 ma2 grow bw2 shadow-5" style={{width: '18rem'}}>
  <img className="card-img-top" src={imageUrl} alt="Card cap" onClick={this.onOpenModal}/>
  <div className="card-body">
    <h5 className="card-title">{desc}</h5>
    <p className="card-text">{price}<br />{size}</p> 
  </div>
        <div>
        <Modal style={{'z-index': '1030'}} open={open} onClose={this.onCloseModal} >
          <h2 className="tc">{desc}</h2>
            <img src={imageUrl} alt="Card cap"/>
        </Modal>
        </div>
</div>
  		);
  }
}
 
export default Card;