import { wordList } from './static/words';
import { createGlobalStyle } from 'styled-components';
import Block from './components/block';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    background-color: #121213;
		display: flex;
    align-items: center;
    justify-content: center;
  }
	
	
  
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

const StyledBoard = styled.div`
	display: flex;
`;

function App() {
	return (
		<StyledBoard>
			<GlobalStyle />
			<Block></Block>
			<Block></Block>
			<Block></Block>
			<Block></Block>
			<Block></Block>
			<Block></Block>
		</StyledBoard>
	);
}

export default App;
