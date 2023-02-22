// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

function isAdmin(user) {
    if (user.userRole === 'ADMIN') {
        return true;
    } else {
        return false;
    }
}

function getEmail(user) {
    let fname = user.firstName.toLowerCase();
    let lname = user.lastName.toLowerCase();
    return fname + '.' + lname + '@codeimmersives.com';
}

function getPlaylistLength(playlist) {
    return playlist.songs.length;
  }

function getHardestHomework(homework) {
    if (homework.length === 0) {
        return '';
    }
    let lowest = homework[0];
    for (let i = 1; i < homework.length; i++) {
        if (homework[i].averageScore < lowest.averageScore) {
            lowest = homework[i];
        }
    }
    return lowest.name;
}

function createPhonebook(names, numbers) {
    let phonebook = {};
    for (let i = 0; i < names.length; i++) {
      let name = names[i];
      let number = numbers[i];
      phonebook[name] = number;
    }
    return phonebook;
  }
// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};