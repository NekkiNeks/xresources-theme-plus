import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import * as Color from 'color';
import template from './template';
import templateMixed from './templateMixed';
import { execSync } from 'child_process';
import { xresourcesColorsPath } from './xresources';
import { ColorMap } from './colors';

export function generateColorThemes() {
	// Import colors from xrdb
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
		vscode.window.showErrorMessage(`Не удалось загрузить цвета из ${xresourcesColorsPath || '(путь не указан)'}. Убедись, что все значения заданы.`);
		return;
	}

	generateNormalLightTheme();
	generateNormalDarkTheme();
	generateBorderedLightTheme();
	generateBorderedDarkTheme();
	generateBorderedMixedTheme();
	generateNormalMixedTheme();
}

function generateNormalMixedTheme() {
	const colorMap = new ColorMap(false);
	const colorTheme = templateMixed(colorMap, false);
	fs.writeFileSync(path.join(__dirname, '../themes/xresources_normal_mixed.json'), JSON.stringify(colorTheme, null, 4));
}

function generateBorderedMixedTheme() {
	const colorMap = new ColorMap(false);
	const colorTheme = templateMixed(colorMap, false);
	fs.writeFileSync(path.join(__dirname, '../themes/xresources_bordered.json'), JSON.stringify(colorTheme, null, 4));
}

function generateNormalLightTheme() {
	const colorMap = new ColorMap(false);
	const colorTheme = template(colorMap, false);
	fs.writeFileSync(path.join(__dirname, '../themes/xresources_normal_light.json'), JSON.stringify(colorTheme, null, 4));
}

function generateNormalDarkTheme() {
	const colorMap = new ColorMap(true);
	const colorTheme = template(colorMap, false);
	fs.writeFileSync(path.join(__dirname, '../themes/xresources_normal_dark.json'), JSON.stringify(colorTheme, null, 4));
}

function generateBorderedLightTheme() {
	const colorMap = new ColorMap(false);
	const colorTheme = template(colorMap, true);
	fs.writeFileSync(path.join(__dirname, '../themes/xresources_bordered_light.json'), JSON.stringify(colorTheme, null, 4));
}

function generateBorderedDarkTheme() {
	const colorMap = new ColorMap(true);
	const colorTheme = template(colorMap, true);
	fs.writeFileSync(path.join(__dirname, '../themes/xresources_bordered_dark.json'), JSON.stringify(colorTheme, null, 4));
}
