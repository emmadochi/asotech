const propertyData = [
    {
        id: "sweet-homes",
        estate: "Asotech Sweet Homes",
        location: "Katampe Main, Abuja",
        category: "Katampe",
        units: [
            { isGalleryItem: true, name: "Exterior View", image: "assets/images/Sweet home/main.jpeg", tags: ["Sold Out"] },
            { isGalleryItem: true, name: "Interior 1", image: "assets/images/Sweet home/WhatsApp Image 2026-05-20 at 9.52.49 AM.jpeg", tags: ["Gallery"] },
            { isGalleryItem: true, name: "Interior 2", image: "assets/images/Sweet home/WhatsApp Image 2026-05-20 at 9.52.50 AM.jpeg", tags: ["Gallery"] },
            { isGalleryItem: true, name: "Interior 3", image: "assets/images/Sweet home/WhatsApp Image 2026-05-20 at 9.52.53 AM.jpeg", tags: ["Gallery"] },
            { isGalleryItem: true, name: "Interior 4", image: "assets/images/Sweet home/WhatsApp Image 2026-05-20 at 9.53.01 AM.jpeg", tags: ["Gallery"] },
            { isGalleryItem: true, name: "Interior 5", image: "assets/images/Sweet home/WhatsApp Image 2026-05-20 at 9.53.07 AM.jpeg", tags: ["Gallery"] },
            { isGalleryItem: true, name: "Interior 6", image: "assets/images/Sweet home/WhatsApp Image 2026-05-20 at 9.53.08 AM.jpeg", tags: ["Gallery"] },
            { isGalleryItem: true, name: "Interior 7", image: "assets/images/Sweet home/WhatsApp Image 2026-05-20 at 9.53.09 AM.jpeg", tags: ["Gallery"] },
            { isGalleryItem: true, name: "Interior 8", image: "assets/images/Sweet home/WhatsApp Image 2026-05-20 at 9.53.12 AM.jpeg", tags: ["Gallery"] },
            { isGalleryItem: true, name: "Interior 9", image: "assets/images/Sweet home/WhatsApp Image 2026-05-20 at 9.53.14 AM.jpeg", tags: ["Gallery"] },
            { isGalleryItem: true, name: "Interior 10", image: "assets/images/Sweet home/WhatsApp Image 2026-05-20 at 9.53.15 AM.jpeg", tags: ["Gallery"] },
            { isGalleryItem: true, name: "Interior 11", image: "assets/images/Sweet home/WhatsApp Image 2026-05-20 at 9.53.16 AM.jpeg", tags: ["Gallery"] }
        ]
    },
    {
        id: "luxury-homes",
        estate: "Asotech Luxury Homes",
        location: "Kukwaba, Abuja",
        category: "Kukwaba",
        units: [
            { name: "5 Bedroom Fully-detached Duplex || 500sqm", price: "Premium", image: "assets/images/luxury-detached.jpg", tags: ["Luxury", "Smart Home"] },
            { name: "4 Bedroom Semi-detached Duplex || 300sqm", price: "Premium", image: "assets/images/4 Bedroom Semi-Detached Duplex 300Sqm Asotech Luxury Homes.png", tags: ["Premium Space"] },
            { name: "4 Bedroom Semi-detached Duplex || 200sqm", price: "Premium", image: "assets/images/4 Bedroom Semi-Detached Duplex 200Sqm Asotech Luxury Homes.png", tags: ["Modern Living"] }
        ]
    },
    {
        id: "harmony-hills",
        estate: "Harmony Hills",
        location: "Katampe Extension, Abuja",
        category: "Katampe",
        units: [
            { name: "4 Bedroom Fully-detached Duplex || 500sqm", price: "₦118,650,000", image: "assets/images/Harmony Hills 4 BEDROOM FULLY-DETACHED DUPLEX 500sqm.png", tags: ["Ultra-Luxury", "Prime Location"] },
            { name: "5 Bedroom Fully-detached Duplex with BQ || 320sqm", price: "₦75,900,000", image: "assets/images/HARMONY HILLS 4 BEDROOM FULLY-DETACHED DUPLEX  320sqm.png", tags: ["Executive"] },
            { name: "5 Bedroom Semi-detached Duplex with Attached BQ || 250sqm", price: "₦59,280,000", image: "assets/images/HARMONY HILLS 4 BEDROOM SEMI-DETACHED DUPLEX 250sqm.png", tags: ["Modern Design"] },
            { name: "4 Bedroom Terrace Duplex || 150sqm", price: "₦35,700,000", image: "assets/images/HARMONY HILLS 3 BEDROOM TERRACE DUPLEX 150sqm.png", tags: ["Ongoing"] }
        ]
    },
    {
        id: "vine-city",
        estate: "Vine City",
        location: "Apo Wasa, Abuja",
        category: "Apo",
        units: [
            { name: "5 Bedroom Fully-detached Duplex || 450sqm", price: "₦15,795,000", image: "assets/images/Vine City/1.png", tags: ["Eco-friendly", "Modern"] },
            { name: "4 Bedroom Fully-detached Duplex || 350sqm", price: "₦12,600,000", image: "assets/images/Vine City/350sqm.png", tags: ["Apo Wasa"] },
            { name: "4 Bedroom Terrace Duplex || 200sqm", price: "₦7,020,000", image: "assets/images/Vine City/terrace.png", tags: ["Affordable"] }
        ]
    },
    {
        id: "rehoboth-city",
        estate: "Rehoboth City",
        location: "Life Camp, Abuja",
        category: "Life Camp",
        units: [
            { name: "5 Bedroom Fully-detached Duplex || 500sqm", price: "₦30,000,000", image: "assets/images/Rehoabot/IMG_9101.JPG.jpeg", tags: ["Luxury", "Life Camp"] },
            { name: "4 Bedroom Semi-detached Duplex || 250sqm", price: "₦18,000,000", image: "assets/images/Rehoabot/IMG_9102.JPG.jpeg", tags: ["Elite"] },
            { name: "4 Bedroom Terrace Duplex || 200sqm", price: "₦15,000,000", image: "assets/images/Rehoabot/IMG_9103.JPG.jpeg", tags: ["Prime"] }
        ]
    },
    {
        id: "de-view",
        estate: "De View",
        location: "Gwarimpa II, Abuja",
        category: "Gwarimpa",
        units: [
            { name: "4 Bedroom Fully-detached Duplex || 500sqm", price: "₦79,999,994", image: "assets/images/de view/b3b88cf7-4215-478d-b450-97e4534a4d7c (1).jpg.jpeg", tags: ["Premium", "Gwarimpa"] },
            { name: "4 Bedroom Semi-detached Duplex || 250sqm", price: "₦39,999,995", image: "assets/images/de view/a1f81903-c5d2-4722-b114-4caab2ec8b0b (1).jpg.jpeg", tags: ["Elite"] },
            { name: "3 Bedroom Terrace Duplex || 150sqm", price: "₦24,999,995", image: "assets/images/de view/d3cf8c64-edb8-4dc3-8219-11ff2c670ef7 (1).jpg.jpeg", tags: ["Modern"] }
        ]
    },
    {
        id: "light-city",
        estate: "Light City",
        location: "Idu, Abuja",
        category: "Idu",
        units: [
            { name: "3 Bedroom Block of Flats (6 Units) || 720sqm", price: "₦27,000,000", image: "assets/images/light city/WhatsApp Image 2026-04-05 at 10.36.25 AM.jpeg", tags: ["Investment", "Idu"] },
            { name: "5 Bedroom Fully-detached Duplex || 500sqm", price: "₦18,000,000", image: "assets/images/light city/WhatsApp Image 2026-05-07 at 9.17.55 AM.jpeg", tags: ["Luxury", "Spacious"] },
            { name: "4 Bedroom Fully-detached Duplex || 350sqm", price: "₦12,600,000", image: "assets/images/light city/WhatsApp Image 2026-04-05 at 10.36.26 AM (1).jpeg", tags: ["Executive"] },
            { name: "4 Bedroom Semi-detached Duplex || 250sqm", price: "₦9,000,000", image: "assets/images/light city/WhatsApp Image 2026-04-05 at 10.36.26 AM.jpeg", tags: ["Modern"] },
            { name: "3 Bedroom Terrace Duplex || 150sqm", price: "₦5,400,000", image: "assets/images/light city/WhatsApp Image 2026-04-05 at 10.36.25 AM.jpeg", tags: ["Affordable"] }
        ]
    },
    {
        id: "asotech-villa",
        estate: "Asotech Villa",
        location: "Jabi, Abuja",
        category: "Jabi",
        units: [
            { name: "3 Bedroom Apartment", price: "₦250,000,000", image: "assets/images/Asotech villa/002.jpg.jpeg", tags: ["Luxury Apartment", "Jabi"] },
            { name: "2 Bedroom Apartment", price: "₦180,000,000", image: "assets/images/Asotech villa/003.jpg.jpeg", tags: ["Exclusive"] },
            { name: "1 Bedroom Apartment", price: "₦100,000,000", image: "assets/images/Asotech villa/004.jpg.jpeg", tags: ["Investment"] },
            { name: "5 Bedroom Fully-detached Duplex || 500sqm", price: "₦150,000,000", image: "assets/images/Asotech villa/005.jpg.jpeg", tags: ["Elite"] }
        ]
    },
    {
        id: "bricks-city",
        estate: "Bricks City",
        location: "Kubwa, Abuja",
        category: "Kubwa",
        units: [
            { name: "4 Bedroom Semi-Detached Duplex || 350sqm", price: "₦35,000,000", image: "assets/images/Brick City/1.png", tags: ["Guazanga Ext.", "Modern"] },
            { name: "4 Bedroom Semi-Detached Duplex || 300sqm", price: "₦30,000,000", image: "assets/images/Brick City/3.png", tags: ["Affordable Luxury"] },
            { name: "4 Bedroom Semi-Detached Duplex || 250sqm", price: "₦25,000,000", image: "assets/images/Brick City/2.png", tags: ["Family Home"] }
        ]
    },
    {
        id: "asotech-vista",
        estate: "Asotech Vista",
        location: "Behind Berger Yard, Life Camp, Abuja",
        category: "Life Camp",
        units: [
            { name: "4 Bedroom Luxury Terrace Duplex || Outright Payment", price: "₦200,000,000", image: "assets/images/Asotech Vista/1.jpeg", tags: ["Outright"] },
            { name: "4 Bedroom Luxury Terrace Duplex || Installment Plan", price: "₦220,000,000", image: "assets/images/Asotech Vista/2.jpeg", tags: ["Installment"] }
        ]
    },
    {
        id: "asotech-crest",
        estate: "Asotech Crest",
        location: "Gaduwa, Abuja",
        category: "Gaduwa",
        units: [
            { name: "Premium Luxury Duplexes || Coming Soon", price: "Price TBD", image: "assets/images/architectural.png", tags: ["Coming Soon"] }
        ]
    }
];
