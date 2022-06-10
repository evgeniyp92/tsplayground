import { OutputTarget } from '../Summary';
import fs from 'fs';

export class HTMLReport implements OutputTarget {
  constructor(public outputFileName: string) {}

  public print(report: string): void {
    const html = `
			<div>
				<h1>Analysis Output</h1>
				<div>${report}</div>
			</div>
		`;

    fs.writeFileSync(this.outputFileName, html);
  }
}
