import styled from 'styled-components';
import * as Select from '@radix-ui/react-select';

export const RegisterPageContainer = styled.div`
	height: 100%;
	margin-left: 16rem;
	overflow: hidden;
	overflow-x: hidden;
	min-width: 582.55px;
	padding: 50px 50px 50px 50px;
	:hover {
		overflow-x: auto;
		overflow-y: auto;
	}
	display: flex;
	flex-direction: row;
`;

export const FormContainer = styled.div`
	width: 30rem;
`;

export const Welcome = styled.h1`
	font-size: 30px;
	font-weight: 600;
	line-height: 47px;
	color: var(--textColor500);
`;

export const WelcomeParagraph = styled.p`
	margin-top: 5px;
	margin-bottom: 40px;
	font-size: 17px;
	font-weight: 400;
	line-height: 31px;
	color: var(--textColor300);
`;

export const ImageContainer = styled.div`
	width: 90%;
	margin-left: 5%;
	height: auto;
	@media (max-width: 1366px) {
		//margin-left: 7rem;
	}
	@media (max-width: 1280px) {
		//height: 8rem;
	}
	@media (max-width: 1150px) {
		//height: 7rem;
	}
	@media (max-width: 1080px) {
		//width: 100%;
		//min-width: 484px;
	}
`;

export const ImagePerson = styled.img`
	max-width: 30rem;
	min-width: 15rem;
	width: 100%;
	height: width;
	margin-top: 0px;
	@media (max-width: 1366px) {
		//margin-left: 7rem;
	}
	@media (max-width: 1280px) {
		//height: 8rem;
	}
	@media (max-width: 1150px) {
		//height: 7rem;
	}
	@media (max-width: 1080px) {
		//width: 100%;
		//min-width: 484px;
	}
`;

export const StyledTrigger = styled(Select.SelectTrigger)`
	width: 12rem;
	background-color: var(--background);
	color: var(--textColor300);
	display: inline-flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 20px;
	padding: 10px;
	font-size: 16px;
	outline: none;
	border: none;
	border-radius: 5px;
	transition: 0.3s;
`;

export const StyledContent = styled(Select.Content)`
	overflow: hidden;
	background-color: var(--background);
	border-radius: 6px;
	padding: 5px;
`;

export const StyledItem = styled(Select.Item)`
	all: unset;
	font-size: 14px;
	line-height: 1.5;
	color: var(--textColor500);
	border: none;
	border-radius: 3px;
	display: flex;
	align-items: center;
	height: 25px;
	padding: 0 35px 0 5px;
	position: relative;

	&:focus {
		background-color: var(--primaryColorHover);
		color: var(--background);
		cursor: pointer;
	}
`;

export const ContentRowLabels = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

export const ContentButtons = styled.div`
	display: flex;
	justify-content: end;
`;
