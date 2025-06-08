🌿 Fertilizer Dashboard

A responsive and interactive web application that displays and analyzes fertilizer data across different states and timelines. It provides filtering, sorting, charting, and dashboard summaries using modern React and visualization tools.

🚀 Features

📊 1. Interactive Data Table
Built with AG Grid.

Features:

Sorting

Filtering (text, floating filters)

Column hover highlighting

Fully responsive

📈 2. Requirement & Availability Bar Chart
Built with Recharts.

View fertilizer usage (requirement or availability) across states over time.

Selectable regions via dropdown.

Smooth and responsive layout.

🥧 3. Top 5 Fertilizers Charts

Two separate Pie Charts:

Top 5 Most Required Fertilizers

Top 5 Least Available Fertilizers

Labels and color legend included.

Dynamically updates from real data.

📋 4. Summary Dashboard

A card-style display of:

Total Fertilizer Types

Top 5 Required Fertilizers

Least 5 Available Fertilizers

Total Requirement and Availability

Beautifully styled to match a professional UI.

🛠️ Tech Stack

React.js – UI Framework

AG Grid – For advanced table display

Recharts – For bar and pie chart visualizations

Tailwind CSS / Custom CSS – UI styling

JavaScript (ES6) – Logic and utility functions

📂 Project Structure

src/
│
├── components/
│   ├── ProductList/          → AG Grid Table
│   ├── Chart/                → Bar chart (Requirement / Availability)
│   ├── Piechart/             → Pie charts for Top 5 fertilizers
│   ├── Dashboard/            → Fertilizer summary card dashboard
│
├── utils.js                  → Utility functions for data formatting
├── result.js                 → JSON data (dummy / real-time source)

🧩 How to Use

📁 ProductList: Shows full fertilizer data in a sortable/filterable grid.

📊 Chart: Select a state to see bar chart of fertilizer usage.

🥧 Piechart: View the top 5 fertilizers required or least available.

📋 Dashboard: Navigate to the Dashboard.jsx to view overall summary.

💡 Future Enhancements

Add search functionality to filter states or products.

Integrate backend API for live data.

Add export to CSV or PDF feature.
