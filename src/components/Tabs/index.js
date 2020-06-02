import {PropTypes} from 'prop-types';
import React from 'react';
import {TabsBox, MenuIconBox, SearchBox} from './styles';
import {Icon} from 'react-native-elements';

function Tabs({texts, textsInfo, color, textsColor}) {
  return (
    <>
      <TabsBox>
        <MenuIconBox>
          <Icon raised name="home" color="#f50" />
        </MenuIconBox>
        <MenuIconBox></MenuIconBox>
        <MenuIconBox></MenuIconBox>
      </TabsBox>
    </>
  );
}

Tabs.propTypes = {
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

Tabs.defaultProps = {
  navigation: {},
  textsInfo: {},
  color: '',
  textsColor: '',
};

export default Tabs;
