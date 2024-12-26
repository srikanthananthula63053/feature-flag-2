const dummyApiResponse = {
    showAccordion: false,
    showRandomColor: false,
    showTicTacToe: true,
};

function featureFlagsDataServiceCall() {
    return new Promise((resolve, reject) => {
      if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
      else reject("Some error occured! Please try again");
    });
  }
  
  export default featureFlagsDataServiceCall;