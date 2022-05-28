import React, {FC} from 'react';

type ButtonPropsType ={
    children: string
    callBack?: () => void
    disabled?: boolean
    type?: "button" | "submit" | "reset"
}

export const Button: FC<ButtonPropsType> = ({
                                         children,
                                         callBack,
                                         disabled,
                                         type,
                                     } ) => {



    return (
        <>
            <button type={type} disabled={disabled} onClick={callBack}>{children}</button>
        </>
    );
};

