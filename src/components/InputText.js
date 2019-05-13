import React from 'react';

const InputText = (props) => (
	<div class="grid-autofill">{props.label}: <input type='text' name={props.name} /></div>
);

export default InputText;