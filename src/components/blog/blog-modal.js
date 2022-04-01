import React , {Component} from 'react'
import ReactModal from 'react-modal';



export default class BlogModal extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className='blog-add-btn'>
                <ReactModal 
                    onRequestClose={() => {
                        this.props.handleModalClose();
                    }} 
                    isOpen={this.props.modalIsOpen}
                >
                    <h1>I am a modal now ma</h1>
                </ReactModal>
            </div>

        )
    }
}
