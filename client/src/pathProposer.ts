import * as vscode from "vscode";
import * as os from "os";
import * as path from "path";
import {SECTION_CONF} from "./constants";
import * as tmp from "tmp";
import * as fs from "fs";

const EXPORT_OBJECTS_PATTERN = "defaultExportObjectsPattern";
const EXPORT_OBJECT_PATTERN = "defaultExportObjectPattern";
const MODE = "mode";

/**
 * Ensure that the folder supposed to hold the filename exists and if not, creates it
 * @param filepath absolute path, including the filename
 */
export async function ensureParentFolderExists(filepath: string) {
  console.log("> ensureParentFolderExists", filepath);
  const parentFolder = path.dirname(filepath);
  ensureFolderExists(parentFolder);
}
export async function ensureFolderExists(folder: string) {
  console.log("> ensureFolderExists", folder);
  if (!fs.existsSync(folder)) {
    console.log("ensureFolderExists: creating ", folder);
    fs.mkdirSync(folder, {recursive: true});
  }
  console.log("< ensureFolderExists");
}

interface ContextValues {
  /**
   * User Home Dir
   */
  u?: string;
  /**
   * first workspace folder
   */
  w?: string;
  /** either workspace folder if defined, or home dir */
  x?: string;
  /** day */
  d?: string;
  /** Month */
  // eslint-disable-next-line @typescript-eslint/naming-convention
  M?: string;
  /** Year */
  y?: number;
  /** Hours */
  h?: string;
  /** Minutes */
  m?: string;
  /** Seconds */
  s?: string;
  /** environment name */
  e?: string;
  /** Object type */
  o?: string;
  /** Object name */
  n?: string;
}

/**
 * this service is used to propose paths (folders, filenames)
 * It relies on configuration items and variable substitution
 */
export class PathProposer {
  private static getConfigKey(key: string): unknown | string {
    let value: unknown | string = vscode.workspace
      .getConfiguration(SECTION_CONF)
      .get(key);
    return value;
  }

  private static getWorkspaceFolder(): undefined | string {
    if (
      vscode.workspace.workspaceFolders !== undefined &&
      vscode.workspace.workspaceFolders.length > 0
    ) {
      const proposedFolder =
        vscode.workspace.workspaceFolders[0].uri.fsPath.replace(/\\/g, "/");
      return proposedFolder;
    }
    return undefined;
  }

  public static replaceVariables(
    pattern: string,
    context: ContextValues = {}
  ): string {
    // compute default values
    const w = this.getWorkspaceFolder();
    const now = new Date();
    const defaultContextValues: ContextValues = {
      u: os.homedir(),
      w,
      x: w ? w : os.homedir(),
      y: now.getUTCFullYear(),
      // eslint-disable-next-line @typescript-eslint/naming-convention
      M: String(now.getUTCMonth() + 1).padStart(2, "0"),
      d: String(now.getUTCDate()).padStart(2, "0"),
      h: String(now.getUTCHours()).padStart(2, "0"),
      m: String(now.getUTCMinutes()).padStart(2, "0"),
      s: String(now.getUTCSeconds()).padStart(2, "0"),
    };

    const values = {
      ...defaultContextValues,
      ...context,
    };
    // replace the tokens in path
    for (const [key, value] of Object.entries(values)) {
      const regexp = new RegExp(`%${key}`, "g");
      pattern = pattern.replace(regexp, value ? value.toString() : "");
    }

    return pattern;
  }

  private static getDefaultExportedObjectsFolder(): string {
    let workplaceFolder = this.getWorkspaceFolder();
    if (workplaceFolder === undefined) {
      throw new Error("Workplace folder is undefined");
    }
    if ("devsecops" === this.getConfigKey(MODE)) {
      return path.join(workplaceFolder, "iiq-xml-config/src/main/config");
    }

    return path.join(workplaceFolder, "exportedObjects");
  }

  public static getExportedObjectsFolder(environment: string): string {
    const pattern = this.getConfigKey(EXPORT_OBJECTS_PATTERN);
    if (typeof pattern !== "string" || pattern === "") {
      return this.getDefaultExportedObjectsFolder();
    }

    const path = this.replaceVariables(pattern, {e: environment});
    return path as string;
  }

  private static getDefaultExportedObjectFilename(
    objectType: string,
    objectName: string
  ): string {
    const tempFile = tmp.tmpNameSync({
      prefix: `${objectType}-${objectName}`,
      postfix: ".xml",
    });
    return tempFile;
  }

  public static sanitize(name: string): string {
    name = name.replace(/[/\\]/, "_");
    return name;
  }

  public static getExportedObjectFilename(
    environment: string,
    objectType: string,
    objectName: string
  ): string {
    const pattern = this.getConfigKey(EXPORT_OBJECT_PATTERN);
    objectName = this.sanitize(objectName);
    if (typeof pattern !== "string" || pattern === "") {
      return this.getDefaultExportedObjectFilename(objectType, objectName);
    }
    const contextValues: ContextValues = {
      e: environment,
      o: objectType,
      n: objectName,
    };
    const path = this.replaceVariables(pattern, contextValues);
    ensureParentFolderExists(path);
    return path as string;
  }
}
