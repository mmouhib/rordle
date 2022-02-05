import styled from 'styled-components';

const StyledKey = styled.button`
	/* width: 50px; */
	width: 45px;
	height: 55px;
	border: 2px solid white;
	border-radius: 5px;
	font-weight: bold;
	color: rgb(0, 0, 0);
	background-color: lightgrey;
	font-size: 2rem;
	cursor: pointer;
	//flex
	display: flex;
	align-items: center;
	justify-content: center;
	/* flex: 1 1 15%; */

	&:hover {
		background-color: #a8a8a8;
	}
`;

interface props {
	value: String;
}

export default function KeyboardKey(props: props) {
	return <StyledKey>{props.value}</StyledKey>;
}
