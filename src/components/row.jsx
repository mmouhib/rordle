import Block from './block';
import styled from 'styled-components';

const StyledRow = styled.div`
	display: flex;
`;

export default function Row() {
	return (
		<StyledRow>
			<Block />
			<Block />
			<Block />
			<Block />
			<Block />
			<Block />
		</StyledRow>
	);
}
