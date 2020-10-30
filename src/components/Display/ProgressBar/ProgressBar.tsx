
import React from 'react';
import styles from './ProgressBar.module.scss';

export type ProgressBarProps = {
  /** The current value. Should be between 0 and maxValue. */
  value: number
  /** The maximum value for this progress bar. Should be non-negative.
   * @default 100
   */
  maxValue?: number
}

/** A simple progress bar. */

export const ProgressBar: React.FC<ProgressBarProps> = props => {
  const maxValue = props.maxValue ?? 100;
  const progStyle: React.CSSProperties = {
    width: `${props.value / maxValue * 100}%`
  }

  return <div className={styles.progressBar}>
    <div style={progStyle}></div>
  </div>
}