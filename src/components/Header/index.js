import React from 'react';
import {PropTypes} from 'prop-types';
import TextInput from '../TextInput';
import {HeaderBox, MenuIconBox, SearchBox} from './styles';

function Header({texts, textsInfo, color, textsColor}) {
  return (
    <>
      <HeaderBox>
        <SearchBox>
          <TextInput />
        </SearchBox>
      </HeaderBox>
    </>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({}),
  texts: PropTypes.shape([
    {
      text: PropTypes.string,
      breakLine: PropTypes.bool,
    },
  ]).isRequired,
  textsInfo: PropTypes.shape({
    length: PropTypes.func,
    map: PropTypes.func,
  }),
  color: PropTypes.string,
  textsColor: PropTypes.string,
};

Header.defaultProps = {
  navigation: {},
  textsInfo: {},
  color: '',
  textsColor: '',
};

export default Header;
