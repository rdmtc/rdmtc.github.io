const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');


function getFiles(dir) {
  let subdir = dir.split('/');
  subdir.shift();
  subdir = subdir.join('/');
  subdir = subdir.length ? `${subdir}/` : '';
  return fs.readdirSync(path.join(__dirname, '..', dir))
    .filter(file => file.endsWith('.md') && file !== 'README.md')
    .map(file => subdir + file);
}

module.exports = () => {
  const sidebar = {};

  // Guide
  sidebar['/dokumentation/'] =[
    {
      title: 'RedMatic',
      collapsable: false,
      children: [
        ['', 'Einführung'],
        ...getFiles('dokumentation/RedMatic')
      ]
    },

    {
      title: 'FAQ',
      collapsable: false,
      children: [
        ...getFiles('dokumentation/FAQ')
      ]
    }
  ];

  sidebar['/nodes/'] = [
    {
      title: 'CCU Nodes',
      collapsable: false,
      children: [
        ...getFiles('nodes/ccu')
      ]
    },
    {
      title: 'redmatic',
      collapsable: false,
      children: [
        ...getFiles('nodes/redmatic')
      ]
    },
  ];

  // Wiki
  const wikiGroups = {};
  const wikiDir = path.join(__dirname, '../wiki');

  fs.readdirSync(wikiDir).forEach(file => {
    if (file.startsWith('_') || !file.endsWith('.md') || file === 'Home.md' || file === 'README.md') return;

    const frontmatter = matter(fs.readFileSync(path.join(wikiDir, file)));
    const category = frontmatter.data.Category || 'Weitere';
    const title = frontmatter.data.Title || file.slice(0, -3);
    if (!wikiGroups[category]) {
      wikiGroups[category] = [];
    }
    wikiGroups[category].push([file, title]);
  });

  sidebar['/wiki/'] = [];
  for (let [category, pages] of Object.entries(wikiGroups)) {
    pages.sort((a, b) => {
      if (a[1] < b[1]) return -1;
      if (a[1] > b[1]) return 1;
      return 0;
    });
    sidebar['/wiki/'].push({
      title: category,
      collapsable: true,
      children: pages
    });
  }

  sidebar['/wiki/'].sort((a, b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  });

  sidebar['/wiki/'].unshift({
    title: "Wiki",
    collapsable: false,
  });

  // sidebar['/'] = false;

  return sidebar;
};

