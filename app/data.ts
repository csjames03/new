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

export { stockData }