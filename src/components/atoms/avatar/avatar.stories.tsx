import React from 'react';
import Avatar from './avatar';

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
};

export const Default = () => <Avatar src="https://picsum.photos/200" />;
export const Small = () => <Avatar src="https://picsum.photos/200" size="small" />;
export const Large = () => <Avatar src="https://picsum.photos/200" size="large" />;
export const Fallback = () => <Avatar />;