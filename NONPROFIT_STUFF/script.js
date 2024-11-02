// Function to toggle sidebar visibility
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const mainContainer = document.querySelector('.main-container');
    const hamburgerLines = document.querySelectorAll('.hamburger-line');
    
    sidebar.classList.toggle('collapsed');
    mainContainer.classList.toggle('expanded');
    
    // Animate hamburger button
    if (sidebar.classList.contains('collapsed')) {
        hamburgerLines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        hamburgerLines[1].style.opacity = '0';
        hamburgerLines[2].style.transform = 'rotate(-45deg) translate(7px, -8px)';
    } else {
        hamburgerLines.forEach(line => {
            line.style.transform = 'none';
            line.style.opacity = '1';
        });
    }
}

// Function to show different pages
function showPage(pageId) {
    // Update sidebar active state
    document.querySelectorAll('.sidebar-link').forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('onclick').includes(pageId)) {
            link.classList.add('active');
        }
    });

    // Page transition
    document.querySelectorAll('.page').forEach(page => {
        if(page.classList.contains('active')) {
            page.style.opacity = '0';
            page.style.transform = 'translateY(20px)';
        }
        setTimeout(() => {
            page.classList.remove('active');
        }, 300);
    });
    
    setTimeout(() => {
        const newPage = document.getElementById(pageId);
        newPage.classList.add('active');
        void newPage.offsetWidth; // Trigger reflow
        newPage.style.opacity = '1';
        newPage.style.transform = 'translateY(0)';
    }, 300);
}

// Initialize active state on page load
document.addEventListener('DOMContentLoaded', () => {
    const activePage = document.querySelector('.page.active');
    if (activePage) {
        const pageId = activePage.id;
        document.querySelectorAll('.sidebar-link').forEach(link => {
            if(link.getAttribute('onclick').includes(pageId)) {
                link.classList.add('active');
            }
        });
    }
});