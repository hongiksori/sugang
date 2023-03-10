(() => {
  const failed = document.getElementsByClassName('failed');
  const fucked = document.getElementById('fucked');
  const sugangButton = document.getElementById('sugangButton');
  let time = new Date();
  const timeBeforeClick = time.getTime();
  const subjectNumber = Math.floor(Math.random() * 5 + 4);
  const classCredits = document.getElementById('class-credits');
  const creditList = [3, 6, 10, 13, 15, 18, 20, 22];

  Array.from(failed).forEach(element => {
    element.addEventListener('click', () => {
      alert('"수강신청" 버튼을 클릭해야 합니다!');
      location.replace('/');
    });
  });
  fucked.addEventListener('click', () => {
    window.alert('"수강신청" 버튼을 클릭해야 합니다!!!');
    location.replace('/');
  });
  sugangButton.addEventListener('click', () => {
    const time = new Date();
    const timeRecorded = time.getTime() - timeBeforeClick;
    alert(timeRecorded / 1000 + '초 걸렸습니다');
    history.back();
  });
  Array.from({ length: subjectNumber }, (_, i) => i + 1).forEach(i => {
    const obj = document.getElementsByClassName(i);
    obj[0].classList.remove('display-none');
    obj[1].classList.remove('display-none');
  });
  classCredits.innerHTML =
    '現 신청 학점수 : ' +
    creditList[subjectNumber - 1].toString() +
    '학점 (' +
    subjectNumber.toString() +
    ' 과목, 사이버강좌 0 학점)';
})();
