const unnList = document.querySelector('#lista');
const getMailBtn = document.getElementById('getMailBtn');
const listHeader = '<li class="list-group-item active">Emails</li>'

const getMails = () => {
    for (let i=0; i < 10; i++) {
        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
            const respData = response.data.response;
            const htmlItem = `<li class="list-group-item">${respData}</li>`;
            unnList.innerHTML += htmlItem;
        });
    }
};


getMails();

getMailBtn.addEventListener('click', () => {
    unnList.innerHTML = listHeader;
    getMails();
});