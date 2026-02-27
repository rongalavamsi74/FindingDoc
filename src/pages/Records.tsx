import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Records = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-24 p-10 text-center">
        <h1 className="text-2xl font-bold mb-4">Medical Records</h1>
        <p className="text-muted-foreground">
          Records feature coming soon.
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default Records;
