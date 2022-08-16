import { Scene } from "@babylonjs/core";

export type MeshWriterOptions = { [key: string]: any }

export function MeshWriter(scene: Scene, options: MeshWriterOptions ): typeof Writer;

export type WriterOptions = { 
    "font-family"?: string;
    "letter-height"?: number;
    "letter-thickness"?: number;
    color?: string;
    anchor?: string;
    colors?: {
        diffuse?: string;
        specular?: string;
        ambient?: string;
        emissive?: string;
    },
    position?: {
        x: number;
        y: number;
        z: number;
    }
};

export class Writer {
    constructor(text: string, options: WriterOptions);
}