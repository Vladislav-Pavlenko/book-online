import styles from './Header.module.css'

export default function Header() {
  return (
    <header>
      <div>
        <input placeholder="Search book, name, author..." />
        <svg width={30} height={30}>
          <use href="img/icons.svg#search"></use>
        </svg>
      </div>
    </header>
  )
}
