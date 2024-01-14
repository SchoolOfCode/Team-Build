// Function to translate numeric status code to printable status meaning
  export default function translateStatusToWord(status) {
    switch (status) {
      case 1:
        return "Awaiting Review";
      case 2:
        return "Rejected";
      case 3:
        return "Awaiting Voting";
      case 5:
        return "Votes Cast";
      case 6:
        return "Agreed in Principle";
      case 7:
        return "Project Active";
      case 8:
        return "Project Deployed";
      case 9:
        return "Project Stopped";
      case 99:
        return "Archived";
      default:
        return "unknown";
    }
  }