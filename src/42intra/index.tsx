import { createRoot } from 'react-dom/client';

import { overrideConsoleLog } from '@/@common/utils/debug';

window.console = overrideConsoleLog as Console;
console.info('welcome to 42IntraDocJP 🎉');
console.info('starting /src/42intra 💥');

const root = createRoot(document.body.appendChild(document.createElement('div')));

root.render(<div>hello</div>);
