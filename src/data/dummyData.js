export const dummyData = {
  teams: [
    {
      name: "Aces",
      color: "#FF5733",
      players: [
        {
          name: "Liam",
          color: "#e40084",
          image:
            "https://images.pexels.com/photos/6292755/pexels-photo-6292755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          imageLoading:
            "https://dummyimage.com/200x200/cccccc/000.png&text=Loading",
          stats: {
            runningDistance: 3200,
            ballPossession: 40, // in percentage
            totalErrors: 23,
            netErrors: 10,
            wallErrors: 12,
            shots: 161,
            timeInDeadZone: "4min 03s",
          },
        },
        {
          name: "Ethan",
          color: "#f88158",
          image:
            "https://images.pexels.com/photos/5765593/pexels-photo-5765593.jpeg?auto=compress&cs=tinysrgb&w=300",
          imageLoading:
            "https://dummyimage.com/200x200/cccccc/000.png&text=Loading",
          stats: {
            runningDistance: 3500,
            ballPossession: 45,
            totalErrors: 10,
            netErrors: 12,
            wallErrors: 15,
            shots: 180,
            timeInDeadZone: "5min 43s",
          },
        },
      ],
    },
    {
      name: "Rebels",
      color: "rgba(0, 166, 231, 1)",
      players: [
        {
          name: "Sophia",
          color: "#00a6e7",
          image:
            "https://images.pexels.com/photos/6250905/pexels-photo-6250905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          imageLoading:
            "https://dummyimage.com/200x200/cccccc/000.png&text=Loading",
          stats: {
            runningDistance: 4100,
            ballPossession: 55,
            totalErrors: 8,
            netErrors: 6,
            wallErrors: 17,
            shots: 200,
            timeInDeadZone: "4min 03s",
          },
        },
        {
          name: "Olivia",
          color: "#ccff00",
          image:
            "https://images.pexels.com/photos/6827083/pexels-photo-6827083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          imageLoading:
            "https://dummyimage.com/200x200/cccccc/000.png&text=Loading",
          stats: {
            runningDistance: 4001,
            ballPossession: 60,
            totalErrors: 7,
            netErrors: 21,
            wallErrors: 10,
            shots: 120,
            timeInDeadZone: "4min 03s",
          },
        },
      ],
    },
  ],
  game: {
    id: 1,
    court: 5,
    date: "Tuesday 24 Sep 2024",
    length: "60 min",
    time: "20:30",
  },
};
