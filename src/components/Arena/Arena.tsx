import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getRandomBlock } from "../../data/bank";
import { updateCurrentBlock } from "../../redux/slices/process";
import { RootState } from "../../redux/store";
import { UntouchedCharacter } from "./Arena.styles";

interface ArenaProps {}

export const Arena: React.FC<ArenaProps> = ({}) => {
  const currentBlock = useSelector(
    (state: RootState) => state.process.currentBlock
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateCurrentBlock(getRandomBlock()));
  }, []);

  const [segmentedBlock, setSegmentedBlock] = useState<string[]>(
    Array.from(currentBlock)
  );

  return (
    <>
      <h2>Arena</h2>
      {segmentedBlock.map((char, index) => (
        <UntouchedCharacter key={index}>{char}</UntouchedCharacter>
      ))}
    </>
  );
};
