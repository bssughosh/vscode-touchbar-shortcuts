import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let fixAllImports = vscode.commands.registerCommand('touchbar-shortcuts.fix-all-imports', () => {
		vscode.commands.executeCommand('dart-import.fix-all');
	});

	let fixImports = vscode.commands.registerCommand('touchbar-shortcuts.fix-imports', () => {
		vscode.commands.executeCommand('dart-import.fix');
	});

	let rename = vscode.commands.registerCommand('touchbar-shortcuts.rename', () => {
		vscode.commands.executeCommand('editor.action.rename');
	});

	context.subscriptions.push(fixAllImports, fixImports, rename);
}

export function deactivate() { }
