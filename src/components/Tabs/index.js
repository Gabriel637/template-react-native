import {PropTypes} from 'prop-types';
import React from 'react';
import {TabsBox, MenuIconBox, TextIcon} from './styles';
import {MaterialCommunityIcons as Icon} from '../../styles/LoadFonts';
import {colors} from '../../styles/Colors';
import {metrics} from '../../styles/Metrics';

function Tabs() {
  const icons = [
    {
      name: 'home',
      text: 'home',
    },
    {
      name: 'book-multiple',
      text: 'my books',
      handler: () => alert(1),
    },
    {
      name: 'pencil',
      text: 'write',
      handler: () => alert(1),
    },
  ];
  return (
    <>
      <TabsBox>
        {icons.map(icon => (
          <MenuIconBox>
            <Icon
              name={icon.name}
              size={metrics.widthPercentageToDP(40)}
              color={icon.color ? icon.color : colors.gray3}
              onPress={icon.handler ? icon.handler : null}
            />
            <TextIcon>{icon.text}</TextIcon>
          </MenuIconBox>
        ))}
      </TabsBox>
    </>
  );
}

Tabs.propTypes = {};

Tabs.defaultProps = {};

export default Tabs;
