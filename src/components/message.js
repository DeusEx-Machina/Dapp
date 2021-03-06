import { Icon, message } from 'antd';
import React from 'react';

const iconStyle = {
  marginLeft: '16px',
  color: 'rgba(0, 0, 0, 0.25)',
  cursor: 'pointer'
};

const msgHandlers = {};

function showMessage(type, content, duration) {
  const msgKey = new Date();

  const handleClose = () => {
    // Clean-up and remove the dismiss handler from the object
    delete msgHandlers[msgKey];
  };

  const handleDismiss = () => {
    if(msgHandlers[msgKey]) {
      msgHandlers[msgKey]();

      handleClose();
    }
  };

  const msgBody = (
    <span>
      {content}
      <Icon type="close-circle" onClick={handleDismiss} style={iconStyle} />
    </span>
  );

  // antd's message API returns a function to manually dismiss messages
  const m = message[type](msgBody, duration, handleClose);
  msgHandlers[msgKey] = m;
  return handleDismiss;
}

export default showMessage;
