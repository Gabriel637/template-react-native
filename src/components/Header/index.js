import React from 'react';
import TextInput from '../TextInput';
import {HeaderBox, SearchBox} from './styles';

function Header({}) {
  return (
    <>
      <HeaderBox>
        <SearchBox>
          <TextInput label={'Pesquisar'} />
        </SearchBox>
      </HeaderBox>
    </>
  );
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
