# 3D Portfolio

This project is a 3D portfolio website built using modern web technologies. Follow the steps below to set up the project locally on your machine.

## Prerequisites

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (which includes npm - Node Package Manager)

## Cloning the Repository

To clone the repository, run the following commands in your terminal:

```bash
git clone https://github.com/satishkumarmurugan/3D_Portfolio.git
cd project_3D_developer_portfolio
```

## Installation

Install the project dependencies using npm:

```bash
npm install
```

## Set Up Environment Variables

Create a new file named `.env` in the root of your project and add the following content:

```bash
REACT_APP_EMAILJS_USERID=your_emailjs_user_id
REACT_APP_EMAILJS_TEMPLATEID=your_emailjs_template_id
REACT_APP_EMAILJS_RECEIVERID=your_emailjs_receiver_id
```

Replace the placeholder values with your actual EmailJS credentials. You can obtain these credentials by signing up on the [EmailJS website](https://www.emailjs.com/).

## Running the Project

Once everything is set up, you can run the development server with the following command:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.

## File Structure and Snippets

Here are some important files used in the project:

- `constants.js`
- `index.css`
- `Motion.js`
- `styles.js`
- `tailwind.config.cjs`

## Live Demo

Check out the live version of this project at: [3D Portfolio](https://satishkumarmuruganportfolio.vercel.app/)

## Credits
This project is based on the 3D portfolio tutorial by Adrian Hajdin from JS Mastery. You can find more of his work at JS Mastery.

