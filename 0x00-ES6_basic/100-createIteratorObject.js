export default function createIteratorObject(report) {
  return {
    [Symbol.iterator]() {
      const names = [];
      let count = 0;
      for (const dept of Object.values(report.allEmployees)) {
        names.push(...dept);
      }
      return {
        next() {
          if (count < names.length) {
            const idx = count;
            count += 1;
            return { done: false, value: names[idx] };
          }
          return { done: true, value: undefined };
        },
      };
    },
  };
}
