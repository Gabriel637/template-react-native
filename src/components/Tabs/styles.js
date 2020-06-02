import {colors} from '../../styles/Colors';
import {metrics} from '../../styles/Metrics';
import styled, {css} from 'styled-components/native';

export const TabsBox = styled.View`
  padding: ${metrics.widthPercentageToDP(10)}px;
  height: ${metrics.widthPercentageToDP(90)}px;
  background: blue;
  flex-direction: row;
  justify-content: space-around;
`;

export const MenuIconBox = styled.View`
  height: ${metrics.widthPercentageToDP(70)}px;
  width: ${metrics.widthPercentageToDP(60)}px;
  background: yellow;
`;
