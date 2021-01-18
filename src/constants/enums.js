export const Boards = {
  toDo: {
    text: "To Do",
    key: "toDo",
    color: {
      active: "bg-indigo-500",
      hover: "bg-indigo-600",
    },
  },
  inProgress: {
    text: "In Progress",
    key: "inProgress",
    color: {
      active: "bg-blue-500",
      hover: "bg-blue-600",
    },
  },
  inReview: {
    text: "In Review",
    key: "inReview",
    color: {
      active: "bg-cyan-500",
      hover: "bg-cyan-600",
    },
  },
  done: {
    text: "Done",
    key: "done",
    color: {
      active: "bg-teal-500",
      hover: "bg-teal-600",
    },
  },
};

export const ProjectStatus = {
  ongoing: {
    text: "Ongoing",
    key: "ongoing",
    color: {
      background: "bg-orange-100",
      text: "text-orange-800",
    },
  },
  finished: {
    text: "Finished",
    key: "finished",
    color: {
      background: "bg-green-100",
      text: "text-green-800",
    },
  },
};

export const KanbanPriority = {
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

export const KanbanType = {
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
      color: "bg-purple-600",
      active: "bg-purple-700",
    },
  },
  feature: {
    text: "Feature",
    key: "feature",
    background: {
      color: "bg-cyan-600",
      active: "bg-cyan-700",
    },
  },
};

const allEntry = {
  all: {
    text: "All",
    key: "all",
    background: {
      color: "bg-gray-200",
      active: "bg-gray-300",
    },
  },
};

export const KanbanPriorityFilter = {
  ...allEntry,
  ...KanbanPriority,
};

export const KanbanTypeFilter = {
  ...allEntry,
  ...KanbanType,
};
