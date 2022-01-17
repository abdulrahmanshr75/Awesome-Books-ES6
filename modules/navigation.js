class DisplayThePage {
  static navigationBar = (e) => {
    e.preventDefault();
    const thePage = e.target.getAttribute('data-target');
    document.querySelector('.display').classList.remove('display');
    document.getElementById(thePage).classList.add('display');
  };

  static pageView = () => {
    const navItems = document.querySelectorAll('.nav-link');
    navItems.forEach((item) => {
      item.addEventListener('click', DisplayThePage.navigationBar);
    });
  };
}
export default DisplayThePage;
