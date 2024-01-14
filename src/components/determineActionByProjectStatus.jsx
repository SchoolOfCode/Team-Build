// Function to determine which action buttons to show based on project status
export default function determineActionByProjectStatus(status, button) {
    
    if (button == 1) {
      switch (status) {
      case 1:
        return "Approve";
      case 2:
        return "Archive";
      case 3:
        return "Voting Done";
      case 5:
        return "Agree in P";
      case 6:
        return "Make Active ";
      case 7:
        return "Deployed ";
      case 8:
        return "Archive ";
      case 9:
        return "Archive ";
      default:
        return null;
    }
  }  else {
    switch (status) {
        case 1:
          return "Reject";
        case 2:
          return null;
        case 3:
          return null;
        case 5:
          return "Reject";
        case 6:
          return "Stop Project";
        case 7:
          return "Stopped";
        case 8:
          return null;
        case 9:
          return null;
        default:
          return null;
      }

  }
}