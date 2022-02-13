import { StyledKey, StyledKeyboard } from "../styled.components/keyboard.styled";
import WordContext from "../context/word";
import { useContext, useEffect } from "react";
import { englishWordList } from "../static/words";

const checkCorrectIndex = (one, two, element) => {
  for (let i = 0; i < one.length; i++) {
    if ((one[i] === two[i]) === element) return true;
  }
  return false;
};

/*
in "differential", we compare the chosen word and the user's word and return an array that contains the results
1 = correct location, 2 = false location, 0 = letter does not exist in the original word
we use "checkCorrectIndex" to check if the current element of the word will have a true index in the future iterations
of the word, if so we will make it false (0) even if it is considered true but in different location (2)
*/
const differential = (one, two) => {
  let results = [];
  let correctIndex = [];
  let wrongIndex = [];
  for (let i = 0; i < one.length; i++) {
    if (one[i] === two[i]) {
      results.push(1);
      correctIndex.push(one[i]);
    } else {
      if (
        !checkCorrectIndex(one, two, one[i]) &&
        two.indexOf(one[i]) !== -1 &&
        correctIndex.indexOf(one[i]) === -1 &&
        wrongIndex.indexOf(one[i]) === -1
      ) {
        wrongIndex.push(one[i]);
        results.push(2);
      } else {
        results.push(0);
      }
    }
  }
  return results;
};

export default function Keyboard() {
  const { word } = useContext(WordContext);
  const { setWord } = useContext(WordContext);
  const { guesses } = useContext(WordContext);
  const { setGuesses } = useContext(WordContext);
  const { row } = useContext(WordContext);
  const { setRow } = useContext(WordContext);
  const { setResult } = useContext(WordContext);
  const { chosenWord } = useContext(WordContext);
  const { wordDiff } = useContext(WordContext);
  const { setWordDiff } = useContext(WordContext);
  const { alertOpen } = useContext(WordContext);
  const { setAlertOpen } = useContext(WordContext);
  const { setAlertValue } = useContext(WordContext);
  const { setModalOpen } = useContext(WordContext);
  const { setModalTitle } = useContext(WordContext);
  const { setModalContent } = useContext(WordContext);

  /*
  the following function is the one responsible for checking the given word's conditions
  it first, checks if the word length is exactly 5, if not it alerts an error and if so,
  it checks if the word is a valid english word by using the word list in ../static/words.js
  if the word is valid it shows the results
  */
  const wordChecker = () => {
    if (word.length < 5) {
      setAlertValue("not a complete word");
      setAlertOpen(true);
    } else if (englishWordList.indexOf(word) === -1) {
      setAlertValue("not a valid word");
      setAlertOpen(true);
    } else if (word.length === 5) {
      setWordDiff(
        wordDiff.map((element, index) => {
          if (index === row) {
            return differential(word, chosenWord);
          }
          return element;
        })
      );

      if (word.toUpperCase() === chosenWord.toUpperCase()) {
        setResult(1);
        setModalTitle("Congrats 🎉");
        setModalContent("You've won the game");
        setModalOpen(true);
        // alert("win");
      } else {
        if (row === 5) {
          setResult(0);
          setModalTitle("Loss");
          setModalContent("You've lost, try again");
          setModalOpen(true);
          // alert("loss");
        }
      }
      setRow(row + 1);
      setWord("");
    }
  };

  useEffect(() => {
    if (word.length > 5) {
      setWord(word.substr(0, 5));
    }
    setGuesses(
      guesses.map((element, index) => {
        if (index === row) {
          return word;
        }
        return element;
      })
    );
  }, [setWord, word]);

  useEffect(() => {
    setTimeout(() => {
      setAlertOpen(false);
    }, 2600);
  }, [alertOpen, setAlertOpen]);

  // prettier-ignore
  let alphabet = ["q", "w", "e", "r", "t", "y", "u", "i",
    "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l",
    "z", "x", "c", "v", "b", "n", "m",
  ];

  return (
    <StyledKeyboard>
      {alphabet.map((element, index) => {
        return (
          <StyledKey
            key={index}
            onClick={() => {
              setWord(word + element);
            }}>
            {element}
          </StyledKey>
        );
      })}
      <StyledKey
        onClick={() => {
          setWord(word.substring(0, word.length - 1));
        }}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9
             2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9
          15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z"
          />
        </svg>
      </StyledKey>

      <StyledKey
        onClick={() => {
          wordChecker();
        }}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
        </svg>
      </StyledKey>
    </StyledKeyboard>
  );
}
