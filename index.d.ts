import { Scene, Mesh, Material, SolidParticleSystem } from "@babylonjs/core";

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
    },
    rotation?: {
        x: number;
        y: number;
        z: number;
    }
};

export class Writer {
    constructor(text: string, options: WriterOptions);

    getMesh(): Mesh;

    getMaterial(): Material;

    getSPS(): SolidParticleSystem;

//    getMesh
//    getMaterial
//    color                   # sets or gets color but no change to material
//    alpha                   # sets or gets alpha but no change to material
//    setColor                # set emissive color and change color value
//    setAlpha                # change value and material
//    overrideOpac            # change material but not value
//    resetOpac               # sets material to current value
//    dispose          
}