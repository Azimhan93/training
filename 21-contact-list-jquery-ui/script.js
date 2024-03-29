import ContactApi from "./ContactApi.js";

const CONTACT_ITEM_SELECTOR = '.contactItem';
const DELETE_BTN_SELECTOR = '.deleteBtn';
const EDIT_BTN_SELECTOR = '.editBtn';

const $inputs = $('input');
const $contactListEl = $('#contactList');
const contactItemTemplate = document.querySelector('#contactItemTemplate').innerHTML;
let contactList = [];

const $form = $('#contactModal form')[0];
const dialog = $( "#contactModal" ).dialog({
  autoOpen: false,
  height: 400,
  width: 350,
  modal: true,
  buttons: {
    Save: saveContact,
    Cancel: closeModal
  },
  close: closeModal
});


$('#addContactBtn').on('click', onAddContactBtnClick);

$('#contactList')
  .on('click', EDIT_BTN_SELECTOR, onEditBtnClick)
  .on('click', DELETE_BTN_SELECTOR, onDeleteBtnClick);

init();

function init() {
  ContactApi.getList()
    .then(list => contactList = list)
    .then(renderContactList)
    .catch(handleError);
}

function onAddContactBtnClick(e) {
  openModal();
}

function onEditBtnClick(e) {
  const id = getContactElId(e.target);
  const contact = findContact(id);

  openModal(contact);
}

function onDeleteBtnClick(e) {
  const id = getContactElId(e.target);
  removeContact(id);
}

function saveContact(e) {

  const contact = getContact();


  if(!isPhone(contact.phone)) {
    return alert('Enter please Phone number like this format 0951234567!');
  } else if(isEmpty(contact.firstName)) {
    return alert('Enter please your FirstName!');
  } else if(isEmpty(contact.lastName)) {
    return alert('Enter please your LastName!');
  }


  addContact(contact);
  closeModal();
}

function getContact() {
  const contact = {};

  $inputs.each((i, input) => {
    contact[input.name] = input.value;
  })

  return contact;
}

function fillContactForm(contact) {
  for (let prop in contact) {
    if ($form.elements.hasOwnProperty(prop)) {
      $form.elements[prop].value = contact[prop];
    }
  }
}

function addContact(contact) {
  if (contact.id) {
    ContactApi
      .update(contact.id, contact)
      .catch(handleError);

    replaceContactEl(contact.id, contact);
    contactListUpdate(contact.id, contact);
  } else {
    ContactApi
      .create(contact)
      .then((newContact) => {
        renderContact(newContact);
        contactListAdd(newContact);
      })
      .catch(handleError);
  }
}

function removeContact(id) {
  const contactEl = getContactElById(id);

  ContactApi
    .delete(id)
    .catch(handleError);

  contactEl.remove();
}

function renderContactList(contacts) {
  const html = contacts.map(getContactHTML).join('');

  $contactListEl.html(html);
}

function renderContact(contact) {
  $contactListEl.append(getContactHTML(contact));
}

function replaceContactEl(id, contact) {
  const oldContactEl = getContactElById(id);
  const newContactEl = createContactEl(contact);

  oldContactEl.replaceWith(newContactEl);
}

function contactListUpdate(id, contact) {
  const oldContact = contactList.find(c => c.id === id);

  Object.keys(contact).forEach(key => oldContact[key] = contact[key]);
}

function contactListAdd(contact) {
  contactList.push(contact);
}

function createContactEl(contact) {
  const table = document.createElement('table');

  table.innerHTML = getContactHTML(contact);

  return table.querySelector(CONTACT_ITEM_SELECTOR);
}

function getContactHTML(contact) {
  let contactItemHTML = contactItemTemplate;

  for (let prop in contact) {
    contactItemHTML = contactItemHTML.replace(`{{${prop}}}`, contact[prop]);
  }

  return contactItemHTML;
}

function getContactElById(id) {
  return $contactListEl.find(`[data-id="${id}"]`);
}

function getContactElId(el) {
  return el.closest(CONTACT_ITEM_SELECTOR).dataset.id;
}

function isContactValid(contact) {
  return !isEmpty(contact.firstName) && !isEmpty(contact.lastName) && isPhone(contact.phone);
}

function isPhone(phone) {
  return !isNaN(phone) && validPhoneNumber(phone);
}

function validPhoneNumber(phone) {
  return /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(phone);
}

function isEmpty(str) {
  return (!str || 0 === str.length);
}

function handleError(e) {
  alert(e.message);
}

function openModal(contact = {}) {
  fillContactForm(contact);
  dialog.dialog( "open" );
}

function closeModal() {
  $form.reset();
  dialog.dialog( "close" );
}

function findContact(id) {
  return contactList.find(c => c.id === id);
}