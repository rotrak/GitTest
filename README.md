# PoC Angular + Cypress

Readme under construction


 # Para hacer test con jest y test library necesario instalar los siguientes comandos
 `ng add @briebug/jest-schematic` Nos desistala karma y todas sus dependencias y nos instala jest y nos crea los archivos de configuración.
 `npm install --save-dev @testing-library/angular`
 `npm install --save-dev @testing-library/user-event` 
 Para simular los eventos del usuario aunque tambien podemos usar `fireEvent` que nos lo proporciona la test-library de angular y es mas completo. 

 `npm i @testing-library/jest-dom`
  // In tsconfig.json
  "include": [
    ...
    "./jest-setup.ts"
  ],

  // In your own jest-setup.js (or any other name)
    import '@testing-library/jest-dom'



 En el archivo sutup-jes.ts cambiar el `import 'jest-preset-angular';` por `iport 'jest-preset-angular/setup-jest'.`