// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { convertClassName } from "./lib/converter";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "clsx-className" is now active!'
  );

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    `clsx-className.convert`,
    (event) => {
      // The code you place here will be executed every time your command is executed
      // Display a message box to the user
      const activeEditor = vscode.window.activeTextEditor;

      if (activeEditor === undefined) {
        return;
      }
      convert(activeEditor);
    }
  );

  context.subscriptions.push(disposable);
}

function convert(editor: vscode.TextEditor) {
  editor.edit((builder) => {
    const doc = editor.document;
    const originalText = doc.getText();
    builder.replace(
      new vscode.Range(
        doc.lineAt(0).range.start,
        doc.lineAt(doc.lineCount - 1).range.end
      ),
      convertClassName(originalText)
    );
  });
}

// This method is called when your extension is deactivated
export function deactivate() {}
