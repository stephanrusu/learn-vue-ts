import { Boards, KanbanPriorityFilter, KanbanTypeFilter } from "./enums";

const initialKanban = {
  uid: "nigyhcmrs",
  date: 1604918663862,
  title: "Kanban",
  boardsOrder: ["ntq5y153g", "wewoprlx1", "sl0mm9cem", "z73qbvdv1"],
  boards: {
    ntq5y153g: {
      uid: "ntq5y153g",
      date: 1604613600000,
      board: Boards.toDo,
      tasks: {
        "8lvzs23uf": {
          uid: "8lvzs23uf",
          date: 1604613600000,
          assigned: ["SR"],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          type: KanbanTypeFilter.task,
          priority: KanbanPriorityFilter.major,
          description:
            "Carrot cake chocolate bar liquorice muffin. Gummies chocolate donut marzipan lollipop. Cheesecake danish danish pastry cupcake. Powder icing gummi bears. Macaroon cake cookie tiramisu cheesecake toffee marzipan donut. Sweet marshmallow tart tiramisu wafer chocolate. Sweet gingerbread bonbon dessert jujubes sweet chupa chups pastry.",
          comments: [],
          subTasks: [
            {
              text: "Lorem ipsum dolor sit amet",
              complete: true,
              uid: "x4m5hnlkz",
            },
            {
              text: "Consectetur adipiscing elit.",
              complete: false,
              uid: "aj39ghidc",
            },
          ],
        },
        "8e8v16b0a": {
          uid: "8e8v16b0a",
          date: 1604613600000,
          assigned: ["MR", "SR"],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          type: KanbanTypeFilter.design,
          priority: KanbanPriorityFilter.critical,
          description:
            "Caramels pudding jelly. Sweet wafer toffee halvah macaroon cake croissant gingerbread caramels. Bonbon gummies sesame snaps pudding bonbon powder. Sweet topping wafer. Gummi bears bonbon jelly jelly beans jujubes. Lemon drops topping muffin halvah bonbon icing chocolate cake toffee. Lemon drops bear claw tiramisu lemon drops tootsie roll ice cream cake.",
          comments: [],
          subTasks: [],
        },
        lud0xissi: {
          uid: "lud0xissi",
          date: 1604613600000,
          assigned: ["SR"],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          type: KanbanTypeFilter.bug,
          priority: KanbanPriorityFilter.trivial,
          description:
            "Carrot cake chocolate bar liquorice muffin. Gummies chocolate donut marzipan lollipop. Cheesecake danish danish pastry cupcake. Powder icing gummi bears. Macaroon cake cookie tiramisu cheesecake toffee marzipan donut. Sweet marshmallow tart tiramisu wafer chocolate. Sweet gingerbread bonbon dessert jujubes sweet chupa chups pastry.",
          comments: [],
          subTasks: [],
        },
      },
    },
    wewoprlx1: {
      uid: "wewoprlx1",
      date: 1604613600000,
      board: Boards.inProgress,
      tasks: {
        "98t5ma5pg": {
          uid: "98t5ma5pg",
          date: 1604613600000,
          assigned: ["SR"],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          type: KanbanTypeFilter.bug,
          priority: KanbanPriorityFilter.minor,
          description:
            "Carrot cake chocolate bar liquorice muffin. Gummies chocolate donut marzipan lollipop. Cheesecake danish danish pastry cupcake. Powder icing gummi bears. Macaroon cake cookie tiramisu cheesecake toffee marzipan donut. Sweet marshmallow tart tiramisu wafer chocolate. Sweet gingerbread bonbon dessert jujubes sweet chupa chups pastry.",
          comments: [],
          subTasks: [],
        },
        hc49m900w: {
          uid: "hc49m900w",
          date: 1604613600000,
          assigned: ["MR"],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          type: KanbanTypeFilter.design,
          priority: KanbanPriorityFilter.major,
          description:
            "Carrot cake chocolate bar liquorice muffin. Gummies chocolate donut marzipan lollipop. Cheesecake danish danish pastry cupcake. Powder icing gummi bears. Macaroon cake cookie tiramisu cheesecake toffee marzipan donut. Sweet marshmallow tart tiramisu wafer chocolate. Sweet gingerbread bonbon dessert jujubes sweet chupa chups pastry.",
          comments: [],
          subTasks: [],
        },
      },
    },
    sl0mm9cem: {
      uid: "sl0mm9cem",
      date: 1604613600000,
      board: Boards.inReview,
      tasks: {
        otvgpj19o: {
          uid: "otvgpj19o",
          date: 1604613600000,
          assigned: ["SR"],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          type: KanbanTypeFilter.bug,
          priority: KanbanPriorityFilter.blocker,
          description:
            "Caramels pudding jelly. Sweet wafer toffee halvah macaroon cake croissant gingerbread caramels. Bonbon gummies sesame snaps pudding bonbon powder. Sweet topping wafer. Gummi bears bonbon jelly jelly beans jujubes. Lemon drops topping muffin halvah bonbon icing chocolate cake toffee. Lemon drops bear claw tiramisu lemon drops tootsie roll ice cream cake.",
          comments: [],
          subTasks: [],
        },
      },
    },
    z73qbvdv1: {
      uid: "z73qbvdv1",
      date: 1604613600000,
      board: Boards.done,
      tasks: {
        boc7qorhc: {
          uid: "boc7qorhc",
          date: 1604613600000,
          assigned: ["SR"],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          type: KanbanTypeFilter.task,
          priority: KanbanPriorityFilter.critical,
          description:
            "Caramels pudding jelly. Sweet wafer toffee halvah macaroon cake croissant gingerbread caramels. Bonbon gummies sesame snaps pudding bonbon powder. Sweet topping wafer. Gummi bears bonbon jelly jelly beans jujubes. Lemon drops topping muffin halvah bonbon icing chocolate cake toffee. Lemon drops bear claw tiramisu lemon drops tootsie roll ice cream cake.",
          comments: [],
          subTasks: [],
        },
        ewhp355qo: {
          uid: "ewhp355qo",
          date: 1604613600000,
          assigned: ["SR"],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          type: KanbanTypeFilter.feature,
          priority: KanbanPriorityFilter.major,
          description:
            "Caramels pudding jelly. Sweet wafer toffee halvah macaroon cake croissant gingerbread caramels. Bonbon gummies sesame snaps pudding bonbon powder. Sweet topping wafer. Gummi bears bonbon jelly jelly beans jujubes. Lemon drops topping muffin halvah bonbon icing chocolate cake toffee. Lemon drops bear claw tiramisu lemon drops tootsie roll ice cream cake.",
          comments: [],
          subTasks: [],
        },
      },
    },
  },
};

export default initialKanban;
