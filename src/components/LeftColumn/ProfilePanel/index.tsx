import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img
          src="https://avatars3.githubusercontent.com/u/1292594?s=460&u=0b1bfb0fc81256c59dc33f31ce344231bd5a5286&v=4"
          alt="Avatar"
          className="profile-picture"
        />
        <h1>Elton Santos</h1>
        <h2>Web Developer @Cagece</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Quem viu seu perfil</span>
          <span className="value">1.558</span>
        </div>
        <div className="key-value">
          <span className="key">Viram sua publicação</span>
          <span className="value">388</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
