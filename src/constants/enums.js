export const Boards = {
  toDo: { text: "To Do", color: "bg-indigo-500" },
  inProgress: { text: "In Progress", color: "bg-blue-500" },
  inReview: { text: "In Review", color: "bg-cyan-500" },
  done: { text: "Done", color: "bg-teal-500" },
};

export const KanbanPriorityFilter = {
  all: { text: "All", color: "bg-gray-200" },
  blocker: { text: "Blocker", color: "bg-red-400" },
  critical: { text: "Critical", color: "bg-orange-400" },
  major: { text: "Major", color: "bg-yellow-400" },
  minor: { text: "Minor", color: "bg-cyan-400" },
  trivial: { text: "Trivial", color: "bg-teal-400" },
};

export const KanbanTypeFilter = {
  all: { text: "All", color: "bg-gray-200" },
  bug: { text: "Bug", color: "bg-red-600" },
  task: { text: "Task", color: "bg-blue-600" },
  design: { text: "Design", color: "bg-indigo-600" },
};
