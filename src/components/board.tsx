import Row from './row';
import styled from 'styled-components';

const StyledBoard = styled.div`
display: flex;
	flex-direction: column;
  //gap: 0;
`;


export default function Board() {
	return (
		<StyledBoard>
			<Row />
			<Row />
			<Row />
			<Row />
			<Row />
			<Row />
		</StyledBoard>
	);
}
