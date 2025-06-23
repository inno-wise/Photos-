document.addEventListener('DOMContentLoaded', () => {
  const websites = [
    {
      id: 'shutterstock',
      name: 'Shutterstock',
      content: `Upload your photos. Get paid per download.<br><strong>Earnings:</strong> $0.25 – $120 per image<br><strong>Payout:</strong> PayPal/Skrill (min $35)<br><strong>Link:</strong> <a href='https://contributor.shutterstock.com' target='_blank'>contributor.shutterstock.com</a>`
    },
    {
      id: 'adobe',
      name: 'Adobe Stock',
      content: `Submit nature pics, earn 33% commission.<br>Bonus: Integrated with Lightroom & Photoshop.<br><strong>Link:</strong> <a href='https://contributor.stock.adobe.com' target='_blank'>contributor.stock.adobe.com</a>`
    },
    {
      id: 'foap',
      name: 'Foap',
      content: `Upload nature pics using mobile. Join missions.<br><strong>Earnings:</strong> $5 per sale, missions up to $100<br><strong>Link:</strong> <a href='https://www.foap.com' target='_blank'>foap.com</a>`
    },
    {
      id: '500px',
      name: '500px',
      content: `License your nature photos.<br><strong>Royalties:</strong> 60% (exclusive) or 30% (non-exclusive)<br><strong>Link:</strong> <a href='https://500px.com/licensing' target='_blank'>500px.com/licensing</a>`
    },
    {
      id: 'dreamstime',
      name: 'Dreamstime',
      content: `Upload and earn via search engine reach.<br><strong>Royalties:</strong> 25%–60% depending on exclusivity.<br><strong>Link:</strong> <a href='https://www.dreamstime.com/sell-stock-photos' target='_blank'>dreamstime.com</a>`
    },
    {
      id: 'eyeem',
      name: 'EyeEm',
      content: `AI-powered nature photo marketplace.<br><strong>Commission:</strong> 50%<br><strong>Link:</strong> <a href='https://www.eyeem.com' target='_blank'>eyeem.com</a>`
    },
    {
      id: 'naturepl',
      name: 'Nature Picture Library',
      content: `High-quality nature and wildlife stock images.<br><strong>Licensing-based earnings</strong><br><strong>Link:</strong> <a href='https://www.naturepl.com' target='_blank'>naturepl.com</a>`
    },
    {
      id: 'alamy',
      name: 'Alamy',
      content: `Big platform for editorial and creative images.<br><strong>Royalty:</strong> 40% for non-exclusive photos<br><strong>Link:</strong> <a href='https://www.alamy.com/contributor' target='_blank'>alamy.com</a>`
    },
    {
      id: 'picfair',
      name: 'Picfair',
      content: `You set your price, Picfair adds +20%.<br><strong>Earnings:</strong> 100% of your listed price<br><strong>Link:</strong> <a href='https://www.picfair.com' target='_blank'>picfair.com</a>`
    },
    {
      id: 'agora',
      name: 'Agora',
      content: `Join photo contests — large prize pools.<br><strong>Prizes:</strong> Up to $25,000<br><strong>Link:</strong> <a href='https://www.agoraimages.com' target='_blank'>agoraimages.com</a>`
    },
    {
      id: 'snapped4u',
      name: 'Snapped4U',
      content: `Event and nature photographers can sell direct.<br><strong>Commission:</strong> 0% for $10 signup.<br><strong>Link:</strong> <a href='https://www.snapped4u.com' target='_blank'>snapped4u.com</a>`
    },
    {
      id: 'smugmug',
      name: 'SmugMug',
      content: `Portfolio site + selling tools.<br><strong>Plans:</strong> Starts at $7/month.<br><strong>Link:</strong> <a href='https://www.smugmug.com' target='_blank'>smugmug.com</a>`
    },
    {
      id: 'zenfolio',
      name: 'Zenfolio',
      content: `Complete photography business suite.<br><strong>Earnings:</strong> Sell prints + digital.<br><strong>Link:</strong> <a href='https://www.zenfolio.com' target='_blank'>zenfolio.com</a>`
    },
    {
      id: 'canstockphoto',
      name: 'Can Stock Photo',
      content: `Fast approval. Nature photos welcome.<br><strong>Commission:</strong> Up to 50%.<br><strong>Link:</strong> <a href='https://www.canstockphoto.com' target='_blank'>canstockphoto.com</a>`
    },
    {
      id: 'fineartamerica',
      name: 'Fine Art America',
      content: `Sell nature photos as prints, decor.<br><strong>Link:</strong> <a href='https://fineartamerica.com' target='_blank'>fineartamerica.com</a>`
    },
    {
      id: 'redbubble',
      name: 'Redbubble',
      content: `Sell nature art on merch.<br><strong>Link:</strong> <a href='https://www.redbubble.com' target='_blank'>redbubble.com</a>`
    },
    {
      id: 'pictorem',
      name: 'Pictorem',
      content: `Professional prints & galleries.<br><strong>Link:</strong> <a href='https://pictorem.com' target='_blank'>pictorem.com</a>`
    },
    {
      id: 'clickasnap',
      name: 'ClickASnap',
      content: `Earn per view model — $0.01/view.<br><strong>Link:</strong> <a href='https://clickasnap.com' target='_blank'>clickasnap.com</a>`
    },
    {
      id: 'stocksy',
      name: 'Stocksy',
      content: `Curated high-end stock site.<br><strong>Royalties:</strong> 50%+<br><strong>Link:</strong> <a href='https://www.stocksy.com' target='_blank'>stocksy.com</a>`
    },
    {
      id: 'photomoolah',
      name: 'Photomoolah',
      content: `Photography contest platform.<br><strong>Link:</strong> <a href='https://photomoolah.com' target='_blank'>photomoolah.com</a>`
    },
    // Add more sites if needed
    {
      id: 'tips',
      name: 'Tips by Jaydaplug',
      content: `
        <h3>Tips & Tricks for Nailing It by Jaydaplug</h3>
        <ul>
          <li>📸 Focus on storytelling over just scenery</li>
          <li>🌦 Early morning light is your best friend</li>
          <li>🗂 Organize shots by location & season for easier uploads</li>
          <li>🧠 Read contributor guidelines before uploading</li>
          <li>📈 Track what types of nature images sell the most</li>
          <li>🔁 Reuse compositions with new seasons or lighting</li>
          <li>🌍 Geo-tag for location-specific visibility</li>
          <li>🔒 Upload high-res, watermark only for socials</li>
          <li>🎯 Use specific keywords (e.g. "African savannah lion sunset")</li>
          <li>💼 Keep a spreadsheet of your published images & earnings</li>
        </ul>`
    }
  ];

  const navbar = document.getElementById('navbar');
  const tabContainer = document.getElementById('tabContainer');

  websites.forEach((site, index) => {
    const btn = document.createElement('button');
    btn.innerText = site.name;
    btn.onclick = () => {
      document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
      document.getElementById(site.id).classList.add('active');
    };
    navbar.appendChild(btn);

    const section = document.createElement('section');
    section.classList.add('tab');
    if (index === 0) section.classList.add('active');
    section.id = site.id;
    section.innerHTML = `<h2>${site.name}</h2><p>${site.content}</p>`;
    tabContainer.appendChild(section);
  });
});
