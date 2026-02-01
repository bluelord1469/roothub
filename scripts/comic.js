const comicPages = [
    "../images/1page.jpg",
    "../images/2page.jpg",
    "../images/3page.jpg",
    "../images/4page.jpg",
    "../images/5page.jpg"
];

let currentPage = 1;
const totalPages = comicPages.length;

const comicContainer = document.getElementById('comic-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const currentPageSpan = document.getElementById('current-page');
const totalPagesSpan = document.getElementById('total-pages');

function initComic() {
    comicPages.forEach((imageUrl, index) => {
        const page = document.createElement('div');
        page.className = 'comic-page';
        page.id = `page-${index + 1}`;
        
        const img = document.createElement('img');
        img.src = imageUrl;
        img.className = 'comic-image';
        img.loading = 'lazy';
        
        page.appendChild(img);
        comicContainer.appendChild(page);
    });

    totalPagesSpan.textContent = totalPages;
    updateComicDisplay();
    prevBtn.addEventListener('click', goToPrevPage);
    nextBtn.addEventListener('click', goToNextPage);
    document.addEventListener('keydown', handleKeyPress);
    setupTouchEvents();
}

function goToPrevPage() {
    if (currentPage > 1) {
        goToPage(currentPage - 1);
    }
}

function goToNextPage() {
    if (currentPage < totalPages) {
        goToPage(currentPage + 1);
    }
}


function goToPage(pageNumber) {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    document.querySelectorAll('.comic-page').forEach(page => {
        page.classList.remove('active');
    });
    
    currentPage = pageNumber;
    updateComicDisplay();
}

function updateComicDisplay() {
    const currentPageElement = document.getElementById(`page-${currentPage}`);
    if (currentPageElement) {
        currentPageElement.classList.add('active');
    }
    
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
    currentPageSpan.textContent = currentPage;
    preloadAdjacentPages();
}

function preloadAdjacentPages() {
    if (currentPage < totalPages) {
        const nextImg = document.querySelector(`#page-${currentPage + 1} img`);
        if (nextImg) nextImg.loading = 'eager';
    }
    
    if (currentPage > 1) {
        const prevImg = document.querySelector(`#page-${currentPage - 1} img`);
        if (prevImg) prevImg.loading = 'eager';
    }
}

function handleKeyPress(event) {
    if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
        goToPrevPage();
        event.preventDefault();
    } else if (event.key === 'ArrowRight' || event.key === 'PageDown' || event.key === ' ') {
        goToNextPage();
        event.preventDefault();
    } else if (event.key === 'f' || event.key === 'F') {
        toggleFullscreen();
    } else if (event.key >= '1' && event.key <= '5') {
        const pageNum = parseInt(event.key);
        if (pageNum <= totalPages) {
            goToPage(pageNum);
        }
    }
}

function setupTouchEvents() {
    let touchStartX = 0;
    let touchEndX = 0;
    
    comicContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    comicContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                goToNextPage();
            } else {
                goToPrevPage();
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', initComic);