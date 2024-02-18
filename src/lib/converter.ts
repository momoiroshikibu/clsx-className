/**
 * split the class name with space and convert it to the argument format of clsx
 * @param text
 */
export const convertClassName = (text: string) =>
  text.replace(/className=\{?"([^"}]*)"\}?/g, (match, classNames: string) => {
    // クラス名をスペースで分割し、clsxの引数形式に変換
    const clsxArgs = classNames
      .split(/\s+/)
      .map((className) => `"${className}"`)
      .join(", ");
    return `className={clsx(${clsxArgs})}`;
  });
