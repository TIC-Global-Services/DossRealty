import clsx from "clsx";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;

  /**
   * Disable horizontal padding
   * @default false
   */
  disablePaddingX?: boolean;

  /**
   * Disable vertical padding
   * @default false
   */
  disablePaddingY?: boolean;

  /**
   * Horizontal padding
   * @default "px-6 md:px-14"
   */
  paddingX?: string;

  /**
   * Vertical padding
   * @default "py-8 md:py-10"
   */
  paddingY?: string;

  /**
   * Max width
   * @default "max-w-[1440px]"
   */
  maxWidth?: string;
}

const ContainerLayout = ({
  children,
  className,
  disablePaddingX = false,
  disablePaddingY = false,
  paddingX = "px-6 md:px-14",
  paddingY = "py-8 md:py-10",
  maxWidth = "max-w-[1440px]",
}: ContainerProps) => {
  return (
    <div
      className={clsx(
        "mx-auto w-full",
        maxWidth,
        !disablePaddingX && paddingX,
        !disablePaddingY && paddingY,
        className
      )}
    >
      {children}
    </div>
  );
};

export default ContainerLayout;