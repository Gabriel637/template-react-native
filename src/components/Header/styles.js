import {metrics} from '../../styles/Metrics';
import styled from 'styled-components/native';

export const HeaderBox = styled.View`
  margin-top: ${metrics.widthPercentageToDP(60)}px;
  padding: ${metrics.widthPercentageToDP(10)}px;
  height: ${metrics.widthPercentageToDP(60)}px;
  flex-direction: row;
  justify-content: space-around;
`;

export const MenuIconBox = styled.View`
  height: ${metrics.widthPercentageToDP(40)}px;
  width: ${metrics.widthPercentageToDP(50)}px;
`;

export const SearchBox = styled.View`
  height: ${metrics.widthPercentageToDP(40)}px;
  width: ${metrics.widthPercentageToDP(328)}px;
  align-items: center;
`;
