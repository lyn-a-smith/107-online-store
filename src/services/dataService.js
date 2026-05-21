const catalog = [{
    "title": "Orange",
    "category": "Fruits",
    "price": 15,
    "image": "orange.jpg",
    "_id": "1"
},
{
    "title": "Chocolate",
    "category": "Snacks",
    "price": 25,
    "image": "chocolate.jpg",
    "_id": "2"
},
{
    "title": "Carrot",
    "category": "Vegetables",
    "price": 10.99,
    "image": "carrot.jpg",
    "_id": "3"
}
];

class DataService {
    getProducts () {
        return catalog;
    }   
}

export default DataService;