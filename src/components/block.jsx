import styled from 'styled-components';

const StyledBox = styled.div`
	border: 2px solid lightgrey;
	color: lightgrey;
	font-family: sans-serif;
	width: 50px;
	height: 50px;
	font-size: 2.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 5px;
`;

export default function () {
	return <StyledBox>A</StyledBox>;
}
