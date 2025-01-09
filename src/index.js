import "./styles.css";

document.addEventListener('DOMContentLoaded', function () {
    const projectCards = document.querySelectorAll('.card');

    projectCards.forEach(card => {
        const githubLink = card.querySelector('img[src*="github"]');
        const externalLink = card.querySelector('.open-new');

        // Open GitHub link in a new tab
        if (githubLink) {
            githubLink.addEventListener('click', function (event) {
                event.preventDefault();
                const projectName = card.querySelector('.projectName').textContent.trim();
                window.open(`https://github.com/yourusername/${projectName}`, '_blank');
            });
        }

        // Open external project link in a new tab
        if (externalLink) {
            externalLink.addEventListener('click', function (event) {
                event.preventDefault();
                const projectName = card.querySelector('.projectName').textContent.trim();
                window.open(`https://yourwebsite.com/projects/${projectName}`, '_blank');
            });
        }
    });

    const contactLinks = document.querySelectorAll('.contact .links img');

    contactLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const platform = link.getAttribute('src').split('/').pop().split('.')[0];
            let url;

            // Determine the URL based on the platform
            switch (platform) {
                case 'github':
                    url = 'https://github.com/yourusername';
                    break;
                case 'linkedin':
                    url = 'https://linkedin.com/in/yourusername';
                    break;
                case 'twitter':
                    url = 'https://twitter.com/yourusername';
                    break;
                default:
                    url = '#';
            }

            // Open the URL in a new tab
            window.open(url, '_blank');
        });
    });
});