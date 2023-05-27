const useDiffrenceDateTime = (date: string) => {
  let date1 = new Date();
  let date2 = new Date(date);

  let Difference_In_Time = date2.getTime() - date1.getTime();
  let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  return Difference_In_Days.toFixed(0);
};

export default useDiffrenceDateTime;
