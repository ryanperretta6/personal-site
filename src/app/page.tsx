import Header from './header';
import Profile from './profile';

export default function Home() {
  return (
    <main className="">
      <Header/>
      <div className="body">
        <Profile />
      </div>
    </main>
  );
}
