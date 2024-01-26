export function getSubheading(numberOfTasks) {
  switch (true) {
    case numberOfTasks === 1:
      return `${numberOfTasks} task`;
    case numberOfTasks > 1:
      return `${numberOfTasks} tasks`;
    default:
      return "Nothing to do";
  }
}
