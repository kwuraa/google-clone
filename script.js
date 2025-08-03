const buttonSearch = document.getElementById("search");
const contentSearch = document.getElementById("searchBar");

function search() {
  const query = contentSearch.value.trim();
  if (query === "") {
    alert("Barra de pesquisa vazia!!");
  } else {
    alert(query);

    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
      query
    )}`;
  }
}

buttonSearch.addEventListener("click", search);
