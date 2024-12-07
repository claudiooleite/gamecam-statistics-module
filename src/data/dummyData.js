export const dummyData = {
  match: {
    teams: [
      {
        name: "Smashing Aces",
        color: "#FF5733",
        players: [
          {
            name: "Liam",
            color: "rgba(228, 0, 132, 1)",
            image: "https://dummyimage.com/200x200/ffc300/fff.png&text=LJ",
            imageLoading:
              "https://dummyimage.com/200x200/cccccc/000.png&text=Loading",
            stats: {
              runningDistance: 3200,
              ballPossession: 40, // in percentage
              totalErrors: 23,
              netErrors: 10,
              wallErrors: 12,
              timeInDeadZone: 120, // in seconds
            },
          },
          {
            name: "Ethan",
            color: "rgba(248, 129, 88, 1)",
            image: "https://dummyimage.com/200x200/c70039/fff.png&text=EB",
            imageLoading:
              "https://dummyimage.com/200x200/cccccc/000.png&text=Loading",
            stats: {
              runningDistance: 3500,
              ballPossession: 45,
              totalErrors: 10,
              netErrors: 12,
              wallErrors: 15,
              timeInDeadZone: 90,
            },
          },
        ],
      },
      {
        name: "Racket Rebels",
        color: "rgba(0, 166, 231, 1)",
        players: [
          {
            name: "Sophia",
            color: "#28B463",
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
              timeInDeadZone: 150,
            },
          },
          {
            name: "Olivia",
            color: "rgba(204, 255, 0, 1)",
            image: "https://dummyimage.com/200x200/1f618d/fff.png&text=OT",
            imageLoading:
              "https://dummyimage.com/200x200/cccccc/000.png&text=Loading",
            stats: {
              runningDistance: 4001,
              ballPossession: 60,
              totalErrors: 7,
              netErrors: 21,
              wallErrors: 10,
              timeInDeadZone: 130,
            },
          },
        ],
      },
    ],
  },
};
