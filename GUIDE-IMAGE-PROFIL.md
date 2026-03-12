# 📸 Guide : Remplacer l'image de profil

## Méthode simple (recommandée)

### 1. Prépare ton image
- Format : JPG ou PNG
- Dimensions recommandées : 600x800px (ratio portrait)
- Poids : moins de 500KB

### 2. Place ton image dans le dossier public
```
/public/profile-thais.jpg
```

### 3. Modifie la page About
Ouvre `/src/app/pages/About.tsx` et modifie la ligne 60 :

```tsx
// AVANT :
<SimpleImageRipple 
  className="hidden md:block w-[280px] lg:w-[313px] h-[340px] lg:h-[380px]"
  imageUrl="https://images.unsplash.com/photo-..."
/>

// APRÈS :
<SimpleImageRipple 
  className="hidden md:block w-[280px] lg:w-[313px] h-[340px] lg:h-[380px]"
  imageUrl="/profile-thais.jpg"
/>
```

## Effet interactif inclus ✨

L'image a déjà un effet élégant au survol :
- ✅ Parallaxe suivant la souris
- ✅ Zoom doux (1.05x)
- ✅ Brillance radiale
- ✅ Texture grain subtile

## Personnalisation de l'effet

Pour modifier l'intensité de l'effet, ouvre `/src/app/components/SimpleImageRipple.tsx` :

### Intensité du parallaxe (ligne 31)
```tsx
// Plus subtil
(mousePos.x - 50) * 0.01

// Plus intense
(mousePos.x - 50) * 0.05
```

### Zoom au hover (ligne 33)
```tsx
// Moins prononcé
scale(1.03)

// Plus prononcé
scale(1.1)
```

### Brillance (ligne 44)
```tsx
// Plus subtil
opacity: isHovered ? 0.2 : 0

// Plus intense
opacity: isHovered ? 0.6 : 0
```

C'est tout ! 🎉
