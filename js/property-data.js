const propertyData = [
    {
        id: "sweet-homes",
        estate: "Asotech Sweet Homes",
        location: "Katampe Main, Abuja",
        category: "Katampe",
        units: [
            { name: "4 Bedroom Terrace + BQ", price: "Contact for Price", image: "assets/images/architectural.png", tags: ["Selling", "Modern"] },
            { name: "3 Bedroom Apartment", price: "Contact for Price", image: "assets/images/ASOTECH VILLA apartment.png", tags: ["Selling"] }
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
            { name: "4 Bedroom Fully-detached Duplex || 320sqm", price: "₦75,900,000", image: "assets/images/HARMONY HILLS 4 BEDROOM FULLY-DETACHED DUPLEX  320sqm.png", tags: ["Executive"] },
            { name: "4 Bedroom Semi-detached Duplex || 250sqm", price: "₦59,280,000", image: "assets/images/HARMONY HILLS 4 BEDROOM SEMI-DETACHED DUPLEX 250sqm.png", tags: ["Modern Design"] },
            { name: "3 Bedroom Terrace Duplex || 150sqm", price: "₦35,700,000", image: "assets/images/HARMONY HILLS 3 BEDROOM TERRACE DUPLEX 150sqm.png", tags: ["Ongoing"] }
        ]
    },
    {
        id: "vine-city",
        estate: "Vine City",
        location: "Apo Wasa, Abuja",
        category: "Apo",
        units: [
            { name: "5 Bedroom Fully-detached Duplex || 450sqm", price: "₦15,795,000", image: "assets/images/5 BEDROOM FULLY-DETACHED DUPLEX  450sqm vine city.png", tags: ["Eco-friendly", "Modern"] },
            { name: "4 Bedroom Fully-detached Duplex || 350sqm", price: "₦12,600,000", image: "assets/images/4 BEDROOM FULLY-DETACHED DUPLEX 350sqm vine city.png", tags: ["Apo Wasa"] },
            { name: "4 Bedroom Terrace Duplex || 200sqm", price: "₦7,020,000", image: "assets/images/4 BEDROOM TERRACE DUPLEX 200sqm vine city.png", tags: ["Affordable"] }
        ]
    },
    {
        id: "rehoboth-city",
        estate: "Rehoboth City",
        location: "Life Camp, Abuja",
        category: "Life Camp",
        units: [
            { name: "5 Bedroom Fully-detached Duplex || 500sqm", price: "₦30,000,000", image: "assets/images/5 Bedroom Fully-detached Duplex 500sqm light city.png", tags: ["Luxury", "Life Camp"] },
            { name: "4 Bedroom Semi-detached Duplex || 250sqm", price: "₦18,000,000", image: "assets/images/4 Bedroom Semi-detached Duplex  250sqm light city.png", tags: ["Elite"] },
            { name: "4 Bedroom Terrace Duplex || 200sqm", price: "₦15,000,000", image: "assets/images/3 Bedroom Terrace Duplex 150sqm light city.png", tags: ["Prime"] }
        ]
    },
    {
        id: "de-view",
        estate: "De View",
        location: "Gwarimpa II, Abuja",
        category: "Gwarimpa",
        units: [
            { name: "4 Bedroom Fully-detached Duplex || 500sqm", price: "₦79,999,994", image: "assets/images/5 Bedroom Fully-detached Duplex 500sqm light city.png", tags: ["Premium", "Gwarimpa"] },
            { name: "4 Bedroom Semi-detached Duplex || 250sqm", price: "₦39,999,995", image: "assets/images/4 BEDROOM SEMI-DETACHED DUPLEX 250sqm DE VIEW.png", tags: ["Elite"] },
            { name: "3 Bedroom Terrace Duplex || 150sqm", price: "₦24,999,995", image: "assets/images/3 BEDROOM TERRACE DUPLEX 150sqm DE View.png", tags: ["Modern"] }
        ]
    },
    {
        id: "light-city",
        estate: "Light City",
        location: "Idu, Abuja",
        category: "Idu",
        units: [
            { name: "3 Bedroom Block of Flats (6 Units) || 720sqm", price: "₦27,000,000", image: "assets/images/ASOTECH VILLA apartment.png", tags: ["Investment", "Idu"] },
            { name: "5 Bedroom Fully-detached Duplex || 500sqm", price: "₦18,000,000", image: "assets/images/5 Bedroom Fully-detached Duplex 500sqm light city.png", tags: ["Luxury", "Spacious"] },
            { name: "4 Bedroom Fully-detached Duplex || 350sqm", price: "₦12,600,000", image: "assets/images/architectural.png", tags: ["Executive"] },
            { name: "4 Bedroom Semi-detached Duplex || 250sqm", price: "₦9,000,000", image: "assets/images/4 Bedroom Semi-detached Duplex  250sqm light city.png", tags: ["Modern"] },
            { name: "3 Bedroom Terrace Duplex || 150sqm", price: "₦5,400,000", image: "assets/images/3 Bedroom Terrace Duplex 150sqm light city.png", tags: ["Affordable"] }
        ]
    },
    {
        id: "asotech-villa",
        estate: "Asotech Villa",
        location: "Jabi, Abuja",
        category: "Jabi",
        units: [
            { name: "3 Bedroom Apartment", price: "₦250,000,000", image: "assets/images/ASOTECH VILLA apartment.png", tags: ["Luxury Apartment", "Jabi"] },
            { name: "2 Bedroom Apartment", price: "₦180,000,000", image: "assets/images/ASOTECH VILLA apartment.png", tags: ["Exclusive"] },
            { name: "1 Bedroom Apartment", price: "₦100,000,000", image: "assets/images/ASOTECH VILLA apartment.png", tags: ["Investment"] },
            { name: "5 Bedroom Fully-detached Duplex || 500sqm", price: "₦150,000,000", image: "assets/images/Asotech Villa 5 BEDROOM FULLY-DETACHED DUPLEX 500Sqm.png", tags: ["Elite"] }
        ]
    },
    {
        id: "bricks-city",
        estate: "Bricks City",
        location: "Kubwa, Abuja",
        category: "Kubwa",
        units: [
            { name: "4 Bedroom Semi-Detached Duplex || 350sqm", price: "₦35,000,000", image: "assets/images/Brick City 4 Bedroom Semi-Detached Duplex – 350SQM.png", tags: ["Guazanga Ext.", "Modern"] },
            { name: "4 Bedroom Semi-Detached Duplex || 250sqm", price: "₦25,000,000", image: "assets/images/brick city 4 Bedroom Semi-Detached Duplex – 250SQM.png", tags: ["Family Home"] }
        ]
    }
];
