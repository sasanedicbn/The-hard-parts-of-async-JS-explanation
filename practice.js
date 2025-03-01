// HIGHT ORDER FUNCTION EXAMPLES

// 3. HIHGT ORDER FUNCTION => CALLBACK
const fetchData = (callback) => {
  setTimeout(() => {
    const data = { name: "Sasa", coutry: "SRB" };
    callback(data);
  }, 2000);
};

const callbackFn = (user) => {
  return console.log(user);
};

fetchData(callbackFn);
