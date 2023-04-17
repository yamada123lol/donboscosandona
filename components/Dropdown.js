

export default function Dropdown(props) {
  return (
      <form>
        <input list="lingue" name="lingue"/>
          <datalist id="lingue">
            <option value="Italiano"/>
            <option value="English"/>
            <option value="Español"/>
            <option value="Français"/>
          </datalist>
        <input type="submit" value="Submit"/>
      </form>
  )
}
