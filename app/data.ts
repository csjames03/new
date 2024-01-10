type Stock = {
    bloodType: string;
    total: number;
    date: string;
};

const stockData: Stock[] = [
    {
        bloodType: 'A+',
        total: 17,
        date: "April 16 2023",
    },
    {
        bloodType: 'A-',
        total: 18,
        date: "June 16 2023",
    },
    {
        bloodType: 'B+',
        total: 58,
        date: "October 24 2023",
    },
    {
        bloodType: 'B-',
        total: 20,
        date: "January 1 2023",
    },
    {
        bloodType: 'O+',
        total: 7,
        date: "November 3 2023",
    },
    {
        bloodType: 'O-',
        total: 30,
        date: "February 28 2023",
    },
    {
        bloodType: 'AB+',
        total: 100,
        date: "July 20 2023",
    },
    {
        bloodType: 'AB-',
        total: 21,
        date: "June 14 2023",
    }
];

type Recieved = {
    bloodType: string,
    total: number,
}

const RecievedData: Recieved[] = [
    {
        bloodType: 'A+',
        total: 20,
    },
    {
        bloodType: 'A-',
        total: 30,
    },
    {
        bloodType: 'B+',
        total: 10,
    },
    {
        bloodType: 'B-',
        total: 25,
    },
    {
        bloodType: 'AB+',
        total: 28,
    },
    {
        bloodType: 'AB-',
        total: 99,
    },
    {
        bloodType: 'O+',
        total: 100,
    },
    {
        bloodType: 'O-',
        total: 76,
    },
]

export { stockData, RecievedData }