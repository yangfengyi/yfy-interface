import Button from '@components/ui/Button';
import { useImmer } from '@hooks/useImmer';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

export default function HomePage() {
  const [value, setValue] = useState('');
  const [data, setData] = useImmer({ a: 1 });

  return (
    <>
      {/* 这个只会在前端当中生效 */}
      <Helmet>
        <title>🍎🍎🍎 杨风移的spa架构</title>
      </Helmet>
      <div className="text-[#1c1]">
        <h2>test 1231231</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>

        <input type="text" value={value} onChange={e => setValue(e.target.value)} />

        <Button
          // NOTE: 使用 useImmer 更新，当a不发生变化的时候，这个状态不会发生变化
          onClick={() =>
            setData(darft => {
              darft.a = 1;
            })
          }
        >
          Update
        </Button>
      </div>
    </>
  );
}
