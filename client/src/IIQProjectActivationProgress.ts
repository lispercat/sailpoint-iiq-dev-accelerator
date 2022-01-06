
import * as vscode from 'vscode';
import { Disposable } from "vscode-languageclient";
import {Commands} from "./iiq-commands";

export class IIQProjectActivationProgress {
	private hideEmitter = new vscode.EventEmitter<void>();
	private onHide = this.hideEmitter.event;
	private disposables: Disposable[] = [];

	public showProgress() {
		vscode.window.withProgress({
			location: vscode.ProgressLocation.Notification,
			title: "Opening IIQ Project",
			cancellable: false,
		}, (progress: vscode.Progress<{ message?: string; increment?: number }>) => {
			return new Promise<void>((resolve) => {
        progress.report({
          message: `[show details](command:${Commands.SHOW_LANGUAGE_SERVER_OUTPUT})`
        });
				this.onHide(() => {
					for (const disposable of this.disposables) {
						disposable.dispose();
					}
					return resolve();
				});
			});
		});
	}

	public hideProgress() {
		this.hideEmitter.fire();
	}
}

export const projectActivationProgress = new IIQProjectActivationProgress();