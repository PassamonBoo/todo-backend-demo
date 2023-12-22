
const service = {
  getTodoResult: () => {
    const output = [];
        for (let i = 0; i < 100; ++i) {
          output.push({
            todoID: i,
            todoTitle: `Hi ${i}`,
          });
        }

        return output;
  },
};
export default service;
