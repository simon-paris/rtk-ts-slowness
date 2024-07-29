let str = "";

for (let i = 0; i < 500000; i++) {
  str += `  field${i}?: string;\n`;
}

console.log(`export type VeryVerySlowType = {\n${str}}\n`);
