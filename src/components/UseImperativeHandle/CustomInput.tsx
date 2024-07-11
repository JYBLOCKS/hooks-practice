import {
  ChangeEventHandler,
  forwardRef,
  Ref,
  useImperativeHandle,
  useRef,
} from "react";

export type CustomInputHandle = {
  handleFocusInput: () => void;
};

const CustomInput = (
  props: { onChange: ChangeEventHandler<HTMLInputElement> | undefined },
  ref: Ref<unknown> | undefined
) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(
    ref,
    () => {
      return {
        handleFocusInput: () => {
          inputRef.current?.focus();
        },
      };
    },
    []
  );
  return <input onChange={props.onChange} ref={inputRef} />;
};

export default forwardRef(CustomInput);
