import { useState } from 'react';
import reactLogo from '@assets/react.svg';
import viteLogo from '@assets/vite.svg';
import tampermonkey from '@assets/tampermonkey.svg';
import s_ from '@styles/App.module.less';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://cn.vitejs.dev/guide/" target="_blank">
          <img src={ viteLogo } className={ s_.logo } alt="Vite logo" />
        </a>
        <a href="https://zh-hans.react.dev/" target="_blank">
          <img src={ reactLogo } className={ [s_.logo, s_.react].join(' ') } alt="React logo" />
        </a>
        <a href="https://github.com/lisonge/vite-plugin-monkey/blob/main/README_zh.md" target="_blank">
          <img src={ tampermonkey } className={ [s_.logo, s_.tampermonkey].join(' ') } alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Tampermonkey</h1>
      <div className={ s_.card }>
        <button onClick={() => setCount((count) => count + 1)} className={ s_.button }>
          计数器为 {count}
        </button>
        <p>
          编辑 <code className={ s_.code }>src/main.tsx</code> 并保存以热更新
        </p>
      </div>
      <p className={ s_.readTheDocs }>
        点击图标去学习 Vite & React & Tampermonkey
      </p>
    </>
  );
}

export default App;
