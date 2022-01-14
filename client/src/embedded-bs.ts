export function isInsideBS(documentText: string, bsSource: string, pos: number){
  bsSource = bsSource.trim();
  let startBS = documentText.indexOf(bsSource);
  let endBS = startBS + bsSource.length;
  if(pos >= startBS && pos <= endBS){
    return true;
  }

  return false;
}

export function getBSVirtualContent(documentText: string, bsSource: string): string {
  bsSource = bsSource.trim();
  let startBS = documentText.indexOf(bsSource);
  let endBS = startBS + bsSource.length;
	let content = documentText
		.split('\n')
		.map(line => {
			return ' '.repeat(line.length);
		}).join('\n');

  content = content.slice(0, startBS) + documentText.slice(startBS, endBS) + content.slice(endBS);

  return content;
}