import styled from 'styled-components';

const StyledKey = styled.button`
	width: 50px;
	height: 65px;
	border: 2px solid white;
	border-radius: 15px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: bolder;
	color: black;
	background-color: white;
	font-size: 2rem;
	cursor: pointer;

	&:hover {
		background-color: #cbcbcb;
	}
`;

export default function KeyboardKey() {
	return <StyledKey>P</StyledKey>;
}
