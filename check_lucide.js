const lucide = require('lucide-react');
const keys = Object.keys(lucide);
const gitKeys = keys.filter(k => k.toLowerCase().includes('git'));
console.log(gitKeys);
