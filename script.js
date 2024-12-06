// script.js
const results = [
    { title: "Learning JavaScript", category: "technology" },
    { title: "Healthy Lifestyle Tips", category: "lifestyle" },
    { title: "Education Trends 2024", category: "education" },
    { title: "Introduction to AI", category: "technology" }
  ];
  
  document.getElementById("searchButton").addEventListener("click", () => {
    const query = document.getElementById("searchBox").value.toLowerCase();
    const category = document.getElementById("filterCategory").value;
    const resultsContainer = document.getElementById("resultsContainer");
  
    const filteredResults = results.filter(result => {
      const matchesQuery = result.title.toLowerCase().includes(query);
      const matchesCategory = category === "all" || result.category === category;
      return matchesQuery && matchesCategory;
    });
  
    resultsContainer.innerHTML = filteredResults.length
      ? filteredResults.map(res => `<div><h3>${res.title}</h3><p>Category: ${res.category}</p></div>`).join("")
      : "<p>No results found.</p>";
  });
  