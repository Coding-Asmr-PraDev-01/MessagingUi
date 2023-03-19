const msgBxEle = document.querySelector('.msgBx');

data.forEach((item, ind) => {
    let divEle = document.createElement('div');
    divEle.innerHTML = `
    <div>
        <div class="msg ${item.messageType === 'otherPerson' ? 'msgOtherPerson' : ''}">
            <div class="imgBx">
                <img src="${item.userImg}" alt="">
            </div>
        <div class="msgText">
            <p>
                ${item.messageText}
            </p>
            <div class="userDetails">
                <h2 class="userName">${item.userName}</h2>
                <span>${item.time}</span>
            </div>
        </div>
    </div>
    `;
    msgBxEle.appendChild(divEle);
});