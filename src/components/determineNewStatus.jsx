// Function to translate numeric status code to printable status meaning
export default function determineNewStatus(oldStatus, button) {
    if (button == 1) {
        switch (oldStatus) {
            case 1:
              return 3;
            case 2:
              return 99;
            case 3:
              return 5;
            case 5:
              return 6;
            case 6:
              return 7;
            case 7:
              return 8;
            case 8:
              return 99;
            case 9:
              return 99;
            default:
              return null;
          }
  } else {
    switch (oldStatus) {
        case 1:
          return 2;
        case 5:
          return 2;
        case 6:
          return 9;
        case 7:
          return 9;
        default:
          return null;
      }
    
    }
}