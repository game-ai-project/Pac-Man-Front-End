import React from 'react';

const ToggleSwitchButton = ({ className, handleChange }) => (
	<div className={className}>
		<input
			id='btn-mode'
			type='checkbox'
			onChange={handleChange}
			ref={this.myRef}
		/>
		<label htmlFor='btn-mode'></label>
	</div>
);

export default ToggleSwitchButton;
