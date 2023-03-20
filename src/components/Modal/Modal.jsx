import { Component } from 'react'
import { createPortal } from 'react-dom';
import './Modal.css'

const modalRoot = document.getElementById('modal-root')


export default class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', event => {
            if (event.code === 'Ecape') {
              this.props.onClose()
          }
      })
    }
    

    render() {
        return createPortal(
            <div className="Overlay">
                <div className="Modal">
                    <img src="" alt="" />
                </div>
            </div>, modalRoot)
    }
}

