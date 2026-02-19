import * as vscode from 'vscode';
import * as Color from 'color';
import { execSync } from 'child_process';
import { xresourcesColorsPath } from './xresources';

function getColorsFromXresources() {
	const colorMap: Record<string, Color> = {};

	try {
		const raw = execSync(`xrdb -n ${xresourcesColorsPath}`).toString();

		// Список нужных ключей
		const keys = [...Array.from({ length: 16 }, (_, i) => `color${i}`), 'background', 'foreground', 'cursorColor'];

		for (const key of keys) {
			const regex = new RegExp(`${key}\\s*:\\s*(#[a-fA-F\\d]{6})`, 'i');
			const match = raw.match(regex);

			if (match && match[1]) {
				colorMap[key] = Color(match[1]);
			} else {
				throw new Error(`Не удалось найти цвет для ${key}`);
			}
		}
	} catch (error) {
		const message = `Не удалось загрузить цвета из ${xresourcesColorsPath || '(путь не указан)'}. Убедись, что все значения заданы.`;
		vscode.window.showErrorMessage(message);
		throw new Error(message);
	}

	return colorMap;
}

export class ColorMap {
	xres: Record<string, Color>;
	background: Color;
	foreground: Color;
	cursorColor: Color;
	black: Color;
	red: Color;
	green: Color;
	yellow: Color;
	blue: Color;
	magenta: Color;
	cyan: Color;
	white: Color;

	constructor(darken: boolean) {
		const colorsFromXres = getColorsFromXresources();

		this.xres = colorsFromXres;
		this.background = colorsFromXres.background;
		this.foreground = colorsFromXres.foreground;
		this.cursorColor = colorsFromXres.cursorColor;
		this.black = darken ? colorsFromXres.color0 : colorsFromXres.color8;
		this.red = darken ? colorsFromXres.color1 : colorsFromXres.color9;
		this.green = darken ? colorsFromXres.color2 : colorsFromXres.color10;
		this.yellow = darken ? colorsFromXres.color3 : colorsFromXres.color11;
		this.blue = darken ? colorsFromXres.color4 : colorsFromXres.color12;
		this.magenta = darken ? colorsFromXres.color5 : colorsFromXres.color13;
		this.cyan = darken ? colorsFromXres.color6 : colorsFromXres.color14;
		this.white = darken ? colorsFromXres.color7 : colorsFromXres.color15;
	}
}
