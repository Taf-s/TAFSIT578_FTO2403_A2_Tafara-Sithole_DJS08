# DJS08 Project Brief: React Router

🎥 INSERT LOOM PRESENTATION LINK: [Here]

## React Routing Presentation Talking Points

### Question 1: Explain the Setup and Basic Configuration of React Router

**Key Points to Cover:**

- What is the purpose of using React Router in a React application?

The primary purpose of using React Router in a React applicatio is to handle navigation between different views based on the URL or use interaction. It allows you to define routes to handel navigation and rendering of different components based on the current URL.

- How do you set up React Router using `BrowserRouter` as shown in the
  lessons?

To set up React Router using `BrowserRouter` you first need to install react router dom if the dependecy is not there yet, this then allows you to import `BrowserRouter` as Routes, Route.

- Describe the role of the `<Routes>` and `<Route>` components in defining the navigation structure.

The `<Routes>` component is a wrapper component that acts as a container for all yout defined routes. It is responsible for rendering the appropriate components based on the cirrent URL. The `<Routes>`component should be used as a single child of the `<Route>` component.

### Question 2: Application of Route Parameters and Nested Routes

**Key Points to Cover:**

- Explain what route parameters are and how they are used in React Router, including the use of `useParams()` to access these parameters.

Route parameters are placeholders in your URL that can change based on the path. Thus allows you to capture dynamic values from the URL like user IDs or Product IDs.

The `useParams()` hook is then used to grab these dynamic values in order to dispaly the specified information

- Discuss the concept of nested routes as introduced in the lessons. What are nested routes, and how do they benefit the structure of a React application?

Nested routes allow you to create a hierachy of routes, where one route is rendered within another. This is beneficial as it allows you to organise complex layouts or multistep processes within an application.

- Provide an example, such as the configuration for nested routes in the VanLife project.

A good example fromm the VanLife Project would be the host layout and how it has nested routes like the income, reviews and vans. Below is a code snippet as an example.

<Route path= "host" element={<HostLayout />}>  
 <Route index element={<Dashboard />} />
<Route path="income" element={<Income />} />
<Route path="reviews" element={<Reviews />} />
<Route path="vans" element={<HostVans />} />

### Question 3: Implementation of Navigation Controls and Dynamic Linking

**Key Points to Cover:**

- How does the `<Link>` component enhance navigation within a React application?

The `<Link>` component enhance navigation within a React application by providing a convenient way to create clickable links that trigger navigation to different routes.

- Describe the use of `NavLink` for active styling. What makes `NavLink` different from the basic `Link` component?

The `NavLink` component in React Router is a specialized version of the Link component that allows you to add styling to the link that corresponds to the currently active route. This makes it ideal for navigation menus where you want to highlight the link that matches the current URL.

What makes it different from the basic `Link` component is that it extends the functionality of `Link` by automatically applying an active style to the link when the route matches the current URL. Below is a example from the nested routes in the host Layout.

<NavLink
to="income"
style={({ isActive }) => isActive ? activeStyles : null} >
Income
</NavLink>

- Discuss the use of search parameters and the `useSearchParams` hook to dynamically filter content, as seen in the VanLife project challenges.

Search parameters in React Router allow you to pass key-value pairs in the URL to filter or refine the content dynamically. We can see this being applied in the VanLife project in the filtering processes on the vans page which allows the user to filer between different types of vans.
