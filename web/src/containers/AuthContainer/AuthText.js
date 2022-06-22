import React from 'react';
import styled from 'styled-components';
import background from './background.png'
export default function AuthText() {

const Autharea = styled.div`
background-image: url(${background});
background-repeat:no-repeat;
position:absolute;
width:1850px;
height:100vh;
img {
	margin-left:50px;
	margin-top:50px;
}
@media (max-width: 700px) {
display:none;
   

}
`
const Comment = styled.text`
color:white;
font-weight: 400;
font-size: 22px;
line-height: 150%;

`
	return (
		<Autharea>
			<img src= "assets/Logo.svg"/>
			<div className="liner">
				{' '}
				.
				<div className="auth-text-container">
					<div className="auth-text">We make crypto clear and simple </div>
					
				</div>
				<div className="liner2">
				{' '}
				.
				<div className="auth-text-container2">
					<div className="auth-text2">Dont miss the race! </div>
					
				</div>
				
				
			</div>
				
				
			</div>
		
		</Autharea>
	);
}
