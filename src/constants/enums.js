export const Boards = {
  toDo: { text: "To Do", color: "indigo" },
  inProgress: { text: "In Progress", color: "blue" },
  inReview: { text: "In Review", color: "cyan" },
  done: { text: "Done", color: "teal" },
};

export const KanbanPriorityFilter = {
  all: {
    text: "All",
    background: {
      color: "bg-gray-200",
      active: "bg-gray-300",
    },
  },
  blocker: {
    text: "Blocker",
    background: {
      color: "bg-red-400",
      active: "bg-red-500",
    },
  },
  critical: {
    text: "Critical",
    background: {
      color: "bg-orange-400",
      active: "bg-orange-500",
    },
  },
  major: {
    text: "Major",
    background: {
      color: "bg-yellow-400",
      active: "bg-yellow-500",
    },
  },
  minor: {
    text: "Minor",
    background: {
      color: "bg-cyan-400",
      active: "bg-cyan-500",
    },
  },
  trivial: {
    text: "Trivial",
    background: {
      color: "bg-teal-400",
      active: "bg-teal-500",
    },
  },
};

export const KanbanTypeFilter = {
  all: {
    text: "All",
    background: {
      color: "bg-gray-200",
      active: "bg-gray-300",
    },
  },
  bug: {
    text: "Bug",
    background: {
      color: "bg-red-600",
      active: "bg-red-700",
    },
  },
  task: {
    text: "Task",
    background: {
      color: "bg-blue-600",
      active: "bg-blue-700",
    },
  },
  design: {
    text: "Design",
    background: {
      color: "bg-indigo-600",
      active: "bg-indigo-700",
    },
  },
};
