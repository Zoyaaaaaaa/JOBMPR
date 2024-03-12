import React from 'react'
import {Space,Spin} from "antd"
function Loader() {
  return (
    <div>
     <Space size="middle">
        <Spin size="large">Please wait ..</Spin>
     </Space>
    </div>
  )
}

export default Loader
