import { forwardRef } from "react";

const Input = forwardRef(function (props, ref) {
  return (
    <>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} ref={ref} />
    </>
  );
});

export default Input;
