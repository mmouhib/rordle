import { wordList } from './static/words';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Topbar from './components/topbar';
import Board from './components/board';

const GlobalStyle = createGlobalStyle`
  body{
    background-color: #121213;
		font-family: sans-serif;
  }
	
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

const StyledBoard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export default function App() {
	return (
		<StyledBoard>
			<GlobalStyle />
			<Topbar />
			<Board />
		</StyledBoard>
	);
}
