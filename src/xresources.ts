import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import * as Color from 'color';
import template from './template';
import { execSync } from 'child_process';
import { generateColorThemes } from './themes';

export var xresourcesColorsPath: string | undefined = vscode.workspace.getConfiguration().get('xresourcesTheme.xresourcesPath');
export let autoUpdateWatcher: fs.FSWatcher | null = null;

export function expandPath() {
	if (xresourcesColorsPath !== undefined) {
		if (xresourcesColorsPath.startsWith('~')) {
			xresourcesColorsPath = os.homedir() + xresourcesColorsPath.substring(1);
		} else if (!xresourcesColorsPath.startsWith('/')) {
			xresourcesColorsPath = os.homedir() + '/' + xresourcesColorsPath;
		}
	}
}

export function askForXresources(): Thenable<void> {
	return vscode.window.showInputBox({ prompt: 'Path to .Xresources file', placeHolder: '.Xresources' }).then(x => {
		if (x !== undefined) {
			xresourcesColorsPath = x;
			vscode.workspace.getConfiguration().update('xresourcesTheme.xresourcesPath', x);
		}
	});
}

/**
 * Automatically updates the theme when the color palette changes
 * @returns The watcher for the color palette
 */
export function autoUpdate(): fs.FSWatcher | null {
	let fsWait = false;

	if (autoUpdateWatcher !== null) {
		autoUpdateWatcher.close();
	}

	// Watch for changes in the color palette of xresources
	if (xresourcesColorsPath !== undefined && xresourcesColorsPath !== '') {
		generateColorThemes();

		return fs.watch(xresourcesColorsPath, (event, filename) => {
			if (filename) {
				// Delay after a change is found
				if (fsWait) {
					return;
				}
				fsWait = true;
				setTimeout(() => {
					fsWait = false;
				}, 100);

				// Update the theme
				console.log('Generating themes');
				generateColorThemes();
			}
		});
	} else {
		return null;
	}
}
