import React from 'react';
import { Text, TextInput } from 'react-native';

// inject default font family to `Text` and `TextInput` components
export const setDefaultFontFamily = () => {
	[Text, TextInput].forEach((component) => {
		const oldRender = component.render;
		component.render = function (...args) {
			const origin = oldRender.call(this, ...args);
			return React.cloneElement(origin, {
				style: [
					// { fontFamily: 'Questrial', letterSpacing: 0.1 },
					origin.props.style,
				],
			});
		};
	});
};
