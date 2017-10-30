# hackernews
Using functional composition to create a paginated and infinite scroll list component in React

The App component renders a form and a list. The form is used as input to search for stories on the Hacker News platform. Submitting the form leads to a request to the Hacker News API. Once the search request succeeds, the list is used to display the list of stories.

By using higher order components, you can opt in and out of functionalities on basic components. The basic components can take care on only one responsibility, and composing them you get advanced components suitable to real life environments.

So far, the List component is able to opt-in to these functionalities: 
  * Loader: Showing a loading indicator while is fetching data.
  * Paginated list: Fetching more list items by using a More button at the end of the List.
  * Infinite scroll: While the More button fetches manually more items, the infinite scroll should fetch more items once the user scrolls to the end of the list. Now, the two HOCs, paginated list and infinite scroll, can be opted-in exclusively to substitute the functionalities of manual and automatic retrieval of the next page of the list.


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
