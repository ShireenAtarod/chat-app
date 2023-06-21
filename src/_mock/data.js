import girlAvatar from '../assets/girlAvatar.jpg';
import girlAvatar2 from '../assets/girlAvatar2.jpg';
import boyAvatar from '../assets/boyAvatar.jpg';
import boyAvatar2 from '../assets/boyAvatar2.jpg';
import boyAvatar3 from '../assets/boyAvatar3.jpg';

export const me = {id: '0', username: 'Shireen', avatar: girlAvatar2,
                   firstName: 'Shireen', lastName: 'Atarod', 
                   phone: '+989388906897', email: 'shireen.atarod@gmail.com'}

export const chatList = [
    {id: '1', username: 'Ghazale', avatar: girlAvatar},
    {id: '2', username: 'Hamed', avatar: boyAvatar3},
    {id: '3', username: 'Sepahrad', avatar: boyAvatar2},
    {id: '4', username: 'Alireza', avatar: boyAvatar},
]

export const allMessages = [
    {
        chatId: '1',
        messages: [
            {sender: 'Ghazale', createdAt: '10:05', message: 'Hi'},
            {sender: 'Shireen', createdAt: '10:06', message: 'Hey'},
        ]
    },
    {
        chatId: '2',
        messages: [
            {sender: 'Hamed', createdAt: '2023/06/19 9:35', message: 'Salam'},
            {sender: 'Shireen', createdAt: '2023/06/19 9:39', message: 'Aleyke salam'},
        ]
    },
    {
        chatId: '4',
        messages: [
            {sender: 'Shireen', createdAt: '2023/06/18 16:07', message: 'Salam. mishe file ro baram ersal koni?'},
            {sender: 'Alireza', createdAt: '2023/06/18 16:32', message: 'Alan mifrestam'},
            {sender: 'Alireza', createdAt: '10:42', message: 'dorost shod?'},
            {sender: 'Shireen', createdAt: '11:11', message: 'Are'},
        ]
    }
]