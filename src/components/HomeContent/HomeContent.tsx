import { FunctionComponent } from "react";
import { B } from "../B";

export const HomeContent: FunctionComponent = () => {
	return (
		<>
			<p className='mt-4'>
				В приложении используется: React v18, TypeScript,
				Redux toolkit, RTK query, Redux Persist
				(для синхронизации redux с localstorage),
				Bootstrap 5, SCSS, Framer motion, ES Lint.
			</p>

			<div className='text-start container-fluid p-0'>
				Это приложение разделено на 3 части:
			</div>
			<ol className='p-0 mt-3'>
				<li>
					<B>1. Самая простая.</B>
					<br />
					Можно увидеть, как вытаскивать данные из формы
					и выводить их в других компонентах.
				</li>
				<li>
					<B>2. Список дел на redux toolkit. </B>
					<br />
					Можно добавлять свои списки дел, ставить флажок
					выполнено задание или нет, а также его можно удалить.
					Еще этот список дел синхронизируется с localstorage,
					что позволяет не терять данные при перезагрузке страницы.
					Данный функционал может пригодиться для интернет-магазинов.
				</li>
				<li>
					<B>3. Работа с RTK query.</B>
					<br />
					Вначале загрузки получаем 3-х пользователей из сайта
					jsonplaceholder и имеем возможность подгружать
					по 1 пользователю, нажимая на кнопку.
					При каждом обновлении пользователей у них меняются аварки.
					При нажатии на имя пользователе вы будете перенаправлены
					на страницу с данным об этом пользователе.
				</li>
			</ol>
		</>
	);
};
