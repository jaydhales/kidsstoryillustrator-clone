# kidsstoryillustrator.web


```
localhost:9000/api/get-story
```

To run the project:
 - Backend:
    ```
    npm run start:server
    ```
 - Frontend
    ```
    npm run start:client
    ```

## Project structure

  
    ├── ...
    ├── pages # contains all page components
    ├── packages  ├── client
                  ├── server
    
                  
---------------------------------
client
---------------------------------
    ├── ...
    ├── pages # contains all page components
    ├── components  ├── molecule # contains all super components
                    ├── atom # contains all sub components
    ├── utils  ├── hooks   # All custom hooks
               ├── functions # All helper functions
               ├── redux # redux store, slices and api connection
    ├── assets # Images
                ├── icons # contains all icons
    ├── testing utils # helpers for tests
    ├──sass # reset and value partials
    └── ... └──package.json # Contains all dependencies
    
    
