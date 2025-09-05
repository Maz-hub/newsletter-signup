# 📬 Newsletter Sign-Up with Success Message

A responsive React mini project built as part of my journey to understand form logic, conditional rendering, and props handling in React.

This is a Frontend Mentor challenge that I rebuilt step by step — not just to finish it, but to deeply understand the logic behind input handling, validation, conditional views, and passing props between components.

---

## 🎯 What it does

- Users can type their email address and subscribe to a newsletter.
- If the email is invalid, an error message appears with visual feedback.
- If the email is valid, the user lands on a success screen with their email shown.
- Clicking the **Dismiss** button resets the state and brings the user back to the main sign-up view with a cleared input.

---

## 🔧 Tech Used

- React (with functional components and hooks)
- Tailwind CSS 4
- Email regex validation
- Conditional rendering
- Props + state lifting
- Frontend Mentor figma layout

---

## 🧠 What I practiced

This wasn’t just about getting it done. Here’s what I really worked on:

- Using `useState()` to manage multiple pieces of state
- Writing a basic `handleSubmit()` function with real email validation logic (regex)
- Creating a 2-page flow using a single React app (`main` and `success` views)
- Passing props like `email`, `setEmail`, and `setView` between components (and understanding _why_ I had to do it)
- Using conditional logic (`if/else`, ternary, short-circuit `&&`) inside JSX
- Resetting state across components

---

## 🤓 What I learned the hard way

- You _must_ pass all needed props to child components — even if you think you're done 😅
- Regex looks scary but is super useful for real-world form validation
- `onClick`, `onChange`, and `value` are best friends when working with inputs
- You don't need `<form>` if you don’t need built-in form behavior — just use `onClick` on buttons
- State must be lifted to a shared parent if multiple components need to use it

---

## 🚀 Live Demo

👉 [View it on GitHub Pages](https://maz-hub.github.io/newsletter-signup/)

---

## 💬 Final thoughts

I got stuck, unstuck, confused, excited, and learned more than I expected — especially about how props and state work together in React.

> Made with ☕, Tailwind, and a whole lot of console.logs.
