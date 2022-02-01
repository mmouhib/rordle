import styled from 'styled-components';

const StyledTopBar = styled.div`
	text-transform: uppercase;
	color: white;
	font-size: 5rem;

	text-align: center;
	margin: 30px 0 70px 0;
`;

const StyledHr = styled.hr`
	width: 30vw;
	margin-top: 10px;
`;

export default function TopBar() {
	return (
		<StyledTopBar>
			<p>Wordle</p>
			<StyledHr />
		</StyledTopBar>
	);
}
