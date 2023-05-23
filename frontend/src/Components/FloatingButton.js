import { FloatButton } from 'antd';
import {CommentOutlined, EditOutlined, QuestionOutlined} from "@ant-design/icons"
import styles from "./FloatingButton.module.css"

function FloatingButton () {
  return (
    <div>
    {/* <FloatButton.Group  */}
    {/* icon={<QuestionOutlined style={{ color: '#009AAB' }}/>} 
    style={{right:80, backgroundColor:"#009AAB", color:"pink"}} 
    shape="square"
    tooltip="chat"
    trigger='hover'
    > */}
    <FloatButton 
    icon={<CommentOutlined style={{ color: 'green' }} />}
    style={{right:80}} 
    shape="circle"
    tooltip="Chat with Chat GPT"
    />
    {/* <FloatButton 
    icon={<EditOutlined/>} 
    style={{backgroundColor:"#009AAB", color:"#009AAB"}} 
    shape="circle"
    tooltip="Share Feedback!"
    /> */}
    {/* </FloatButton.Group> */}

  </div>
  );

}

export default FloatingButton;
