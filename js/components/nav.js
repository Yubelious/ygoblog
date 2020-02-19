const Nav = props => `
  <input type="checkbox" name="nav-trigger" id="nav-trigger" class="hidden nav__trigger">
  <label for="nav-trigger" class="nav__trigger__icon"><span class="icon-menu"></span></label>
  <nav class="nav nav__home">
    <label for="nav-trigger" class="nav__trigger__icon"><span class="icon-cross"></span></label>
    <img src="images/dn-logo.png" class="nav__logo" />
    <ul class="nav__menu">
      <li class="nav__item ${props.selected === "" && "nav__item--selected"}">
        <a href="/" class="nav__item__link">Home</a>
        <span class="nav__item__icon icon-home"></span>
      </li>
      <li class="nav__item ${props.selected === "duelzone" && "nav__item--selected"}">
        <a href="duelzone.html" class="nav__item__link">Duel Zone</a>
        <span class="nav__item__icon icon-shield"></span>
      </li>
      <li class="nav__item ${props.selected === "editor" && "nav__item--selected"}">
        <a href="#" class="nav__item__link">Deck Editor</a>
        <span class="nav__item__icon icon-pencil"></span>
      </li>
      <li class="nav__item ${props.selected === "profile" && "nav__item--selected"}">
        <a href="#" class="nav__item__link">Profile</a>
        <span class="nav__item__icon icon-user-solid-circle"></span>
      </li>
      <li class="nav__item ${props.selected === "leaderboards" && "nav__item--selected"}">
        <a href="#" class="nav__item__link">Leaderboards</a>
        <span class="nav__item__icon icon-trophy"></span>
      </li>
      <li class="nav__item ${props.selected === "deluxe" && "nav__item--selected"}">
        <a href="#" class="nav__item__link">Dueling Deluxe+</a>
        <span class="nav__item__icon icon-diamond"></span>
      </li>
    </ul>
    <footer class="footer">
      <h2 class="title">JOIN US ON</h2>
      <p class="footer__icons">
        <a class="footer__icon" href="#"><span class="icon-discord"></span></a>
        <a class="footer__icon" href="#"><span class="icon-facebook2"></span></a>
        <a class="footer__icon" href="#"><span class="icon-twitter"></span></a>
      </p>
      <p class="footer__links">
        <a class="nav__login__link" href="#">Privacy Policy</a>
        <a class="nav__login__link" href="#">Terms of Use</a>
      </p>
    </footer>
  </nav>
`

export default Nav