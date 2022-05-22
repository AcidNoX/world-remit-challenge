export const childIsElement = (
  child:
    | string
    | number
    | boolean
    | {}
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactPortal
    | null
    | undefined
): child is React.ReactElement => {
  return !!child && typeof child === "object" && "props" in child;
};
