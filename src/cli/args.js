const parseArgs = () => {
  const args = process.argv.slice(2);
  const result = [];

  args.forEach((element, i) => {
    if (element.startsWith('--') && args[i + 1]) {
      result.push(`${element.slice(2)} is ${args[i + 1]}`);
    }
  })

  console.log(result.join(', '));
};

parseArgs();