import React from 'react';
import classnames from 'classnames';
import FieldWrapperterms from './FieldWrapperterms';

const InputField = (props) => {
	const { input, label, type, reverse, ...rest } = props;

	return (
		<FieldWrapperterms
			field-valid = {false} 
			hideUnderline={true}
			className={classnames('checkfield-wrapper', 'd-flex', 'flex-column')}
			type={type}
			{...rest}
		>
			<div
				className={classnames(
					'checkfield-input-wrapper',
					'd-flex',
					reverse ? 'flex-row-reverse' : ''
				)}
			>
				<input type={type} {...input} className="checkfield-input" />
				<div className="checkfield-label field-label">{label}</div>
			</div>
		</FieldWrapperterms>
	);
};

export default InputField;
