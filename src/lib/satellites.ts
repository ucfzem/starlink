export interface SatelliteRecord {
  norad: number;
  name: string;
  tle1: string;
  tle2: string;
  epoch: Date;
  group: 'iss' | 'starlink' | 'weather' | 'science' | 'other';
}

export const GROUPS: Array<{ id: SatelliteRecord['group']; label: string; color: string }> = [
  { id: 'iss', label: 'ISS & Space Stations', color: '#ff4444' },
  { id: 'starlink', label: 'Starlink', color: '#44ff44' },
  { id: 'weather', label: 'Weather Satellites', color: '#ffaa00' },
  { id: 'science', label: 'Science & Astronomy', color: '#4444ff' },
  { id: 'other', label: 'Other Objects', color: '#aaaaaa' },
];

export function parseTLE(text: string): SatelliteRecord[] {
  const lines = text
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l.length > 0);

  const results: SatelliteRecord[] = [];
  const seenNorad = new Set<number>();

  for (let i = 0; i < lines.length; i++) {
    let name = '';
    let line1 = '';
    let line2 = '';

    if (lines[i].startsWith('1 ') && i + 1 < lines.length && lines[i + 1].startsWith('2 ')) {
      name = `SAT-${lines[i].substring(2, 7).trim()}`;
      line1 = lines[i];
      line2 = lines[i + 1];
      i += 1;
    } else if (
      i + 2 < lines.length &&
      lines[i + 1].startsWith('1 ') &&
      lines[i + 2].startsWith('2 ')
    ) {
      name = lines[i];
      line1 = lines[i + 1];
      line2 = lines[i + 2];
      i += 2;
    } else {
      continue;
    }

    const noradStr = line1.substring(2, 7).trim();
    const norad = parseInt(noradStr, 10);
    if (isNaN(norad) || seenNorad.has(norad)) {
      continue;
    }

    const yearTwoDigit = parseInt(line1.substring(18, 20), 10);
    const dayFraction = parseFloat(line1.substring(20, 32));
    const fullYear = yearTwoDigit < 57 ? 2000 + yearTwoDigit : 1900 + yearTwoDigit;
    const epoch = new Date(Date.UTC(fullYear, 0, 1) + (dayFraction - 1) * 86400000);

    const upperName = name.toUpperCase();
    let group: SatelliteRecord['group'] = 'other';
    if (upperName.includes('ISS') || upperName.includes('ZARYA') || upperName.includes('CSS')) {
      group = 'iss';
    } else if (upperName.includes('STARLINK')) {
      group = 'starlink';
    } else if (
      upperName.includes('NOAA') ||
      upperName.includes('GOES') ||
      upperName.includes('METEOR')
    ) {
      group = 'weather';
    } else if (
      upperName.includes('HST') ||
      upperName.includes('CHANDRA') ||
      upperName.includes('INTEGRAL')
    ) {
      group = 'science';
    }

    seenNorad.add(norad);
    results.push({ norad, name, tle1: line1, tle2: line2, epoch, group });
  }

  return results;
}
