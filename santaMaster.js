function getAttendees(peopleInvited, responses){
  return peopleInvited.filter(function(creature) {
    return responses.some(function(reponse) {
      return creature === response.name && response.response === 'accepted';
    }) || responses.every(function(response){
      return creature !== response.name;
    });
  });
}
