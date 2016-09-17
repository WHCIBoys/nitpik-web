import React from 'react';

import { Modal } from '../modal';
import FontAwesome from 'react-fontawesome';
import Button from '../button';

function LoginModal({ isVisible, onSubmit }) {
  return (
    <Modal testid="login-form" isVisible={ isVisible }>
      <Button className="bg-blue white" onClick={onSubmit}>
        <div className="flex items-center">
          <FontAwesome
            className="fa-facebook-official"
            name="facebookSignIn"
            size="3x"/>
          <div className="mx2 items-center"> Sign in with Facebook! </div>
        </div>
      </Button>
    </Modal>
  );
}

LoginModal.propTypes = {
  isVisible: React.PropTypes.bool,
  isPending: React.PropTypes.bool,
  hasError: React.PropTypes.bool,
  onSubmit: React.PropTypes.func,
};

export default LoginModal;
