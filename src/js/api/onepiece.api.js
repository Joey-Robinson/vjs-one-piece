const api = "https://onepiececover.com/api/chapters"

export const jikamOnePiece = async () => {
  // General Information
  // const response = await fetch("https://api.jikan.moe/v3/anime/21/")
  const response = await fetch("https://api.jikan.moe/v3/anime/21/characters_staff")
  // Information about episodes
  // Change the 1 for different values
  // https://api.jikan.moe/v3/anime/21/episodes/1

  const data = await response.json()
  console.log(data)
}