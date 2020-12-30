export const Boards = {
  toDo: { text: "To Do", color: "indigo" },
  inProgress: { text: "In Progress", color: "blue" },
  inReview: { text: "In Review", color: "cyan" },
  done: { text: "Done", color: "teal" },
};

export const KanbanPriorityFilter = {
  all: {
    text: "All",
    key: "all",
    background: {
      color: "bg-gray-200",
      active: "bg-gray-300",
    },
  },
  blocker: {
    text: "Blocker",
    key: "blocker",
    background: {
      color: "bg-red-400",
      active: "bg-red-500",
    },
  },
  critical: {
    text: "Critical",
    key: "critical",
    background: {
      color: "bg-orange-400",
      active: "bg-orange-500",
    },
  },
  major: {
    text: "Major",
    key: "major",
    background: {
      color: "bg-yellow-400",
      active: "bg-yellow-500",
    },
  },
  minor: {
    text: "Minor",
    key: "minor",
    background: {
      color: "bg-cyan-400",
      active: "bg-cyan-500",
    },
  },
  trivial: {
    text: "Trivial",
    key: "trivial",
    background: {
      color: "bg-teal-400",
      active: "bg-teal-500",
    },
  },
};

export const KanbanTypeFilter = {
  all: {
    text: "All",
    key: "all",
    background: {
      color: "bg-gray-200",
      active: "bg-gray-300",
    },
  },
  bug: {
    text: "Bug",
    key: "bug",
    background: {
      color: "bg-red-600",
      active: "bg-red-700",
    },
  },
  task: {
    text: "Task",
    key: "task",
    background: {
      color: "bg-blue-600",
      active: "bg-blue-700",
    },
  },
  design: {
    text: "Design",
    key: "design",
    background: {
      color: "bg-indigo-600",
      active: "bg-indigo-700",
    },
  },
  feature: {
    text: "Feature",
    key: "feature",
    background: {
      color: "bg-green-600",
      active: "bg-green-700",
    },
  },
};
