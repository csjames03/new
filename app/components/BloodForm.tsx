'use client'

const BloodForm = () => {
    
  return (
    <form action="">
        <input type="number"  />
        <input type="text" placeholder="Location" />
        <select >
            <option value="+">+</option>
            <option value="-">-</option>
        </select>
        <select>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="AB">AB</option>
            <option value="O">O</option>
        </select>
    </form>
  )
}

export default BloodForm