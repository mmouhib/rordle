import styled from 'styled-components';
import Key from './keyboard.key';

const StyledKeyboard = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	flex-wrap: wrap;
	width: 50%;
`;

export default function Keyboard() {
	let alphabet = [];
	for (let i = 65; i <= 90; i++) {
		alphabet.push(String.fromCharCode(i));
	}
	return (
		<StyledKeyboard>
			{alphabet.map((element, index) => {
				return <Key value={element} />;
			})}
			<Key value='DD' />
			<Key value='EE' />
		</StyledKeyboard>
	);
}
