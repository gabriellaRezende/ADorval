export default function Footer() {
  return (
    <footer className="w-full border-t border-gelo mt-16 md:mt-20">
      <div className="max-w-5xl mx-auto px-6 py-8 text-center text-sm text-suave">
        © {new Date().getFullYear()} Ana Dorval. Todos os direitos reservados.
      </div>
    </footer>
  );
}