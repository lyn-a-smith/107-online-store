// src/services/dataService.js
const catalog = [
    {
        _id: "1",
        title: "The Midnight Runner",
        price: 120.00,
        category: "Running",
        image: "src/assets/midnight-runner.png"
    },
    {
        _id: "2",
        title: "Burgundy High-Top",
        price: 150.00,
        category: "Casual",
        image: "src/assets/burgundy-high-top.png"
    },
    {
        _id: "3",
        title: "Silver Bullet Sprint",
        price: 135.00,
        category: "Running",
        image: "src/assets/silver-bullet.png"
    },
    {
        _id: "4",
        title: "Obsidian Loafer",
        price: 110.00,
        category: "Dress",
        image: "src/assets/obsidian-loafer.png"
    },
    {
        _id: "5",
        title: "Crimson Strike",
        price: 145.00,
        category: "Athletic",
        image: "src/assets/crimson-strike.png"
    }
];

class DataService {
    getProducts() {
        return catalog;
    }
}

export default DataService;