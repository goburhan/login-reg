import React from 'react';
import renderFields from './factoryFields';
import { Button } from '../';
import { getErrorLocalized } from '../../utils/errors';
import "./index.css"
import { isMobile } from 'react-device-detect';
import { BottomLinks } from 'containers/Signup';

const Form = (props) => {
	const {
		handleSubmit,
		submitting,
		// pristine,
		error,
		valid,
		formFields,
		buttonLabel,
	} = props;
	
	return (
		<form onSubmit={handleSubmit} autoComplete="off" className="w-100">
			<div className="w-100 " >
				{renderFields(formFields)}
				{error && (
					<div className="warning_text error_text ">
						{getErrorLocalized(error)}
					</div>
				)}
			</div>
			<Button label={buttonLabel} />
			{!isMobile && <BottomLinks />}
		</form>
	);
};

export default Form;
