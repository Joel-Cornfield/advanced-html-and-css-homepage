import "./styles.css";

// Import images from the assets folder
import openInNewIcon from './assets/open-in-new.svg';
import phoneIcon from './assets/phone.png';
import mailIcon from './assets/mail.png';

document.addEventListener('DOMContentLoaded', function () {
    const projectCards = document.querySelectorAll('.card');

    projectCards.forEach(card => {
        // Get the project name and append images dynamically
        const projectName = card.querySelector('.projectName');

        // Create and append external link icon to project
        const externalLinkImage = document.createElement('img');
        externalLinkImage.src = openInNewIcon;
        externalLinkImage.alt = "Open in New Tab";
        externalLinkImage.classList.add('open-new');
        projectName.appendChild(externalLinkImage);

        const githubLink = card.querySelector('img[src*="github"]');
        const externalLink = card.querySelector('.open-new');

        // Open GitHub link in a new tab
        if (githubLink) {
            githubLink.addEventListener('click', function (event) {
                event.preventDefault();
                window.open(`https://github.com/yourusername/${projectName.textContent.trim()}`, '_blank');
            });
        }

        // Open external project link in a new tab
        if (externalLink) {
            externalLink.addEventListener('click', function (event) {
                event.preventDefault();
                window.open(`https://yourwebsite.com/projects/${projectName.textContent.trim()}`, '_blank');
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

    // Dynamically set contact icons
    const contactPhone = document.querySelector('.contact .phone');
    const contactMail = document.querySelector('.contact .mail');

    if (contactPhone) {
        const phoneImg = document.createElement('img');
        phoneImg.src = phoneIcon;
        phoneImg.alt = "Phone";
        contactPhone.appendChild(phoneImg);
    }

    if (contactMail) {
        const mailImg = document.createElement('img');
        mailImg.src = mailIcon;
        mailImg.alt = "Email";
        contactMail.appendChild(mailImg);
    }
});
