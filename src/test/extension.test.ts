import * as assert from "assert";
import * as vscode from "vscode";

suite("className conversion", () => {
  test("clsx-className.convert works", async () => {
    const document = await vscode.workspace.openTextDocument({
      content: `import React from "react";
export const SomeComponent = () => {
    return <div className="a b c">
        <div className={"d e f"}>hello</div>
    </div>;
}`,
    });

    const editor = await vscode.window.showTextDocument(document);
    await vscode.commands.executeCommand("clsx-className.convert");
    const text = editor.document.getText();

    assert.strictEqual(
      text,
      `import React from "react";
export const SomeComponent = () => {
    return <div className={clsx("a", "b", "c")}>
        <div className={clsx("d", "e", "f")}>hello</div>
    </div>;
}`
    );
  });
});
