import React from 'react';
import { FloatButton } from 'antd';
import { CommentOutlined, EditOutlined, QuestionOutlined } from "@ant-design/icons"
import styles from "./FloatingButton.module.css"

// I used ant design to make the floating buttons. 
const FloatingButton = ({ showMarkerButton }) =>  {
  return (
    <div>
      {/* The FloatButton.group, groups the buttons underneath it */}
      <FloatButton.Group 
        icon={<QuestionOutlined style={{ color: '#009AAB' }}/>} 
        style={{right:80}} 
        shape="circle"
        tooltip="chat"
        trigger='hover'
      >
        <FloatButton 
          icon={<CommentOutlined style={{ color: 'green' }} />}
          shape="circle"
          tooltip="Chat with Chat GPT"
        />
        <FloatButton 
          onClick={showMarkerButton}
          icon={<EditOutlined style={{ color: 'green' }} />} 
          style={{color:"#009AAB"}} 
          shape="circle"
          tooltip="Share Feedback!"
        />
      </FloatButton.Group>
    </div>
  );
}

export default FloatingButton;
