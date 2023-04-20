import React from 'react';
import { NavLink } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';
import { MenuAuth } from '../LoginRegister/Auth';

function MenuList({ isLoggedIn }) {
  const userId = localStorage.getItem('userId');
  const paths = MenuAuth(isLoggedIn, userId);

  return (
    <ListGroup variant="flush" className="d-none d-md-block">
      <ListGroup.Item action as={NavLink} to={paths.home} className="nav-item">
        HOME
      </ListGroup.Item>
      <ListGroup.Item action as={NavLink} to={paths.AddDoctor} className="nav-item">
        ADD DOCTOR
      </ListGroup.Item>
    </ListGroup>
  );
}

MenuList.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default MenuList;