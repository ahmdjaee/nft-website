
// ANCHOR Start Top Creators
const creators = [
    { id: 1, name: 'Keeptreal', totalSale: '10.25 ETH', imgSrc: 'assets/avatars/Avatar-1.svg' },
    { id: 2, name: 'ArtisticGem', totalSale: '8.50 ETH', imgSrc: 'assets/avatars/Avatar-2.svg' },
    { id: 3, name: 'PixelMaster', totalSale: '12.75 ETH', imgSrc: 'assets/avatars/Avatar-3.svg' },
    { id: 4, name: 'NFTExplorer', totalSale: '5.00 ETH', imgSrc: 'assets/avatars/Avatar-4.svg' },
    { id: 5, name: 'CryptoArtist', totalSale: '11.00 ETH', imgSrc: 'assets/avatars/Avatar-5.svg' },
    { id: 6, name: 'BlockChainArt', totalSale: '7.25 ETH', imgSrc: 'assets/avatars/Avatar-6.svg' },
    { id: 7, name: 'DigitalDream', totalSale: '9.10 ETH', imgSrc: 'assets/avatars/Avatar-7.svg' },
    { id: 8, name: 'VirtualArtist', totalSale: '6.85 ETH', imgSrc: 'assets/avatars/Avatar-8.svg' },
    { id: 9, name: 'MetaPainter', totalSale: '10.00 ETH', imgSrc: 'assets/avatars/Avatar-9.svg' },
    { id: 10, name: 'EtherealArt', totalSale: '8.90 ETH', imgSrc: 'assets/avatars/Avatar-10.svg' },
    { id: 11, name: 'TechnoArt', totalSale: '9.50 ETH', imgSrc: 'assets/avatars/Avatar-11.svg' },
    { id: 12, name: 'FutureArt', totalSale: '12.00 ETH', imgSrc: 'assets/avatars/Avatar-12.svg' }
];


const topCreatorLayout = document.getElementById('topCreatorLayout');

for (let i = 0; i < 12; i++) {
    const creator = creators[i % creators.length]; // Mengulang data creator jika jumlahnya kurang dari 12
    const card = document.createElement('div');
    card.classList.add('top-creator-card', 'animation-transform');

    card.innerHTML = `
        <div class="badge">${creator.id}</div>
        <img src="${creator.imgSrc}" alt="${creator.name}" style="width: 100%; padding-inline: 2rem;">
        <h5>${creator.name}</h5>
        <p>Total Sale: <span>${creator.totalSale}</span></p>
    `;

    topCreatorLayout.appendChild(card);
}
// End Top Creators

// ANCHOR Start Browse Categories 
const categories = [
    { name: 'Art', imgSrc: 'assets/button-icons/PaintBrush.svg', bgUrl: 'assets/images/Image\ Placeholder.png' },
    { name: 'Music', imgSrc: 'assets/button-icons/MusicNotes.svg', bgUrl: 'assets/images/Image\ Placeholder-1.png' },
    { name: 'Collectibles', imgSrc: 'assets/button-icons/Swatches.svg', bgUrl: 'assets/images/Image\ Placeholder-2.png' },
    { name: 'Photography', imgSrc: 'assets/button-icons/Camera.svg', bgUrl: 'assets/images/Image\ Placeholder-3.png' },
    { name: 'Video', imgSrc: 'assets/button-icons/VideoCamera.svg', bgUrl: 'assets/images/Image\ Placeholder-4.png' },
    { name: 'Utilty', imgSrc: 'assets/button-icons/MagicWand.svg', bgUrl: 'assets/images/Image\ Placeholder-5.png' },
    { name: 'Sport', imgSrc: 'assets/button-icons/Basketball.svg', bgUrl: 'assets/images/Image\ Placeholder-6.png' },
    { name: 'Virtual Worlds', imgSrc: 'assets/button-icons/Planet.svg', bgUrl: 'assets/images/Image\ Placeholder-7.png' },
];

const browseCategoryLayout = document.getElementById('browseCategoryLayout');

for (let i = 0; i < 8; i++) {
    const category = categories[i % categories.length]; // Mengulang data category jika jumlahnya kurang dari 8
    const card = document.createElement('div');
    card.classList.add('browse-category-card');

    card.innerHTML = `
        <div class="image-categories" style="background-image: url('${category.bgUrl}');">
            <div class="bg-blur">
                <img src="${category.imgSrc}" alt="${category.name}">
            </div>
        </div>
        <h5>${category.name}</h5>
    `;

    browseCategoryLayout.appendChild(card);
}

// End Browse Categories