const username = "YOUR_GITHUB_USERNAME";
const container = document.getElementById("project-list");

fetch(`https://api.github.com/users/${Kal5257}/repos`)
  .then(res => res.json())
  .then(data => {
    data.slice(0, 6).forEach(repo => {
      const card = document.createElement("div");
      card.innerHTML = `
        <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
        <p>${repo.description || "No description"}</p>
      `;
      container.appendChild(card);
    });
  });
