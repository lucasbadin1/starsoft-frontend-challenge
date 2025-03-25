🚀 Update - [20/03/2025]

✅ Implemented Features:
1️⃣ Homepage: Developed using Next.js and React Query for efficient data fetching and state management.

2️⃣ Data Fetching & Optimization:
- Implemented getStaticProps and getServerSideProps for optimized rendering and performance.
- Handled loading, success, and error states to enhance UX.

3️⃣ State Management:
- Utilized useEffect to persist previously loaded data and dynamically fetch new items.

4- Type Safety:
-Defined strong TypeScript typings for products fetched from the API.

🚀 Update - [22/03/2025]

✅ Implemented Features: 
1️⃣ Cart System Enhancements:
-Improved the shopping cart logic, ensuring better scalability and maintainability.
-Refactored components for a cleaner and more modular structure.

2️⃣ Responsive Design Improvements:
-Refined component dimensions and layouts to ensure a seamless experience across different screen sizes.
-Aligned UI with the Figma design, maintaining color consistency and proper scaling.

3️⃣ Code Organization & Clean Architecture:
- Restructured component folders for better readability and maintainability.
- Applied clean code principles, improving reusability and reducing redundancy.
- Prepared the codebase for state management integration with Redux.

🔜 Next Steps:
-Implement Redux for real-time cart updates and centralized state management.
-Continue refining responsiveness and UI consistency across all pages.
-Apply further optimizations for performance and maintainability.

🚀 Update - [23/03/2025]

🔹 Minor Adjustments & Fixes:
- Renamed top bar component to Header for consistency.
- Standardized file naming (ex: nft_list.tsx → nft-list.tsx ...).
- Added missing Footer component to the homepage. 

✅ Implemented Features:
1️⃣ Cart State Optimization & Redux Enhancements:
-Refactored cart logic by replacing multiple iterations with reduce, optimizing total price calculation.
-Enhanced Redux actions (addToCart, removeFromCart, updateQuantity) for better state scalability.
-Improved Sheet behavior, ensuring smooth opening/closing and preventing overlay issues.

2️⃣ UI & UX Fixes:
-Fixed sheet overlay problem, preventing unwanted black background covering the main page.
-Improved Cart UI responsiveness, ensuring a seamless experience across all screen sizes.
-Ensured proper component structure, aligning with best practices for modular and reusable design.

3️⃣ Code Organization & Performance Improvements:
-Refactored file naming conventions (e.g., nft_list.tsx → nft-list.tsx) for consistency.
-Added missing Footer component to the homepage, improving UI completeness.
-Applied clean code principles, reducing redundancy and improving maintainability.

🔜 Next Steps:
-Continue refining the Redux implementation, ensuring efficient state updates and event handling.
-Further optimize performance, focusing on minimizing re-renders and improving data flow.
-Enhance UI consistency, aligning all components with the Figma design for a polished final product.

🚀 Update - [24/03/2025]

✅ Implemented Improvements:
1️⃣ Optimized Data Fetching & Real-Time NFT Updates:
-Tested SSR vs. SSG to optimize initial product loading and improve page performance.
-Refactored Infinite Scroll Logic, enhancing React Query’s implementation for seamless product fetching.
-Fixed pagination issues and improved button interactions for a smoother user experience.
-Improved <LoadMoreButton />, removing unnecessary setPage prop and properly handling onClick.
-Enhanced loading indicators to provide better feedback to users.

📌 Note: This improvement was implemented considering that NFTs may be updated over time due to their value appreciation. By optimizing data fetching, we ensure that users always have access to the most up-to-date product information without unnecessary reloads.

2️⃣ Cart UI & Responsiveness Enhancements:
-Ensured cart items adapt responsively by switching to flex-col on screens below 768px, improving readability.
-Improved layout structure to maintain image quality and consistency across different resolutions.
-Adjusted button sizing dynamically for better usability on smaller screens.
-Refactored Tailwind classes, enhancing maintainability and readability of the UI code.

3️⃣ State Management & Performance Tweaks:
-Optimized Redux store updates for better state consistency in the shopping cart.
-Improved performance of re-renders by ensuring proper dependency handling in hooks.
-Cleaned up unnecessary re-renders and event handlers, improving overall efficiency.

🚀 Update - [25/03/2025]

✅ Implemented Features:
1️⃣ Header Component Refactor & Modularization:

1- Refactored Header Component:
- Modularized the Header component for better separation of concerns and maintainability.
- Applied clean code practices, improving the readability and scalability of the component.
- Made the Header component reusable by isolating the layout and logic into smaller, isolated components where applicable.
- Improved accessibility with proper ARIA attributes and ensured semantic HTML for better screen reader support.

2️⃣ Restructured NFT Card List & Modularized Components:

1- Restructured and Modularized NFT Card List:
- Improved maintainability and readability by restructuring the NFT card list into reusable components.
- Organized and modularized components (e.g., NFTCard, CartButton, DescriptionShowMore) for easier updates and future expansion.
- Applied best practices for modular design, making it easier to scale as the project grows.

2- Improved Component Organization:
- Organized components into appropriate folders for better clarity and scalability.
- Created specific folders for reusable UI elements like Button, Card, and Cart, ensuring clear separation of concerns.
- Standardized component naming conventions, improving code consistency and understandability.

3- Optimized Tailwind CSS Structure:
- Refactored Tailwind CSS classes for improved readability and reusability.
- Applied a consistent pattern for organizing Tailwind classes to enhance maintainability.
- Ensured a cleaner design structure, making it easier to apply future design changes across components.

3️⃣ Code Refactoring & Clean Code Practices:
1- Implemented Clean Code Practices:
Followed clean code principles throughout the project, including better naming conventions, improved function signatures, and simpler logic.
Removed unnecessary code redundancies and applied logical separation, making code more understandable and maintainable.
Enhanced overall code formatting, aligning with ESLint and Prettier configurations to ensure consistency.

2- Improved TypeScript and Type Management:
Created and organized a types folder to centralize TypeScript types, improving reusability and reducing type duplication.
Ensured type safety and clearer code through consistent type definitions across components.

3- Refined Imports and File Organization:
3.1-Organized import statements following a clear convention:
- External libraries
- Next.js internal modules
- Local components and store
3.2- Improved folder structure for better scalability, ensuring that each feature can grow independently.

4️⃣ UI/UX Enhancements:

1- Improved Cart UI and Responsiveness:
- Enhanced Cart UI to be more responsive, ensuring a seamless experience across various screen sizes.
- Improved the behavior of the cart overlay, preventing issues where the cart sheet would incorrectly overlap the page.

2- Enhanced Accessibility:
- Improved accessibility by adding alt attributes to images, ensuring that the website is more inclusive for screen reader users.
-Applied semantic HTML for better structure and accessibility across all components.

5️⃣ Performance and Load Optimization:

1-Dynamic Imports:
- Applied dynamic imports to load heavy components only when necessary, improving performance, especially on initial page load.
- Optimized the loading behavior of modals, large components, and other resource-heavy elements to enhance the user experience.