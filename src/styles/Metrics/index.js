import {Dimensions, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('screen');

export const metrics = {
  baseMargin: 10,
  basePadding: 20,
  baseRadius: 3,
  getheight: height * 0.7,
  getwidth: width * 0.7,
  widthPercentageToDP: widthPx => {
    const widthPercetage = (widthPx * 100) / 360;
    return PixelRatio.roundToNearestPixel(
      (width * parseFloat(widthPercetage)) / 100,
    );
  },
};
