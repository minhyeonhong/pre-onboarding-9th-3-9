import { useEffect, useState } from 'react';
import instance from '../apis/instance';

function useMockData() {

  const [charts, setCharts] = useState<any>({
    labels: [],
    ids: [],
    areas: [],
    bars: [],
    tags: [],
    tagBtnStates: [],
  });

  const [indexesFindId, setIndexesFindId] = useState<number[]>([]);

  useEffect(() => {
    instance
      .get('')
      .then(response => {
        const responseData = response.data.response;

        const labels = Object.keys(responseData) as string[];
        const ids = Object.values(responseData).map(
          (item: any) => item.id as string
        );
        const areas = Object.values(responseData).map(
          (item: any) => item.value_area as number
        );
        const bars = Object.values(responseData).map(
          (item: any) => item.value_bar as number
        );
        const tags = [...new Set(ids)];

        setIndexesFindId(
          ids.map((item, index) => {
            return index;
          })
        );

        setCharts({
          labels,
          ids,
          areas,
          bars,
          tags,
          tagBtnStates:
            tags.map((tag) => {
              return {
                tag,
                isOn: true
              }
            })
        });

      })
      .catch(error => {
        throw error;
      });
  }, []);

  return [charts, indexesFindId, setIndexesFindId];
}

export default useMockData;
