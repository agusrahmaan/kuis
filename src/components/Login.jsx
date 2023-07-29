export default function Login() {
  return (
    <div>
      <div className="items-center">Selamat Datang di Sini</div>
      <form className="flex flex-col gap-4 max-w-md bg-gray-200 p-8 rounded-3xl mx-auto">
        <label>
          Email
          <input type="email" />
        </label>
        <label>
          Kata sandi
          <input type="password" />
        </label>
        <button>Masuk</button>
      </form>
      <div className="items-center">Belum Punya Akun? Daftar</div>
    </div>
  );
}
