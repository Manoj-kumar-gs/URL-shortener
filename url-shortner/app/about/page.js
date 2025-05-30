export default function About() {
  return (
    <div className="w-[70vw] mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-4">About MiniLink</h1>
      <p className="text-lg mb-4">
        MiniLink is a simple and user-friendly URL shortener built using Next.js and MongoDB. It allows you to convert long, complicated links into short, clean, and shareable URLs without needing to log in or create an account.
      </p>
      <p className="text-lg mb-4">
        Just enter your long URL, choose a custom short name, and MiniLink will generate a new link for you. When someone visits your short link, they’ll be instantly redirected to the original website.
      </p>
      <p className="text-lg mb-4">
        MiniLink is ideal for quick sharing, tracking, or simplifying URLs in any context — all while keeping the experience lightweight and hassle-free.
      </p>
      <p className="text-lg">
        This project was built for learning and demonstration purposes using modern web technologies like Next.js, API routes, dynamic routing, and MongoDB.
      </p>
    </div>
  );
}

export const metadata = {
  title: "Minilink- About",
  description: "About page - About the simple and user-friendly URL shortener",
};