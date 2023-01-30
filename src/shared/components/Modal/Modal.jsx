import { Component } from 'react';
import { createPortal } from 'react-dom';
import css from '../Modal/Modal.module.css';
const modalRoot = document.querySelector('#modal-root');
class Modal extends Component {
  render() {
    const { children } = this.props;
    return createPortal(
      // перший аргумент - що відмалювати, другим - куди
      <div className={css.overlay}>
        <div className={css.modal}>
          <span className={css.close}>X</span>
          {/* <img src="" alt="" /> */}
          {children}
        </div>
      </div>,
      modalRoot
    );
  }
}
export default Modal;
