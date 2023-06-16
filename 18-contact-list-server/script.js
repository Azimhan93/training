import ContactApi from "./ContactApi.js";

const REMOVE_BTN_CLASS = 'deleteBtn';
const DONE_CLASS = 'done';
const CONTACT_ITEM_CLASS = 'contactItem';

const contactForm = document.querySelector('#contactForm');
const inputs = document.querySelectorAll('.formInput');
const list = document.querySelector('#contactList');
const contactItemTemplate = document.querySelector('#contactItemTemplate').innerHTML;


contactForm.addEventListener('submit', onContactBtnSubmit);
list.addEventListener('click', onContactListClick);


init();

function init() {
    ContactApi.getList()
    .then(renderContactList)
    .catch(handleError)
}

function onContactBtnSubmit(e) {
    e.preventDefault();

    const contact = getContact();

    if(!isContactValid(contact)) {
        alert('Ошибка')
        return;   
    }

    ContactApi.create(contact)
    .then((contact) => {
        console.log(contact);
    })
    .catch(handleError);

    addNewContact(contact);
    clearContact();
}

function onContactListClick(e) {

    const contactEl = getContactElement(e.target);
    const classList = e.target.classList;
    
    if (contactEl) {
        if (classList.contains(REMOVE_BTN_CLASS)) {
            removeContact(contactEl);
        }

        if (classList.contains(CONTACT_ITEM_CLASS)) {
            toggleDone(contactEl);
        }
    }
}

function getContact() {
    const contact = {};

    inputs.forEach(input => {contact[input.name] = input.value});

    return contact;
}

function getContactElement(target) {
    return target.closest('.' + CONTACT_ITEM_CLASS);
}

function addNewContact(contact) {
    let contactItemHTML = generateContactHTML(contact)

    for (let prop in contact) {
        contactItemHTML = contactItemHTML.replace(`{{${prop}}}`, contact[prop]);
    }
    
    list.insertAdjacentHTML('beforeend', contactItemHTML);
}

function renderContactList(contactList) {
    const contactItemHTML = contactList.map(generateContactHTML).join('');

    list.insertAdjacentHTML('beforeend', contactItemHTML);
}

function generateContactHTML(contact) {
    const done = contact.status ? DONE_CLASS : '';

    return contactItemTemplate
        .replace('{{id}}', contact.id)
        .replace('{{status}}', contact.status)
        .replace('{{firstName}}', contact.firstName)
        .replace('{{lastName}}', contact.lastName)
        .replace('{{phone}}', contact.phone)
        .replace('{{done}}', done)
        ;
}

function removeContact(el) {
    const id = getContactElId(el);
 
    ContactApi
    .delete(id)
    .catch(handleError);
    el.remove();
}

function toggleDone(el) {
    const id = getContactElId(el);
    const status = el.dataset.status !== 'true';

    ContactApi.update(id, {status});

    el.classList.toggle(DONE_CLASS);
}

function getContactElId(el) {
   return el.dataset.id;
}

function isContactValid(contact) {
    return !isEmpty(contact.firstName) && !isEmpty(contact.lastName) && isPhone(contact.phone);
}

function isPhone(phone) {
    let standardPhoneNumber = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return standardPhoneNumber.test(phone);
}

function isEmpty(str) {
    return (!str || 0 === str.length);
}

function clearContact() {
    contactForm.reset();
}

function handleError(e) {
    alert(e.message);
}