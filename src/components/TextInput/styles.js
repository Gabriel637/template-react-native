import {colors} from '../../styles/Colors';
import {metrics} from '../../styles/Metrics';
import {Animated} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import styled, {css} from 'styled-components/native';

export const InputTextBoxStyled = styled.View`
  height: ${metrics.widthPercentageToDP(40)}px;
  width: ${({width}) => width || `${metrics.widthPercentageToDP(328)}px`};
  background: ${colors.white};
  border: 1px solid ${colors.gray5};
  border-radius: 6px;
  background-color: #fff;

  ${({error}) =>
    error &&
    css`
      border: ${colors.danger};
    `}
`;

export const LabelStyled = styled(Animated.Text)`
  position: absolute;
`;

export const ErrorLabelStyled = styled.Text`
  width: ${({width}) => width || `${metrics.widthPercentageToDP(328)}px`};
  font-size: ${metrics.widthPercentageToDP(14)}px;
  color: ${colors.danger};
  padding: ${metrics.widthPercentageToDP(5)}px;
`;

export const InputTextStyled = styled.TextInput`
  border: none;
  height: ${metrics.widthPercentageToDP(40)}px;
  width: ${({passwordInput}) =>
    passwordInput
      ? `${metrics.widthPercentageToDP(328)}px`
      : // eslint-disable-next-line no-unused-vars
        ({width}) => `100%` || `${metrics.widthPercentageToDP(328)}px`};
  font-size: ${metrics.widthPercentageToDP(18)}px;

  padding: 0 ${metrics.widthPercentageToDP(15)}px;
  position: relative;
  color: #000;
`;

export const InputTextMaskStyled = styled(TextInputMask)`
  border: none;
  height: ${metrics.widthPercentageToDP(50)}px;
  width: ${({passwordInput}) =>
    passwordInput
      ? `${metrics.widthPercentageToDP(328)}px`
      : // eslint-disable-next-line no-unused-vars
        ({width}) => `100%` || `${metrics.widthPercentageToDP(328)}px`};
  font-size: ${metrics.widthPercentageToDP(18)}px;
  padding: 0 ${metrics.widthPercentageToDP(15)}px;
  color: #000;
  ${({error}) =>
    error &&
    css`
      border-color: ${colors.danger};
    `}
  position: relative;
`;

export const EyeIconStyled = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  padding: ${metrics.widthPercentageToDP(15)}px;
`;
