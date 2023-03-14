import { Button, Popover } from "antd";
import React from "react";

export const defaultRenderer = (text) => text;

export const listRenderer = (text = []) =>
  text.map((val) => (
    <p key={val}>
      <span>{val}</span>
    </p>
  ));

export const objRenderer = (text = {}) =>
  Object.keys(text).map((key) => (
    <p key={key}>
      <strong>{key}</strong>: {text[key]}
    </p>
  ));

export const listPopoverRenderer = (text = []) => (
  <Popover content={listRenderer(text)} title="Title" trigger="click">
    <Button type="link">View</Button>
  </Popover>
);

export const renderer = (type, text) => {
  return {
    default: defaultRenderer,
    list: listRenderer,
    obj: objRenderer,
    listPopover: listPopoverRenderer
  }[type](text);
};
