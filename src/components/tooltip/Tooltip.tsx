import React from 'react';
import styles from './Tooltip.module.scss';

type Props = {
  isVisible: boolean;
  showTooltip?: boolean;
  text: string;
  children: JSX.Element;
};
export const Tooltip: React.FC<Props> = ({
  isVisible,
  showTooltip = true,
  text,
  children,
}) => {
  return isVisible ? (
    <div className={styles.tooltipContainer}>
      <div className={styles.tooltip}>{children}</div>
      {showTooltip && (
        <div className={styles.tooltipText}>
          <p>{text}</p>
        </div>
      )}
    </div>
  ) : (
    children
  );
};

export default Tooltip;
