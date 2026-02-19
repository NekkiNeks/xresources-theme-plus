import * as vscode from 'vscode';
import * as fs from 'fs';
import { askForXresources, autoUpdate, expandPath } from './xresources';
import { generateColorThemes } from './themes';

var xresourcesColorsPath: string | undefined = vscode.workspace.getConfiguration().get('xresourcesTheme.xresourcesPath');
expandPath();
let autoUpdateWatcher: fs.FSWatcher | null = null;

// Точка входа, данная функция выполняется автоматически
export async function activate(context: vscode.ExtensionContext) {
	xresourcesColorsPath = vscode.workspace.getConfiguration().get('xresourcesTheme.xresourcesPath');
	if (xresourcesColorsPath === undefined || xresourcesColorsPath === '') {
		await askForXresources();
	}
	expandPath();
	generateColorThemes();

	// Register the update command
	let disposable = vscode.commands.registerCommand('xresourcesTheme.update', generateColorThemes);
	context.subscriptions.push(disposable);

	// Start the auto update if enabled
	if (vscode.workspace.getConfiguration().get('xresourcesTheme.autoUpdate')) {
		generateColorThemes(); // Needed for when xresources palette updates while vscode isn't running
		autoUpdateWatcher = autoUpdate();
	}

	// Toggle the auto update in real time when changing the extension configuration
	vscode.workspace.onDidChangeConfiguration(event => {
		let wsconfig = vscode.workspace.getConfiguration();
		if (event.affectsConfiguration('xresourcesTheme.xresourcesPath')) {
			console.log('path updated');
			xresourcesColorsPath = wsconfig.get('xresourcesTheme.xresourcesPath');
			expandPath();
			console.log(xresourcesColorsPath);
			if (xresourcesColorsPath !== undefined) {
				if (wsconfig.get('xresourcesTheme.autoUpdate')) {
					console.log('reloading updater');
					autoUpdateWatcher = autoUpdate();
				}
			}
		}
		if (event.affectsConfiguration('xresourcesTheme.autoUpdate')) {
			console.log('autoUpdate changed');
			if (wsconfig.get('xresourcesTheme.autoUpdate')) {
				if (autoUpdateWatcher === null) {
					autoUpdateWatcher = autoUpdate();
				}
			} else if (autoUpdateWatcher !== null) {
				autoUpdateWatcher.close();
				autoUpdateWatcher = null;
			}
		}
	});
}

export function deactivate() {
	// Close the watcher if active
	if (autoUpdateWatcher !== null) {
		autoUpdateWatcher.close();
	}
}
