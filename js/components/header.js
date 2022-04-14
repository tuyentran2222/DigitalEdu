const header = `
<div class="header__container container">
    <div class="header__brand">
        <h1>
            <a href="index.html" class="brand__logo">
                Digital
                <span class="sub-log">E</span>du
            </a>
        </h1>
    </div>
    <div class="header__navbar navbar-collapse">
        <div class="navbar__searchbar">
            <form action="" class="searchbar__form">
                <i class='bx bx-search searchbar__icon'></i>
                <input type="search" name="" id="" class="searchbar__input" placeholder="Search for courses">
            </form>
        </div>
        <div class="header__nav">
            <ul class="nav__list">
                <li class="nav__item">
                    <a href="index.html" class="nav__link nav__active">Home</a>
                </li>
                <li class="nav__item">
                    <a href="about.html" class="nav__link">About</a>
                </li>
                <li class="nav__item">
                    <a href="courses.html" class="nav__link">Courses</a>
                </li>
                <li class="nav__item" id="pages-expand">
                    <a href="#" class="nav__link">Pages <i class='bx bx-chevron-down'></i>
                    </a>
                    <div class="nav__expand">
                        <ul class="expand__list">
                            <li class="expand__item">
                                <a href="blogs.html" class="expand__link">Blog post</a>
                            </li>
                            <li class="expand__item">
                                <a href="blog.html" class="expand__link">Blog single</a>
                            </li>
                            <li class="expand__item">
                                <a href="error.html" class="expand__link">404</a>
                            </li>
                            <li class="expand__item">
                                <a href="#" class="expand__link">Landing page</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="nav__item">
                    <a href="contact.html" class="nav__link">Contact</a>
                </li>
            </ul>

        </div>
        
    </div>
    <div class="header__theme">
        <div class="theme__container">
            <i class='bx bx-moon moon__icon' ></i>
        </div>
        <div class="menu__icon">
            <i class='bx bx-menu'></i>
        </div>
    </div>
</div>`;

export default header;