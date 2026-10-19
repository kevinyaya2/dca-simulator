import * as T from 'three';

// Collect first: characters share body materials and death fragments share body geometry.
export function disposeResources(...roots:T.Object3D[]) {
  const geometries=new Set<T.BufferGeometry>(),materials=new Set<T.Material>(),textures=new Set<T.Texture>();
  for(const root of roots)root.traverse(object=>{
    if(object instanceof T.Mesh||object instanceof T.Points||object instanceof T.Line)geometries.add(object.geometry);
    if(object instanceof T.Mesh||object instanceof T.Points||object instanceof T.Line||object instanceof T.Sprite){
      for(const material of Array.isArray(object.material)?object.material:[object.material])materials.add(material);
    }
  });
  for(const material of materials)for(const value of Object.values(material))if(value instanceof T.Texture)textures.add(value);
  for(const texture of textures)texture.dispose();
  for(const material of materials)material.dispose();
  for(const geometry of geometries)geometry.dispose();
}
