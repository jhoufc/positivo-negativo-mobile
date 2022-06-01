import { ToastPosition, ToastProps, ToastType } from "react-native-toast-message";
import { Toast } from "react-native-toast-message/lib/src/Toast";

export type ToastConfigParams ={
    type: ToastType;
    text1?: string;
    text2?: string;
}

export default function Alert({...rest}: ToastConfigParams){
    
        Toast.show({
            visibilityTime: 2500,
            ...rest
        });
    
}