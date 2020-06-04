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
      name: 'book-open-variant',
      text: 'my books',
      handler: () => alert(1),
    },
    {
      name: 'cart',
      text: 'store',
      handler: () => alert(1),
    },
    {
      name: 'pencil',
      text: 'write',
      handler: () => alert(1),
    },
    {
      name: 'settings',
      text: 'settings',
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
              size={metrics.widthPercentageToDP(30)}
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
