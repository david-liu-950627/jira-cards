import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  position: relative;
  margin-bottom: 40px;
  height: calc(50vh - 40px);
  box-sizing: border-box;
  flex: 0 0 50%;
  border-left: 12px solid black;
  padding: 0 16px;
  cursor: pointer;

  &:nth-child(4n+1), &:nth-child(4n+3) {
    &:before {
      content: "";
      position: absolute;
      height: calc(100% + 34px);
      top: -20px;
      right: 8px;
      border-right: 2px dashed #000;
    }
  }

  &:nth-child(4n+1), &:nth-child(4n+2) {
    &:after {
      content: "";
      position: absolute;
      width: calc(100% + 4px);
      bottom: -20px;
      left: -12px;
      border-bottom: 2px dashed #000;
    }
  }

  h3 {
    font-size: 18px;
    font-weight: normal;
  }
  
  h2 {
    height: 24px;
  }
  
  span.assignee {
    display: inline-block;
    position: absolute;
    right: 20px;
    bottom: 10px;
  }

  &.un-checked {
    position: relative;
    opacity: 0.3;

    &:nth-child(4n+2), &:nth-child(4n+3) {
      &:after {
        content: "";
        position: absolute;
        width: calc(100% + 4px);
        bottom: -20px;
        left: -12px;
        border-bottom: 2px dashed #000;
      }
    }
  }
`

const Card = (props) => {
  const {
    title,
    taskId,
    storyPoints,
    assignee,
    checked,
    handleCheck,
    className,
  } = props;
  const CardClassName = [
    'card',
    !checked && 'un-checked',
    className
  ].filter(Boolean).join(' ');

  return (
    <CardContainer
      className={CardClassName}
      onClick={() => handleCheck(taskId)}
    >
      <h3>{taskId}</h3>
      <h2>({storyPoints || ' '}) {title}</h2>
      <span className="assignee">{assignee}</span>
    </CardContainer>
  )
};
export default Card;
