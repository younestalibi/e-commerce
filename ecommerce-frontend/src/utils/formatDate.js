export const formatDate = (dateString) => {
    const currentDate = new Date();
    const date = new Date(dateString);
    const timeDifference = currentDate.getTime() - date.getTime();
    const minutesDifference = Math.floor(timeDifference / (1000 * 60));
    const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const monthsDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));
    const yearsDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));

    if (minutesDifference < 1) {
      return 'Just now';
    } else if (minutesDifference < 60) {
      return `${minutesDifference} minute${minutesDifference !== 1 ? 's' : ''} ago`;
    } else if (hoursDifference < 24) {
      return `${hoursDifference} hour${hoursDifference !== 1 ? 's' : ''} ago`;
    } else if (daysDifference < 30) {
      return `${daysDifference} day${daysDifference !== 1 ? 's' : ''} ago`;
    } else if (monthsDifference < 12) {
      return `${monthsDifference} month${monthsDifference !== 1 ? 's' : ''} ago`;
    } else {
      return `${yearsDifference} year${yearsDifference !== 1 ? 's' : ''} ago`;
    }
  };