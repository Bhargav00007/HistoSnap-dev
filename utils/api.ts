export async function uploadImage(file: File) {
  const formData = new FormData();
  formData.append("image", file);

  const res = await fetch("http://localhost:5000/upload", {
    method: "POST",
    body: formData,
  });

  const json = await res.json();
  return json;
}
