/// <reference types="react" />
import { PinResultStatus } from "./src/utils";
import * as React from "react";
import { StyleProp, ViewStyle, TextStyle } from "react-native";
export declare type IProps = {
    alphabetCharsVisible?: boolean;
    bottomLeftComponent?: any;
    buttonComponentLockedPage?: any;
    buttonDeleteComponent?: any;
    buttonDeleteText?: string;
    buttonNumberComponent?: any;
    bottomComponent?: any;
    callbackErrorTouchId?: (error: Error) => void;
    colorCircleButtons?: string;
    colorPassword?: string;
    colorPasswordEmpty?: string;
    colorPasswordError?: string;
    customBackSpaceIcon?: any;
    disableLockScreen?: boolean;
    endProcessFunction?: (pinCode: string) => void;
    finishProcess?: (pinCode?: string) => void;
    getCurrentPinLength?: (length: number) => void;
    handleResultEnterPin?: any;
    headerComponent?: any;
    iconComponentLockedPage?: any;
    iconButtonDeleteDisabled?: boolean;
    lockedIconComponent?: any;
    lockedPage?: any;
    maxAttempts?: number;
    numbersButtonOverlayColor?: string;
    onClickButtonLockedPage?: any;
    onFail?: any;
    passwordComponent?: any;
    passwordLength?: number;
    pinAttemptsAsyncStorageName?: string;
    pinCodeKeychainName?: string;
    pinCodeVisible?: boolean;
    pinStatus?: PinResultStatus;
    status: "choose" | "enter" | "locked";
    storedPin?: string;
    storePin?: any;
    styleAlphabet?: StyleProp<TextStyle>;
    styleMainContainer?: StyleProp<ViewStyle>;
    stylePinCodeChooseContainer?: StyleProp<ViewStyle>;
    stylePinCodeEnterContainer?: StyleProp<ViewStyle>;
    styleLockScreenButton?: StyleProp<ViewStyle>;
    styleLockScreenColorIcon?: string;
    styleLockScreenMainContainer?: StyleProp<ViewStyle>;
    styleLockScreenNameIcon?: string;
    styleLockScreenSizeIcon?: number;
    styleLockScreenText?: StyleProp<TextStyle>;
    styleLockScreenTextButton?: StyleProp<TextStyle>;
    styleLockScreenTextTimer?: StyleProp<TextStyle>;
    styleLockScreenTitle?: StyleProp<TextStyle>;
    styleLockScreenViewCloseButton?: StyleProp<ViewStyle>;
    styleLockScreenViewIcon?: StyleProp<ViewStyle>;
    styleLockScreenViewTextLock?: StyleProp<ViewStyle>;
    styleLockScreenViewTimer?: StyleProp<ViewStyle>;
    stylePinCodeButtonCircle?: StyleProp<ViewStyle>;
    stylePinCodeButtonNumber?: string;
    stylePinCodeButtonNumberPressed?: string;
    stylePinCodeCircle?: StyleProp<ViewStyle>;
    stylePinCodeColorSubtitle?: string;
    stylePinCodeColorSubtitleError?: string;
    stylePinCodeColorTitle?: string;
    stylePinCodeColorTitleError?: string;
    stylePinCodeColumnButtons?: StyleProp<ViewStyle>;
    stylePinCodeColumnDeleteButton?: StyleProp<ViewStyle>;
    stylePinCodeDeleteButtonColorHideUnderlay?: string;
    stylePinCodeDeleteButtonColorShowUnderlay?: string;
    stylePinCodeDeleteButtonIcon?: string;
    stylePinCodeDeleteButtonSize?: number;
    stylePinCodeDeleteButtonText?: StyleProp<TextStyle>;
    stylePinCodeEmptyColumn?: StyleProp<ViewStyle>;
    stylePinCodeHiddenPasswordCircle?: StyleProp<ViewStyle>;
    stylePinCodeHiddenPasswordSizeEmpty?: number;
    stylePinCodeHiddenPasswordSizeFull?: number;
    stylePinCodeMainContainer?: StyleProp<ViewStyle>;
    stylePinCodeRowButtons?: StyleProp<ViewStyle>;
    stylePinCodeTextButtonCircle?: StyleProp<TextStyle>;
    stylePinCodeTextSubtitle?: StyleProp<TextStyle>;
    stylePinCodeTextTitle?: StyleProp<TextStyle>;
    stylePinCodeViewTitle?: StyleProp<TextStyle>;
    subtitleChoose?: string;
    subtitleComponent?: any;
    subtitleConfirm?: string;
    subtitleEnter?: string;
    subtitleError?: string;
    textButtonLockedPage?: string;
    textCancelButtonTouchID?: string;
    textDescriptionLockedPage?: string;
    textSubDescriptionLockedPage?: string;
    textPasswordVisibleFamily?: string;
    textPasswordVisibleSize?: number;
    textTitleLockedPage?: string;
    timeLocked?: number;
    timePinLockedAsyncStorageName?: string;
    timerComponentLockedPage?: any;
    titleAttemptFailed?: string;
    titleChoose?: string;
    titleComponent?: any;
    titleComponentLockedPage?: any;
    titleConfirm?: string;
    titleConfirmFailed?: string;
    titleEnter?: string;
    titleValidationFailed?: string;
    touchIDDisabled?: boolean;
    touchIDSentence?: string;
    touchIDTitle?: string;
    validationRegex?: RegExp;
    passcodeFallback?: boolean;
    vibrationEnabled?: boolean;
    delayBetweenAttempts?: number;
};
export declare type IState = {
    internalPinStatus: PinResultStatus;
    pinLocked: boolean;
};
declare class PINCode extends React.PureComponent<IProps, IState> {
    static defaultProps: Partial<IProps>;
    constructor(props: IProps);
    changeInternalStatus: (status: PinResultStatus) => void;
    renderLockedPage: () => JSX.Element;
    render(): JSX.Element;
}
export declare function hasUserSetPinCode(serviceName?: string): Promise<boolean>;
export declare function deleteUserPinCode(serviceName?: string): Promise<void>;
export declare function resetPinCodeInternalStates(pinAttempsStorageName?: string, timePinLockedStorageName?: string): Promise<void>;
export default PINCode;
