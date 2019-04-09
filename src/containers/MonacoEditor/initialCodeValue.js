// no one can nicely read the code with this blob blocking Editor.js, so this lives as its own file
const value = `// minimal microsoft's "monaco editor" (vscode) implementation

// _______________  DEMO CONTENT _______________ 

// Automatically re-try to fetch Data with the fetchRetry helper
const fn = async () =>  {
  const res = await fetchRetry(5);
  console.log(res);
}

/**
 * @async
 * @param {Number} n amount of times the function will retry to make a async call
 */
export const fetchRetry = async n => {
  try {
    // new Promise = fetch
    return await new Promise((resolve, reject) => {
      if (n > 0) {
        window.setTimeout(() => {
          reject();
          console.log("try: " + n);
        }, Math.random() * 2000);
      } else {
        window.setTimeout(() => {
          resolve('resolved');
        }, Math.random() * 2000);
      }
    });
  } catch (err) {
    return fetchRetry(n - 1);
  }
};

// _______________  DEMO CONTENT _______________ `;

export default value;
