import { Dimensions,PixelRatio } from "react-native";

const { width} = Dimensions.get('window')

const figmaWidth = 430;

const px = (valuePx) => {
    const widthPercent = (valuePx / figmaWidth) * 100
    const screensPixel = PixelRatio.roundToNearestPixel(
        (width * parseFloat(widthPercent))/100
    )
    return screensPixel
}

export const metrics = {
    px,
}