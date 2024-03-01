# StudyBuddy

## Rough component function
backend -> backend logic
-->controller ->
-->model -> data object schema
-->routes -> API routing

Src
-->app -> component pages folder
-->-->index -> eg page component name 'index'
-->-->-->.css -> css part
-->-->-->.html ->html part
-->-->-->.ts -> logic
-->-->-->.ts -> ignore
-->-->.css -> main page css
-->-->.html -> main page html + where to replace
-->-->.spec.ts -> ignore
-->-->.module.ts -> page routing 
-->-->.database.service.spec.ts -> ignore
-->-->.database.service.ts -> database service to serve api endpoints

server.js -> node + other external api addon + connect server 

## Testing Backend

Make sure you are in studybuddy folder using `cd studybuddy`
run `node server.js`. 

## Code scaffolding

Run `ng generate component component-name` to generate a new component. 

## Build and serve - only front end testing (prettiness)

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. 
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.




