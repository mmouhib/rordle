import styled from 'styled-components';

const StyledBox = styled.div`
	border: 2px solid #a1a1a1;
	color: lightgrey;
	font-family: sans-serif;
	width: 50px;
	height: 50px;
	font-size: 2.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 7px;
	font-weight: bolder;
	cursor: pointer;
	//border-radius: 5px;
`;

export default function Block() {
	return <StyledBox></StyledBox>;
}
