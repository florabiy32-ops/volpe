import { CheckIcon } from './Icons.jsx'

export default function Checkbox({ children, ...props }) {
  return (
    <label className="check">
      <input type="checkbox" {...props} />
      <span className="check__box"><CheckIcon /></span>
      {children}
    </label>
  )
}
