import {colors} from '../../styles/Colors';
import {metrics} from '../../styles/Metrics';
import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import {Animated} from 'react-native';
import {
  ErrorLabelStyled,
  InputTextBoxStyled,
  InputTextMaskStyled,
  InputTextStyled,
  LabelStyled,
} from './styles';

function TextInput({
  label,
  value,
  name,
  textType,
  keyboardType,
  changeValue,
  error,
  passwordInput,
  mask,
  autoCapitalize,
  returnFocus,
  returnBlur,
  submit,
  maxLength,
  autoFocus,
  autoCorrect,
  width,
  getRef,
  returnKeyType,
}) {
  const [focused, setFocused] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const [labelAnimation] = useState(new Animated.Value(0));
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  useEffect(() => {
    setInputValue(value);
    changeValue({
      [name]: value,
    });
  }, [value]);

  useEffect(() => {
    Animated.timing(labelAnimation, {
      toValue: focused ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [focused]);

  useEffect(() => {
    if (inputValue !== '') {
      setFocused(true);
    }
    if (passwordInput) {
      // eslint-disable-next-line no-param-reassign
      textType = 'password';
    }
  }, []);

  useEffect(() => {
    if (secureTextEntry === true) {
      // eslint-disable-next-line no-param-reassign
      textType = 'text';
    } else {
      // eslint-disable-next-line no-param-reassign
      textType = 'password';
    }
  }, [secureTextEntry]);

  const labelStyle = {
    color: labelAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [colors.gray4, colors.gray3],
    }),
    padding: metrics.widthPercentageToDP(10),
    fontSize: labelAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [
        metrics.widthPercentageToDP(18),
        metrics.widthPercentageToDP(14),
      ],
    }),
    marginTop: labelAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [
        metrics.widthPercentageToDP(2),
        metrics.widthPercentageToDP(-35),
      ],
    }),
  };

  const onInputFocus = () => {
    setFocused(true);
    returnFocus();
  };
  const onInputBlur = () => {
    if (inputValue === '') {
      setFocused(false);
    }
    returnBlur();
  };

  return (
    <>
      <InputTextBoxStyled width={width} error={error !== ''}>
        <LabelStyled style={labelStyle}>{label}</LabelStyled>
        {mask !== '' ? (
          <>
            <InputTextMaskStyled
              width={width}
              name={name}
              type={mask.type}
              options={mask.options}
              passwordInput={passwordInput}
              secureTextEntry={passwordInput ? secureTextEntry : false}
              textContentType={textType}
              keyboardType={keyboardType}
              autoCapitalize={passwordInput ? 'none' : autoCapitalize}
              onChangeText={text => {
                setInputValue(text);
                changeValue({
                  [name]: text,
                });
              }}
              autoFocus={autoFocus}
              autoCorrect={autoCorrect}
              value={inputValue}
              onFocus={onInputFocus}
              onBlur={onInputBlur}
              maxLength={maxLength}
              onSubmitEditing={() => {
                submit();
              }}
              ref={ref => {
                getRef(ref);
              }}
            />
            {error !== '' && <ErrorLabelStyled>{error}</ErrorLabelStyled>}
          </>
        ) : (
          <>
            <InputTextStyled
              width={width}
              name={name}
              passwordInput={passwordInput}
              secureTextEntry={passwordInput ? secureTextEntry : false}
              textContentType={textType}
              autoCapitalize={passwordInput ? 'none' : autoCapitalize}
              keyboardType={keyboardType}
              onChangeText={text => {
                setInputValue(text);
                changeValue({[name]: text});
              }}
              autoFocus={autoFocus}
              autoCorrect={autoCorrect}
              value={inputValue}
              onFocus={onInputFocus}
              onBlur={onInputBlur}
              returnKeyType={returnKeyType}
              maxLength={maxLength}
              onSubmitEditing={() => {
                submit();
              }}
            />
            {error !== '' && <ErrorLabelStyled>{error}</ErrorLabelStyled>}
          </>
        )}
      </InputTextBoxStyled>
    </>
  );
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  textType: PropTypes.string,
  keyboardType: PropTypes.string,
  changeValue: PropTypes.func,
  error: PropTypes.string,
  passwordInput: PropTypes.bool,
  mask: PropTypes.shape({type: '', options: {}}),
  autoCapitalize: PropTypes.string,
  returnBlur: PropTypes.func,
  returnFocus: PropTypes.func,
  maxLength: PropTypes.number,
  submit: PropTypes.func,
  autoFocus: PropTypes.bool,
  autoCorrect: PropTypes.bool,
  width: PropTypes.string,
  getRef: PropTypes.func,
  returnKeyType: PropTypes.string,
};

TextInput.defaultProps = {
  value: '',
  textType: 'none',
  keyboardType: 'default',
  changeValue: () => {},
  error: '',
  passwordInput: false,
  mask: '',
  autoCapitalize: 'sentences',
  returnBlur: () => {},
  returnFocus: () => {},
  maxLength: 99999,
  submit: () => {},
  autoFocus: true,
  autoCorrect: false,
  width: '',
  getRef: () => {},
  returnKeyType: 'next',
};

export default TextInput;
