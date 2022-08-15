import { Scene } from "@babylonjs/core";

export type MeshWriterOptions = { [key: string]: any }

export function MeshWriter(scene: Scene, options: MeshWriterOptions ): Writer;

export class Writer {
    constructor( scene: Scene, options: { [key: string]: any } );
}