/*
    Created by Amir

    USAGE:
        ...
        <base href="" >
        <link rel="stylesheet" href="javascripts/navigation/dist/navigation.css">
        ...

        <nav id="navigation">
        </nav>
        ...
        <script src="javascripts/navigation/navigation.js"></script>
    
    The element nav will be automatically filled.
*/

//This action will set the content of the navigation
// isActive: isAtCurrent('index.html') || isAtCurrent('')
createNavigation(
    'assets/logo.png', [
        { name: 'Home',     link: 'index.html', isActive: true },
        { name: 'Services', link: 'index.html', isActive: false},
        { name: 'Seminars', link: 'index.html', isActive: false},
        { name: 'News',     link: 'index.html', isActive: false},
        { name: 'Careers',  link: 'index.html', isActive: false},
        { name: 'About Us', link: 'index.html', isActive: false}
    ]
);

//=================================================================================================
function onpressMenuIcon() {
    document.getElementById('menuicon').classList.toggle('change');
    document.getElementById('nav-dropdown').classList.toggle('hidden-nav');;  
}

/**
 * 
 * @param  brandIcon :string
 * @param {name, link, isActive} links 
 */
function createNavigation( brandIcon, links ) {
    let linksItems = '';
    links.map((li) => {
        const temp = !li.isActive ?
            `<li class=""><a href="${li.link}">${li.name}</a></li>`:
            `<li class="nav-active">${li.name}</li>`;
        linksItems += temp;
    });

    //This sets the content of the actual navigation bar
    const navs = `
        <div class="container">
            <div class="mobile">
                <img src="${brandIcon}" alt="${brandIcon}" />
                <div id='menuicon' onclick="onpressMenuIcon()">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>
            </div>

            <div class="desktop">
                <div id="nav-desktop">
                    <img src="${brandIcon}" alt="${brandIcon}" />
                    <div class="contents">
                        <div class="bar">
                           <span>R.S BERNARDO & ASSOCIATE</span>
                           <form>
                                <input type="text" placeholder="search" name="search" />
                                <button type="onsubmit">
                                    Search
                                </button>
                            </form>
                        </div>
                        <div class="navitems">
                            <ul>
                                ${linksItems}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div id='nav-dropdown' class='hidden-nav'>
                <form>
                    <input type="text" placeholder="search" name="search" />
                    <button type="onsubmit">
                        Search
                    </button>
                </form>
                <ul onclick="onpressMenuIcon()">
                    ${linksItems}
                </ul>
            </div>
        </div>
    `;
    document.getElementById('navigation').innerHTML = navs;
}

function isAtCurrent(string1) {
    const cc = window.location.href.substr( window.location.href.lastIndexOf('/') + 1 );
    if(string1 == cc ) return true;
    return false;
}

const current = window.location.href.substr(
    window.location.href.lastIndexOf('/') + 1
);
