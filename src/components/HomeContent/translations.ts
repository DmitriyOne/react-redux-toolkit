/* eslint-disable max-len */
import { ITranslation } from "../../model/interfaces";

export const translations: ITranslation[] = [
	{
		"language": "English",
		"header": "The application uses: React v18, TypeScript, Redux toolkit, RTK query, Redux Persist (to synchronize redux with localstorage), Bootstrap 5, SCSS, Framer motion, ES Lint.",
		"body": "This application is divided into 3 parts:",
		"items": [
			"1. The most simple. You can see how to pull data from a form and display it in other components.",
			"2. To-do list on redux toolkit. You can add your own to-do lists, check whether the task is completed or not, and you can also delete it. Also, this to-do list is synchronized with localstorage, which allows you not to lose data when reloading the page. This functionality can be useful for online stores.",
			"3. Working with RTK query. At the beginning of the download, we get 3 users from the jsonplaceholder site and have the ability to load 1 user by clicking on the button. With each update of users, their profiles change. When you click on a username, you will be redirected to a page with information about that user."
		]
	},
	{
		"language": "Russian",
		"header": "В приложении используется: React v18, TypeScript, Redux toolkit, RTK query, Redux Persist (для синхронизации redux с localstorage), Bootstrap 5, SCSS, Framer motion, ES Lint.",
		"body": "Это приложение разделено на 3 части:",
		"items": [
			"1. Самая простая.Можно увидеть, как вытаскивать данные из формы и выводить их в других компонентах.",
			"2. Список дел на redux toolkit. Можно добавлять свои списки дел, ставить флажок выполнено задание или нет, а также его можно удалить. Еще этот список дел синхронизируется с localstorage, что позволяет не терять данные при перезагрузке страницы. Данный функционал может пригодиться для интернет-магазинов.",
			"3. Работа с RTK query. Вначале загрузки получаем 3-х пользователей из сайта jsonplaceholder и имеем возможность подгружать по 1 пользователю, нажимая на кнопку. При каждом обновлении пользователей у них меняются аварки. При нажатии на имя пользователе вы будете перенаправлены на страницу с данным об этом пользователе."
		]
	},
	{
		"language": "Ukraine",
		"header": "Додаток використовується: React v18, TypeScript, Redux toolkit, RTK query, Redux Persist (для синхронізації redux з localstorage), Bootstrap 5, SCSS, Framer motion, ES Lint.",
		"body": "Ця програма розділена на 3 частини:",
		"items": [
			"1. Найпростіша. Можна побачити, як витягувати дані з форми та виводити їх в інших компонентах.",
			"2. Список справ на redux toolkit. Можна додавати свої списки справ, ставити прапорець виконане завдання чи ні, і його можна видалити. Ще цей список справ синхронізується з місцевимипереходами, що дозволяє не втрачати дані при перезавантаженні сторінки. Цей функціонал може стати в нагоді для інтернет-магазинів.",
			"3. Робота з RTK query. Спочатку завантаження отримуємо 3 користувачів з сайту jsonplaceholder і маємо можливість підвантажувати по 1 користувачу, натискаючи на кнопку. При кожному оновленні користувачів вони змінюються аварки. При натисканні на ім'я користувача ви будете перенаправлені на сторінку з даними про цього користувача."
		]
	}
];
