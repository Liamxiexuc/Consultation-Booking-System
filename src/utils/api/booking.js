import { get, post, put, patch } from './axios';

//TODO Move api url to urlmap.js
const API_BOOKING_URL = './bookings';
const API_USER_URL = './users';
const API_CHAT_URL = './chats';

// TODO Fix REST API
export const fetchAllMyBookings = (userId) => {
    const url = `${API_USER_URL}/${userId}/bookings`;
    return get(url).then((response) => response.data);
};

export const fetchAllBookings = () => {
    const url = `${API_BOOKING_URL}`;
    return get(url).then((response) => response.data);
};

export const fetchBookingDetail = (bookingId) => {
    const url = `${API_BOOKING_URL}/${bookingId}`;
    return get(url).then((response) => response.data);
};

export const addBooking = (
    type,
    campus,
    userId,
    topic,
    subject,
    content,
    bookingDate,
    attachment
) => {
    const url = API_BOOKING_URL;
    const status = type === 'Online' ? 'processing' : 'pending';
    const data = {
        type,
        campus,
        userId,
        topic,
        subject,
        content,
        bookingDate,
        attachment,
        status,
    };
    return post(url, data).then((response) => response.data);
};

export const updateBookingStatus = (bookingId, status) => {
    const url = `${API_BOOKING_URL}/${bookingId}`;
    const data = {status};
    return patch(url, data).then((response) => response.data);
};

export const addChat = (chat) => {
    const url = API_CHAT_URL;
    const data = chat;
    return post(url, data).then((response) => response.data);
};

export const fetchAllChatByBookingId = (bookingId) => {
    const url = `${API_CHAT_URL}?bookingId=${bookingId}`;
    return get(url).then((response) => response.data);
};

export const updateChat = (chatId, chatRecords) => {
    const url = `${API_CHAT_URL}/${chatId}`;
    const data = chatRecords;
    return put(url, data).then((response) => response.data);
};
