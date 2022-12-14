import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, Input, Row, Col} from 'antd';
import 'antd/dist/antd.css'
import UserProfile from '../components/UserProfile'
import LoginForm from '../components/LoginForm'
import styled from 'styled-components';

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;


const AppLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <Menu mode='horizontal'>
        <Menu.Item>
          <Link href="/"><a>노드버드</a></Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile"><a>프로필</a></Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput enterButton />
          
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup"><a>회원가입</a></Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn? <UserProfile setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="www.naver.com" target="_blank" rel="noreferrer noopener">Made by JeongEun</a>
        </Col>
      </Row>
    </div>
  )

}  

AppLayout.PropTypes = {
  children: PropTypes.node.isRequired,
}

export default AppLayout