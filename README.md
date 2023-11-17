# anais.github.io

Pour ce projet, nous avons utilisé plusieurs technologies différentes. 

Pour la génération des points et des images, nous avons utilisé VisualSFM et MeshLab. 
Grâce à MeshLab, nous avons récupéré des images sous le format .PLY.

Pour le site, nous avons utilisé deux différentes approches. 
Le premier site, nous l'avons créé avec HTML, CSS et Three.js. Cependant, nous avons trouvé que l'importation des fichiers .ply était un peu plus compliquée, alors nous avons converti nos fichiers .ply en fichier .glb. En effet, l'importation des fichiers .glb possédait beaucoup plus de documentation et était dans l'ensemble beaucoup plus simple à implémenter dans un projet comme le nôtre.

Le deuxième site a été créé principalement avec HTML, Bootstrap, et modelViewer. 
ModelViewer est une visionneuse 3D mobile de haute performance et une plate-forme qui permet de prévisualiser nos modèles 3D. 
La création du portail avec modelViewer était relativement plus simple et l'importation des fichiers .glb aussi, contrairement à Three.js, nous avions à importer les modèle à l'aide d'une seule ligne et qui permet en plus de cela d'avoir les contrôles nécessaire avec la souris (rotation, agrandissement, rétrécissement) 


Améliorations possibles : 

Pour la suite, les deux sites ont plusieurs améliorations possibles. 
Le premier site, nous pourrions améliorer son design ainsi que ses contrôles afin de pouvoir avoir la rotation des modèles correcte, amélioration de l'affichage des modèles, amélioration des "jeux de lumières". Nous pourrions aussi avoir un affichage des descriptions des œuvres présent sur le site. 

Pour le second site, en termes d’améliorations, nous avions comme idée d'avoir une section cliquable dans nos "cases" de présentation des œuvres afin d'ouvrir l'œuvre en question sur une autre page et en plus grand avec une description détaillée. 
