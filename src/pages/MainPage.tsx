import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../components/ui/Button';
import Chart from '../components/Chart';
import useMockData from '../hooks/useMockData';
import { TChart, TTagBtnStates } from '../types/chartTypes';

const MainPage = () => {
  const [mockData, indexesFindId, setIndexesFindId] = useMockData();

  const { labels, ids, areas, bars, tags, tagBtnStates }: TChart = mockData;

  const [searchParams, setSearchParams] = useSearchParams();

  const onClickTag = (id: string) => {
    const all = ids.map((item: string, index: number) => {
      return index;
    });

    tagBtnStates.map(item => {
      if (item.tag === id) item.isOn = !item.isOn;
    });

    const isOnTags = tagBtnStates
      .filter(item => item.isOn === true)
      .map(item => item.tag);

    if (isOnTags.length !== 0) {
      const findIndexes = ids
        .map((item: string, index: number) => {
          return isOnTags.includes(item) ? index : -1;
        })
        .filter((mapItem: number) => mapItem !== -1);
      setIndexesFindId(findIndexes);
    } else {
      setIndexesFindId(all);
      tagBtnStates.map(item => {
        item.isOn = true;
      });
    }

    setSearchParams({ id });
  };

  return (
    <StMainWrap>
      <StChartWrap>
        <Chart
          labels={labels}
          ids={ids}
          areas={areas}
          bars={bars}
          findIdx={indexesFindId}
          onClickTag={onClickTag}
        />
      </StChartWrap>
      <StTagWrap>
        {tagBtnStates.map(({ tag, isOn }: TTagBtnStates) => (
          <Button
            key={tag}
            text={tag}
            onClick={() => onClickTag(tag)}
            isOn={isOn}
          />
        ))}
      </StTagWrap>
    </StMainWrap>
  );
};

export default MainPage;

const StMainWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StChartWrap = styled.div`
  width: 100%;
  height: 60%;
`;

const StTagWrap = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
