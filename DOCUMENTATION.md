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