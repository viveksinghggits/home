'use strict';

const applicationServerPublicKey = 'BHoya8cUmoIKAB1a-wB320oMIimDNh3fVbCOWptYsUMvyi_QI4Da-bEo8EW8eGqZ5lysgs1r9G9-DEDAqYkTPds';
const pushButton = document.getElementById('notifButton');
let isSubscribed = false;
let swRegistration = null;

document.addEventListener("DOMContentLoaded", function () {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').then(function (swReg) {
            swRegistration = swReg;
            initUI();
        });
    } else {
        pushButton.textContent = "Push not spported in your browser";
    }
});

function urlB64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}


function initUI() {
    pushButton.addEventListener('click', function () {
        pushButton.disabled = true;
        if (isSubscribed) {
            //
        } else {
            subscribeUser();
        }
    });

    swRegistration.pushManager.getSubscription().then(function (subscription) {
        isSubscribed = !(subscription === null);
        if (isSubscribed) {
            console.log("User is subscribed");
        } else {
            console.log("User is not subscribed");
        }
        updateBtn();
    });
}

function updateBtn() {
    if (Notification.permission === 'denied') {
        pushButton.textContent = 'Push Messaging Blocked.';
        pushButton.disabled = true;
        updateSubscriptionOnServer(null);
        return;
    }


    console.log("Inside update button " + isSubscribed);
    if (isSubscribed) {
        pushButton.textContent = "Disable Push Messanging";
    } else {
        pushButton.textContent = "Enable Push messanging";
    }
    pushButton.disabled = false;
}

function subscribeUser() {
    const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
    swRegistration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: applicationServerKey
        })
        .then(function (subscription) {
            console.log('User is subscribed.');
            console.log(subscription);

            updateSubscriptionOnServer(subscription);

            isSubscribed = true;

            updateBtn();
        })
        .catch(function (err) {
            console.log('Failed to subscribe the user: ', err);
            updateBtn();
        });
}


function updateSubscriptionOnServer(subscription) {
    // TODO: Send subscription to application server

    const subscriptionJson = document.querySelector('.js-subscription-json');
    const subscriptionDetails =
        document.querySelector('.js-subscription-details');

    if (subscription) {
        subscriptionJson.textContent = JSON.stringify(subscription);
        subscriptionDetails.classList.remove('is-invisible');
    } else {
        subscriptionDetails.classList.add('is-invisible');
    }
}
