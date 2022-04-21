export const saveTourIds = (tourIdArr) => {
    if (tourIdArr.length) {
      localStorage.setItem('saved_tours', JSON.stringify(tourIdArr));
    } else {
      localStorage.removeItem('saved_tours');
    }
  };
  
  export const removeTourId = (tourId) => {
    const savedTourIds = localStorage.getItem('saved_tours')
      ? JSON.parse(localStorage.getItem('saved_tours'))
      : null;
  
    if (!savedTourIds) {
      return false;
    }
  
    const updatedSavedTourIds = savedTourIds?.filter((savedTourId) => savedTourId !== tourId);
    localStorage.setItem('saved_tours', JSON.stringify(updatedSavedTourIds));
  
    return true;
  };