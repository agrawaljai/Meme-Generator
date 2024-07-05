# Meme Generator

This project is a Meme Generator built using React and React Bootstrap. It allows users to select meme templates through an API, add and edit text, and adjust the text position on the meme. Users can then save the created meme as a JPEG file.

## Snaps

![Screenshot 2024-07-06 020942](https://github.com/agrawaljai/Meme-Generator/assets/153916803/5265b346-bedb-470a-a8e7-9060a11b1273)
![Screenshot 2024-07-06 020831](https://github.com/agrawaljai/Meme-Generator/assets/153916803/6683cc52-593a-4092-bfb6-acdacf622615)
![Screenshot 2024-07-06 020914](https://github.com/agrawaljai/Meme-Generator/assets/153916803/404799b0-988b-42ac-9490-9be8becb711c)

## Features

- **Template Selection:** Users can select meme templates fetched from an API.
- **Add Text:** Click on the template to add text.
- **Edit Text:** Double-click on the text to edit it.
- **Drag Text:** Drag the text to adjust its position on the template using `react-draggable`.
- **Save Meme:** Save the created meme as a JPEG file using `component-to-jpg`.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **React Bootstrap:** Bootstrap components built with React.
- **react-draggable:** A React library for creating draggable elements.
- **component-to-jpg:** A library to convert React components to JPEG images.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/meme-generator.git
   ```
2. Navigate to the project directory:
   ```sh
   cd meme-generator
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

## Usage

1. Start the development server:
   ```sh
   npm start
   ```
2. Open your browser and go to `http://localhost:3000`.

## How to Use

1. **Select Template:** Browse and select a meme template from the available options.
2. **Add Text:** Click on the template to add text. A text box will appear where you clicked.
3. **Edit Text:** Double-click on the text box to edit the text content.
4. **Drag Text:** Click and drag the text box to move it around and position it on the template.
5. **Save Meme:** Click the save button to download the meme as a JPEG file.

## Dependencies

- [React](https://reactjs.org/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [react-draggable](https://www.npmjs.com/package/react-draggable)
- [component-to-jpg](https://www.npmjs.com/package/component-to-jpg)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Inspiration for this project came from the need for a simple and easy-to-use meme generator.
- Special thanks to the developers of `react-draggable` and `component-to-jpg` for their amazing libraries.

---
