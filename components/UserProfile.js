import React, { useState, useCallback} from 'react';
import { Card, Avatar, Button } from 'antd';

const UserProfile = ({setIsLoggedIn}) => {
  const onLogOut = useCallback(()=> {
    setIsLoggedIn(false);
  }, [])

  return (
    <Card
      actions={[
        <div key="twit">게시글<br />0</div>,
        <div key="followings">팔로잉<br />0</div>,
        <div key="followers">팔로워<br />0</div>
      ]}
    >
      <Card.Meta
        avatar={<Avatar>ZC</Avatar>}
        title="ZeroCho"
      
      />
    </Card>
  )

}

export default UserProfile;