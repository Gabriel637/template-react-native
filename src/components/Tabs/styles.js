import {colors} from '../../styles/Colors';
import {metrics} from '../../styles/Metrics';
import styled from 'styled-components/native';

export const TabsBox = styled.View`
  padding: ${metrics.widthPercentageToDP(10)}px;
  height: ${metrics.widthPercentageToDP(90)}px;
  flex-direction: row;
  justify-content: space-around;
`;

export const MenuIconBox = styled.View`
  height: ${metrics.widthPercentageToDP(70)}px;
  width: ${metrics.widthPercentageToDP(60)}px;
  align-items: center;
  justify-content: center;
`;

export const TextIcon = styled.Text`
  color: ${colors.gray1};
`;
