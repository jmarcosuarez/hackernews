# hackernews

## Warning! This project is very old at this point! Some of the ideas may be fine would not recommend you use it as a modern reference

Using functional composition to create a paginated and infinite scroll list component in React

The App component renders a form and a list. The form is used as input to search for stories on the Hacker News platform. Submitting the form leads to a request to the Hacker News API. Once the search request succeeds, the list is used to display the list of stories.

By using higher order components, you can opt in and out of functionalities on basic components. The basic components can take care on only one responsibility, and composing them you get advanced components suitable to real life environments.

### So far, the List component is able to opt-in to these functionalities: 
  * Loader: Showing a loading indicator while is fetching data.
  * Paginated list: Fetching more list items by using a More button at the end of the List. Also acting as an error fallback.
  * Infinite scroll: While the More button fetches manually more items, the infinite scroll should fetch more items once the user scrolls to the end of the list. 

The List uses infinite scroll on default, but opt-in the More button when an error occurs. In addition, the More button should indicate the user that an error occurred and he or she can try again to fetch the sublist. The manual paginated fetch is the fallback when an error happens. The user of your application gets a great user experience, because he or she knows what happened and can try it again.

## Configure Higher Order Components
Extract the conditions as configuration for each of the higher order components.

Both HOCs that provide the infinite scroll and paginated list behavior are dependent on each other. And both use props that are not really used in the higher order component itself. These props are unnecessary dependencies. For example, the infinite scroll shouldn’t know about the *error* property. It would be good to make the components unaware of their conditions. These conditions could be extracted as configurations for the higher order components. 

## Installation
`npm install` to install dependencies

## Usage
To run the development server on **http://localhost:8080

```npm run dev```

To run the production server: (Test it in **http://localhost:4000)

```npm run build```

```npm run prod``` 

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History
TODO: Write history

## Credits
TODO: Write credits

## License
TODO: Write license
